<?php

final readonly class Example
{
    public function case1()
    {
        return 'data' . Str\join(Vec\map($parents, static fn(string $parent): string => Str\format('[%s]', $parent)), '');
    }

    public function test2()
    {
        if (null !== ($policyExternalId = self::idForLink(['_links' => $iterator->current()], 'policy'))) {
            // ...
        }
    }

    public function test3()
    {
        if (null !== ($matches = Regex\first_match(Type\string()->assert($customerData['href']), '/^.*\/(\w+\d+)$/', Regex\capture_groups([1])))) {
            // ...
        }
    }

    public function test4()
    {
        if (null !== ($matches = Regex\first_match($transactionGroupId, '/^PT(\d+)$/', Regex\capture_groups([1])))) {
            // ...
        }
    }

    public function test5()
    {
        Psl\invariant(Iter\contains([EndorsementStatus::ISSUED, EndorsementStatus::INVALIDATED], $status), 'The status cannot be set to %s.', $status->getReadable());
    }

    public function test6()
    {
        return $this->issued && !Iter\contains([PolicyStatusType::VOID], $this->status) && !$this->hasPendingEndorsement();
    }

    public function test7()
    {
        Psl\invariant(Iter\contains(['true', 'false'], $condition->getValue()), 'Invalid checkbox condition value "%s".', $condition->getValue() ?? 'null');
    }

    public function test8()
    {
        $table->addColumn('total_term_premium_expiring_currency', Types::STRING, ['length' => 3])->setNotnull(false);
    }

    public function test9()
    {
        if (!$form->isSubmitted() || !$form->isValid()) {
            return $this->render(
                '@Example/Example/example.html.twig',
                ['config' => $config, 'errors' => Vec\map($form->getErrors(true), static fn(FormError $error): string => $error->getMessage())],
            );
        }
    }
}
