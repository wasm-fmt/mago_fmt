<?php

if (1) {
    if (2) {
        if (3) {
            throw new Exception\CompositeException(
                [$exception, ...$errors],
                'Multiple exceptions thrown while waiting.',
            );
        }

        static::assertSame(
            [-1, 0, -55, -(DateTime\NANOSECONDS_PER_SECOND - 42)],
            DateTime\Duration::fromParts(0, -63, 124, 42)->getParts(),
        );
    }
}


static::assertSame([
         Str\join([$this->directory, 'foo'], Filesystem\SEPARATOR),
         Str\join([$this->directory, 'hello.txt'], Filesystem\SEPARATOR),
     ], Vec\sort($children),
 );
 
 static::assertSame([
         1 => 'A',
         2 => 'B',
         4 => 'C',
         8 => 'D',
         16 => 'E',
         32 => 'F',
         64 => 'G',
         128 => 'H',
         256 => 'I',
         512 => 'J',
         1024 => 'K',
     ], $result);
     
     static::assertSame([
       'generator (0)',
       'foreach (0)',
       'do while (0)',
       'while (0)',
       'for (0)',
       'generator (1)',
       'for (1)',
       'generator (2)',
       'for (2)',
      ], $spy->toArray());