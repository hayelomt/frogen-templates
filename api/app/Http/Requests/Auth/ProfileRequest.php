<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class ProfileRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'currentPassword' => 'required|string',
            'email' => 'email',
            'password' => 'string|min:6|confirmed'
        ];
    }
}


// 'bannerImg' => 'nullable|file|max:20000|mimes:jpeg,jpg,png,svg',
