<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Message;

class MessageController extends Controller
{
    function index() {
        $records = Message::all();
        $arreglo = [];
        foreach($records as $r) {
            $class = ($r->remote_address == $_SERVER['REMOTE_ADDR']) ? 'send' : 'receive';
            $arreglo[] = [
                "message" => $r->message,
                "time" => $r->time,
                "class" => $class,
            ];
        }
        return response()->json($arreglo);
    }

    function store(Request $request) {
        $record =  new Message(); 
        $record->message = $request->message;
        $record->time = date('d-m-Y h:i:s A');
        $record->remote_address = $_SERVER['REMOTE_ADDR'];
        $record->save();
        return response()->json($record);
    }
}
