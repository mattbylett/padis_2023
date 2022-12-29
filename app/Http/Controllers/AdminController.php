<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;

class AdminController extends Controller
{
    public function index()
    {
        return view('admin.auth.index');

    } // End Index

    public function register() 
    {
        return view('admin.auth.register');

    } // End Register

    public function store(Request $request)
    {
        // dd($request);
        Admin::insert([
            'name' => $request->name,
            'email' => $request->email,
            'username' => $request->username,
            'password' => Hash::make($request->password),
            'created_at' => Carbon::now()
        ]);

        return redirect()->route('admin.index')->with('success', 'Admin User Created Successfully');


    } // End Store

    public function login(Request $request) 
    {
        // dd($request);

        $data = $request->all();
        if(Auth::guard('admin')->attempt(['username' => $data['username'], 'password' => $data['password'] ]))
        {
            return redirect()->route('admin.dashboard')->with('success', 'Logged in Successfully');
        } else {
            return back()->with('error', "Invalid Email or Password");
        };

    } // End Login


    public function dashboard()
    {
        return view('admin.pages.dashboard');
    }

    public function logout() 
    {
        Auth::guard('admin')->logout();
        return redirect()->route('admin.index')->with('success', 'Logged Out Successfully');
    } // End Method
}
