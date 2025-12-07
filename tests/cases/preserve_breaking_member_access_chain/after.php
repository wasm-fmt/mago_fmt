<?php

$a = $foo
    ->bar()
    ->baz()
    ->qux();

$server = TCP\Server::create(
    '127.0.0.1',
    0,
    TCP\ServerOptions::create()
        ->withNoDelay(true)
        ->withSocketOptions(
            Network\SocketOptions::create()
                ->withAddressReuse(false)
                ->withPortReuse(false)
                ->withBroadcast(true),
        ),
);

// This is not a chain, but it should be preserved as well.
return arr($this->userPermissions)
    ->first(fn($userPermission) => $userPermission->matches($permission));

expect($response->dto()->get(2))
    ->id->toBe(21)
    ->name->toBe('Payslips')
    ->files->toHaveCount(1)
    ->files->first()->toBeInstanceOf(FileData::class);
