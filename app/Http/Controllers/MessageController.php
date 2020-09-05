<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Message;

class MessageController extends Controller
{
    function index() {
        $records = Message::all();
        return response()->json($records);
    }

    function store(Request $request) {
        $record =  new Message(); 
        $record->message = $request->message;
        $record->time = date('d-m-y h:i:s S');
        $record->remote_address = $_SERVER['REMOTE_ADDR'];
        $record->save();
        return response()->json($record);
    }
}
