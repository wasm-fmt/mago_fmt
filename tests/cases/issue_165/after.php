<?php

declare(strict_types=1);

final class Issue165
{
    private function getCurrentLineIndex(): int
    {
        foreach ($linePositions as $index => $startPosition) {
            $nextPosition = ($index + 1) < count($linePositions)
                ? $linePositions[$index + 1]
                : mb_strlen($this->text) + 1;

            if ($this->cursor >= $startPosition && $this->cursor < $nextPosition) {
                return $index;
            }
        }

        return count($linePositions) - 1; // Default to last line if not found
    }

    #[ConsoleCommand]
    public function test(): void
    {
        return [
            'enter' => $this->multiple && $this->default && $this->options->getSelectedOptions() === [] ? 'skip' : 'confirm',
        ];
    }
}
