<?php

function something(): void
{
    return Vec\values(new FilesystemIterator(
        $directory,
        FilesystemIterator::CURRENT_AS_PATHNAME | FilesystemIterator::SKIP_DOTS,
    ));
}
