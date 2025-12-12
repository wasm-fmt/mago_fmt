<?php

$dispatch->updates = collect([
    ...$dispatch->updates->all(),
    ...$this->updates,
])->unique(fn (BookingUpdateBatch $batch) => $batch->updated_at->toIso8601String());