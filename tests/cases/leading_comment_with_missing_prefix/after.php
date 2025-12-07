<?php

/*
 * This is missing prefix
 */
class Foo
{
    public function bar(): void
    {
        if (baz()) {
            /*
             * If allow_reload is configured and the client requests "Cache-Control: no-cache",
             * reload the cache by fetching a fresh response and caching it (if possible).
             */
            echo 'Hello, world!';
        }
    }
}
