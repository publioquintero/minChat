<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Message;

class MessageController extends Controller
{
    function index() {
        $records = Message::orderBy('id','desc')->get();
        return response()->json($records);
    }

    function store(Request $request) {
        $record =  new Message(); 
        $record->message = $request->message;
        $record->save();
        return response()->json($record);
    }
}
