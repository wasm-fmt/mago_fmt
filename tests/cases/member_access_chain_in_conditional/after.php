<?php

$interval = $report->finished_at
    ? CarbonInterval::make($report->finished_at->diffInSeconds($report->created_at), 'seconds')
        ->cascade()
        ->cascade()
        ->forHumans(['parts' => 1, 'options' => Carbon::CEIL])
    : null;
