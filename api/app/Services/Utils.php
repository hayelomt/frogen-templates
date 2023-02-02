<?php

namespace App\Services;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Utils {
    public static function formatValidation($errors) {
        $filtered = [];
        foreach ($errors as $key => $value) {
            $filtered[$key] = $value[0];
        }

        return $filtered;
    }

    public static function sort(Builder $query, Request $request) {
        $field = $request->get('sort_field');
        if ($field == '') {
            $field = 'updated_at';
        }
        $sortOp = $request->get('sort_op');
        if ($sortOp !== "asc" && $sortOp !== "desc") {
            $sortOp = "desc";
        }

        $query->orderBy($field, $sortOp);
    }

    public static function paginateQuery(Builder $query, Request $request) {
        static::sort($query, $request);
        if (array_key_exists('limit', $request->all())) {
            return response()->json($query->paginate($request->all()['limit']));
        }

        return response()->json(['data' => $query->get()]);
    }

    public static function paginate(Model $model, Request $request, $includeMedia = false) {
        if (array_key_exists('limit', $request->all())) {
            if ($includeMedia) {
                return response()->json($model::query()->with('media')->paginate($request->all()['limit']));
            }
            return response()->json($model::paginate($request->all()['limit']));
        }

        return response()->json(['data' =>$includeMedia ? $model::query()->with('media')->get() :  $model->all()]);
    }
}
