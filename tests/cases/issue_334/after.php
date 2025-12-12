<?php

// NOTE TO SELF: WE DOUBLE, AND TRIPLE CHECKED THAT THIS FORMATTING IS CORRECT
// FUTURE MODIFICATIONS TO THE FORMATTER SHOULD NOT BREAK THIS

const INT64_MIN = -1 << 63;

$a = ((string) $f) ** 2;

function getRunCommand(string $script): string
{
    return $this->getBinaryName() . ' ' . match ($this) {
        self::BUN => $script,
        self::NPM => "run {$script}",
        self::YARN => $script,
        self::PNPM => $script,
    };
}

function initializeStreamFactory(): StreamFactoryInterface
{
    return Discover::httpStreamFactory() ?? throw new RuntimeException(
        'The PSR stream factory cannot be null. Please ensure that it is properly initialized.',
    );
}

$this->addHeader(
    'x-validation',
    Json\encode(
        arr($failingRules)->map(
            fn (array $failingRulesForField) => arr($failingRulesForField)->map(
                fn (Rule $rule) => $this->validator->getErrorMessage($rule),
            )->toArray(),
        )->toArray(),
    ),
);

return new TasksData(
    tasks: collect($data)->map(fn (array $task) => new TaskData(
        section: data_get($task, 'section'),
        name: data_get($task, 'name'),
        description: data_get($task, 'description'),
        target: data_get($task, 'target'),
        status: Status::tryFromFl3xxStatus(data_get($task, 'status')),
    )),
);

return new RocketReachException(
    response: $response,
    originalException: $exception,
    message: rescue(
        callback: fn () => json_encode($response->json('error') ?: [], flags: \JSON_PRETTY_PRINT),
        report: false,
    ) ?: $exception?->getMessage() ?: 'Unknown RocketReach API error',
);

return $this->pipedrive->send(new UpdateDealRequest(new UpdateDealData(
    id: $tracking->pipedrive_deal_id,
    aircraft_type: $tracking->fl3xx_quote->aircraft_type,
    organization_id: $organization->id,
    title: $title,
    price: $tracking->fl3xx_quote->price,
    stage: $stage,
    status: $status,
)))->dto();

expect($response->json())
    ->ok->toBeTrue()
    ->channel->toBe('C08CL4QQH8F')
    ->message->ts->toBe('1739390364.067149')
    ->message->blocks->toBeArray()
    ->message->blocks->sequence(
        fn ($block) => $block->type === 'section' && $block->text->type === 'mrkdwn',
        fn ($block) => $block->type === 'divider',
        fn ($block) => $block->type === 'section' && $block->text->type === 'mrkdwn',
        fn ($block) => (
            $block->type === 'actions'
            && $block->elements->sequence(
                fn ($element) => $element->type === 'button' && $element->text->type === 'plain_text',
                fn ($element) => $element->type === 'button' && $element->text->type === 'plain_text',
            )
        ),
    );

if (! in_array(
    $key,
    ['flight_type', 'aircraft_icao', 'aircraft_type', 'departs_at', 'arrives_at', 'departure_airport_icao', 'arrival_airport_icao', 'passengers', 'flight_number'],
    strict: true,
)) {
    continue;
}

$request = map($this->http->makePsrRequest(
    uri: '/books',
    body: ['title' => 'Timeline Taxi'],
    files: ['cover' => new UploadedFile(
        streamOrFile: $currentPath,
        size: null,
        errorStatus: UPLOAD_ERR_OK,
    )],
))->with(
    PsrRequestToGenericRequestMapper::class,
    RequestToObjectMapper::class,
)->to(CreateBookRequest::class);

$slack->send(new PostChatMessageRequest(
    username: $notam->identifier,
    channelId: $notamChannelId,
    blocks: Kit::message([
        Kit::section($notam->structured->summary, accessory: Kit::button(
            text: 'Details',
            actionId: OpenModal::class,
            value: new OpenModalData(NotamModal::class, ['notamId' => $notam->id])->toJson(),
        )),
        Kit::context([
            Kit::mrkdwnText($notam->structured->severity->toEmoji() . ' ' . $notam->structured->severity->name()),
            Kit::mrkdwnText($notam->structured->category->toEmoji() . ' ' . $notam->structured->category->name()),
            Kit::mrkdwnText($notam->published_at->format('M d, H:i, Y')),
            Kit::mrkdwnText($notam->identifier),
        ]),
    ])->getBlocks(),
));
