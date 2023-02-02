<?php

namespace App\Http\Controllers\Core;

use App\Services\Utils;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class ModelController extends Controller {
    protected Model $model;

    public function index(Request $request)
    {
        return Utils::paginateQuery($this->model::query(), $request);
    }

    protected function storeModel($request, $dataFields) {
        $item = $this->model::create($request->only($dataFields));

        return $this->show($item->id);
    }

    protected function updateModel($request, $modelInstance, $updateFields) {
        $modelInstance->update($request->only($updateFields));

        return $this->show($modelInstance->id);
    }

    public function show($id)
    {
        return $this->model::query()->findOrFail($id);
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
