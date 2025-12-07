<?php

foo(


1,
2
);

return in_array(
$name,
$caseNames, strict: true); /** @phpstan-ignore-line function.impossibleType ( prevent to always evaluate to true/false as in enum context the result is predictable ) */


// This is not a breaking argument list, the first argument is expanded to multiple lines.
array_map(fn (UploadableFileData $file) => [
    'batch_id' => $batch->id,
    'file_id' => $file->id,
    'file_name' => $file->filename,
    'status' => Status::PROCESSING,
], $files);


File::query()->upsert(
    values: array_map(fn (UploadableFileData $file) => [
        'batch_id' => $batch->id,
        'file_id' => $file->id,
        'file_name' => $file->filename,
        'status' => Status::PROCESSING,
    ], $files),
    uniqueBy: ['id'],
);