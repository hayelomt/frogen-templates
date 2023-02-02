<?php

namespace App\Http\Controllers\Core;

use Illuminate\Database\Eloquent\Model;

class SingleModelController extends Controller {
    protected Model $model;

    public function index()
    {
        return $this->model::query()->first();
    }

    public function storeModel($request, $dataFields) {
        $item = $this->index();
        $data = $request->only($dataFields);

        if ($item == null) {
            $item = $this->model::create($data);
        } else {
            $item->update($data);
        }


        return $item;
    }
}
