<?php

Route::get('/test', fn(#[CurrentUser] $user) => $user->email)->middleware('api');
