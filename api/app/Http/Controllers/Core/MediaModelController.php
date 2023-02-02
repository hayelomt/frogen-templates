<?php

namespace App\Http\Controllers\Core;

use App\Services\Utils;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class MediaModelController extends Controller {
    protected Model $model;

    public function index(Request $request)
    {
        return Utils::paginateQuery($this->model::query()->with('media'), $request);
    }


    public function storeModel($request, $dataFields, $fileFields) {

        $item = $this->model::create($request->only($dataFields));

        foreach ($fileFields as $fileField ) {
            if ($request->has($fileField['fieldName'])) {
                $item->addMediaFromRequest($fileField['fieldName'])->toMediaCollection   ($fileField['collection']);
            }
        }

        return $this->show($item->id);
    }

    public function show($id)
    {
        return $this->model::query()->with('media')->findOrFail($id);
    }

    public function updateModel($request, $modelInstance, $dateFields, $fileFields) {
        $modelInstance->update($request->only($dateFields));

        foreach($fileFields as $fileField) {
            if ($request->has($fileField['fieldName'])) {
                $modelInstance->clearMediaCollection($fileField['collection']);
                $modelInstance->addMediaFromRequest($fileField['fieldName'])->toMediaCollection($fileField['collection']);
            }
        }

        return $this->show($modelInstance->id);
    }

    public function destroy($id)
    {
        $item = $this->model::query()->findOrFail($id);
        $item->delete();

        return ['success' => true];
    }

    public function deleteMulti(Request $request) {
        $this->model->destroy($request->get('ids'));

        return ['success' => true];
    }
}
