<?php

final class WaitForControlsAction extends Action
{
    use ActionTrait;
    private const string ACTION_NAME = 'wait_for_controls';
    public ActionType $type = ActionType::WAIT_FOR_CONTROLS;
    public function __construct(
        public readonly array $required_controls,
    ) {}
    public function getName(): string
    {
        return self::ACTION_NAME;
    }
}
