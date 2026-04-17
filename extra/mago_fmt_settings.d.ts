/**
 * Configuration settings for the Mago formatter.
 * See {@link https://mago.carthage.software/tools/formatter/configuration-reference}
 */
export interface Settings {
	/**
	 * Formatter preset to use as base configuration.
	 *
	 * Individual settings can override the preset values.
	 * @default "default"
	 *
	 * @remarks Available presets:
	 * - `default` - Default preset (PER-CS compatible)
	 * - `psr-12` - PSR-12 preset
	 * - `pint` - Pint preset (Laravel Pint compatible)
	 * - `tempest` - Tempest preset (Tempest framework compatible)
	 * - `hack` - Hack preset (`hackfmt` compatible)
	 * - `drupal` - Drupal preset
	 */
	preset?:
		| "default"
		| "per-cs"
		| "psr-12"
		| "pint"
		| "laravel-pint"
		| "laravel"
		| "tempest"
		| "tempest-php"
		| "hack"
		| "hackfmt"
		| "hhvm"
		| "drupal";

	/**
	 * Maximum line length that the printer will wrap on.
	 * @default 120
	 */
	"print-width"?: number;

	/**
	 * Number of spaces per indentation level.
	 * @default 4
	 */
	"tab-width"?: number;

	/**
	 * Whether to use tabs instead of spaces for indentation.
	 * @default false
	 */
	"use-tabs"?: boolean;

	/**
	 * End-of-line characters to use.
	 * @default "auto"
	 */
	"end-of-line"?: "auto" | "lf" | "crlf" | "cr";

	/**
	 * Whether to use single quotes instead of double quotes for strings.
	 *
	 * The formatter automatically determines which quotes to use based on the string content,
	 * with a preference for single quotes if this option is enabled.
	 *
	 * Decision logic:
	 * - If the string contains more single quotes than double quotes, double quotes are used
	 * - If the string contains more double quotes than single quotes, single quotes are used
	 * - If equal number of both, single quotes are used if this option is true
	 * @default true
	 */
	"single-quote"?: boolean;

	/**
	 * Whether to add a trailing comma to the last element in multi-line syntactic structures.
	 *
	 * When enabled, trailing commas are added to lists, arrays, parameter lists,
	 * argument lists, and other similar structures when they span multiple lines.
	 * @default true
	 */
	"trailing-comma"?: boolean;

	/**
	 * Whether to remove the trailing PHP close tag (`?>`) from files.
	 * @default true
	 */
	"remove-trailing-close-tag"?: boolean;

	/**
	 * Brace placement for control structures (if, for, while, etc.).
	 * @default "same-line"
	 *
	 * @example "same-line"
	 * ```php
	 * if ($expr) {
	 *     return 'Hello, world!';
	 * }
	 * ```
	 *
	 * @example "next-line"
	 * ```php
	 * if ($expr)
	 * {
	 *     return 'Hello, world!';
	 * }
	 * ```
	 *
	 * @example "always-next-line"
	 * ```php
	 * if ($expr)
	 * {
	 *     return 'Hello, world!';
	 * }
	 * ```
	 */
	"control-brace-style"?: "same-line" | "next-line" | "always-next-line";

	/**
	 * Whether to place `else`, `elseif`, `catch` and `finally` on a new line.
	 * @default false
	 */
	"following-clause-on-newline"?: boolean;

	/**
	 * Brace placement for closures.
	 * @default "same-line"
	 *
	 * @example "same-line"
	 * ```php
	 * $closure = function() {
	 *     return 'Hello, world!';
	 * };
	 * ```
	 *
	 * @example "next-line"
	 * ```php
	 * $closure = function()
	 * {
	 *     return 'Hello, world!';
	 * };
	 * ```
	 *
	 * @example "always-next-line"
	 * ```php
	 * $closure = function()
	 * {
	 *     return 'Hello, world!';
	 * };
	 * ```
	 */
	"closure-brace-style"?: "same-line" | "next-line" | "always-next-line";

	/**
	 * Brace placement for function declarations.
	 * @default "next-line"
	 *
	 * @example "same-line"
	 * ```php
	 * function foo() {
	 *     return 'Hello, world!';
	 * }
	 * ```
	 *
	 * @example "next-line"
	 * ```php
	 * function foo()
	 * {
	 *     return 'Hello, world!';
	 * }
	 * ```
	 *
	 * @example "always-next-line"
	 * ```php
	 * function foo()
	 * {
	 *     return 'Hello, world!';
	 * }
	 * ```
	 */
	"function-brace-style"?: "same-line" | "next-line" | "always-next-line";

	/**
	 * Brace placement for method declarations.
	 * @default "next-line"
	 *
	 * @example "same-line"
	 * ```php
	 * class Foo
	 * {
	 *     public function bar() {
	 *         return 'Hello, world!';
	 *     }
	 * }
	 * ```
	 *
	 * @example "next-line"
	 * ```php
	 * class Foo
	 * {
	 *     public function bar()
	 *     {
	 *         return 'Hello, world!';
	 *     }
	 * }
	 * ```
	 *
	 * @example "always-next-line"
	 * ```php
	 * class Foo
	 * {
	 *     public function bar()
	 *     {
	 *         return 'Hello, world!';
	 *     }
	 * }
	 * ```
	 */
	"method-brace-style"?: "same-line" | "next-line" | "always-next-line";

	/**
	 * Brace placement for class-like structures (classes, interfaces, traits, enums).
	 * @default "always-next-line"
	 *
	 * @example "same-line"
	 * ```php
	 * class Foo {
	 * }
	 * ```
	 *
	 * @example "next-line"
	 * ```php
	 * class Foo
	 * {
	 * }
	 * ```
	 */
	"classlike-brace-style"?: "same-line" | "next-line" | "always-next-line";

	/**
	 * Place empty control structure bodies on the same line.
	 * @default false
	 *
	 * @example false
	 * ```php
	 * if ($expr)
	 * {
	 * }
	 * ```
	 *
	 * @example true
	 * ```php
	 * if ($expr) {}
	 * ```
	 */
	"inline-empty-control-braces"?: boolean;

	/**
	 * Place empty closure bodies on the same line.
	 * @default true
	 *
	 * @example false
	 * ```php
	 * $closure = function()
	 * {
	 * };
	 * ```
	 *
	 * @example true
	 * ```php
	 * $closure = function() {};
	 * ```
	 */
	"inline-empty-closure-braces"?: boolean;

	/**
	 * Place empty function bodies on the same line.
	 * @default true
	 *
	 * @example false
	 * ```php
	 * function foo()
	 * {
	 * }
	 * ```
	 *
	 * @example true
	 * ```php
	 * function foo() {}
	 * ```
	 */
	"inline-empty-function-braces"?: boolean;

	/**
	 * Place empty method bodies on the same line.
	 * @default true
	 *
	 * @example false
	 * ```php
	 * class Foo
	 * {
	 *     public function bar()
	 *     {
	 *     }
	 * }
	 * ```
	 *
	 * @example true
	 * ```php
	 * class Foo
	 * {
	 *     public function bar() {}
	 * }
	 * ```
	 */
	"inline-empty-method-braces"?: boolean;

	/**
	 * Place empty constructor bodies on the same line.
	 * @default true
	 *
	 * @example false
	 * ```php
	 * class Foo {
	 *     public function __construct()
	 *     {
	 *     }
	 * }
	 * ```
	 *
	 * @example true
	 * ```php
	 * class Foo {
	 *     public function __construct() {}
	 * }
	 * ```
	 */
	"inline-empty-constructor-braces"?: boolean;

	/**
	 * Place empty class-like bodies on the same line.
	 * @default true
	 *
	 * @example false
	 * ```php
	 * class Foo
	 * {
	 * }
	 * ```
	 *
	 * @example true
	 * ```php
	 * class Foo {}
	 * ```
	 */
	"inline-empty-classlike-braces"?: boolean;

	/**
	 * Place empty anonymous class bodies on the same line.
	 * @default true
	 *
	 * @example false
	 * ```php
	 * $anon = new class
	 * {
	 * };
	 * ```
	 *
	 * @example true
	 * ```php
	 * $anon = new class {};
	 * ```
	 */
	"inline-empty-anonymous-class-braces"?: boolean;

	/**
	 * How to format broken method/property chains.
	 * @default "next-line"
	 *
	 * @example "next-line"
	 * ```php
	 * $foo
	 *     ->bar()
	 *     ->baz();
	 * ```
	 *
	 * @example "same-line"
	 * ```php
	 * $foo->bar()
	 *     ->baz();
	 * ```
	 */
	"method-chain-breaking-style"?: "same-line" | "next-line";

	/**
	 * When method chaining breaks across lines, place the first method on a new line.
	 *
	 * This follows PER-CS 4.7: "When [method chaining is] put on separate lines, [...] the first method MUST be on the next line."
	 * @default true
	 *
	 * @example true
	 * ```php
	 * $this
	 *     ->getCache()
	 *     ->forget();
	 * ```
	 *
	 * @example false
	 * ```php
	 * $this->getCache()
	 *     ->forget();
	 * ```
	 */
	"first-method-chain-on-new-line"?: boolean;

	/**
	 * When a method chain breaks across multiple lines, place the semicolon on its own line.
	 *
	 * When enabled:
	 * ```php
	 * $object->method1()
	 *     ->method2()
	 *     ->method3()
	 * ;
	 * ```
	 *
	 * When disabled:
	 * ```php
	 * $object->method1()
	 *     ->method2()
	 *     ->method3();
	 * ```
	 *
	 * @default false
	 */
	"method-chain-semicolon-on-next-line"?: boolean;

	/**
	 * Whether to preserve line breaks in method chains, even if they could fit on a single line.
	 * @default false
	 */
	"preserve-breaking-member-access-chain"?: boolean;

	/**
	 * When preserving a broken object method chain, keep the first method call on the same line as the receiver.
	 *
	 * This only affects already-broken chains preserved by
	 * `"preserve-breaking-member-access-chain"`, and does not change the default
	 * breaking style for newly broken chains.
	 * @default false
	 *
	 * @example true
	 * ```php
	 * $object->method1()
	 *     ->method2()
	 *     ->method3();
	 * ```
	 *
	 * @example false
	 * ```php
	 * $object
	 *     ->method1()
	 *     ->method2()
	 *     ->method3();
	 * ```
	 */
	"preserve-breaking-member-access-chain-first-method-on-same-line"?: boolean;

	/**
	 * Whether to preserve line breaks in argument lists, even if they could fit on a single line.
	 * @default false
	 */
	"preserve-breaking-argument-list"?: boolean;

	/**
	 * Whether to preserve line breaks in array-like structures, even if they could fit on a single line.
	 * @default true
	 */
	"preserve-breaking-array-like"?: boolean;

	/**
	 * Whether to preserve line breaks in parameter lists, even if they could fit on a single line.
	 * @default false
	 */
	"preserve-breaking-parameter-list"?: boolean;

	/**
	 * Whether to preserve line breaks in attribute lists, even if they could fit on a single line.
	 * @default false
	 */
	"preserve-breaking-attribute-list"?: boolean;

	/**
	 * Whether to preserve line breaks in conditional (ternary) expressions.
	 * @default false
	 */
	"preserve-breaking-conditional-expression"?: boolean;

	/**
	 * Whether to preserve line breaks in condition expressions (if, elseif, while, do-while, switch, match).
	 *
	 * When enabled, if the original source has conditions broken across multiple lines,
	 * the formatter maintains that layout using PER Coding Style 3.0 rules.
	 * @default false
	 */
	"preserve-breaking-condition-expression"?: boolean;

	/**
	 * Whether to break a parameter list with one or more promoted properties into multiple lines.
	 * @default true
	 *
	 * @example true
	 * ```php
	 * class User {
	 *     public function __construct(
	 *         public string $name,
	 *         public string $email,
	 *     ) {}
	 * }
	 * ```
	 *
	 * @example false
	 * ```php
	 * class User {
	 *     public function __construct(public string $name, public string $email) {}
	 * }
	 * ```
	 */
	"break-promoted-properties-list"?: boolean;

	/**
	 * Whether to place parameter attributes on their own line when the parameter list breaks.
	 * @default true
	 *
	 * When enabled, attributes are placed on a separate line
	 * from the parameter when the parameter list spans multiple lines:
	 *
	 * @example true
	 * ```php
	 * function foo(
	 *     #[SensitiveParameter]
	 *     string $password,
	 * ) {}
	 * ```
	 *
	 * @example false
	 * ```php
	 * function foo(
	 *     #[SensitiveParameter] string $password,
	 * ) {}
	 * ```
	 *
	 * @remarks PER-CS 12.2 compliant
	 */
	"parameter-attribute-on-new-line"?: boolean;

	/**
	 * Whether to add a line before binary operators or after when breaking.
	 * @default true
	 *
	 * @example true
	 * ```php
	 * $foo = 'Hello, '
	 *     . 'world!';
	 * ```
	 *
	 * @example false
	 * ```php
	 * $foo = 'Hello, ' .
	 *     'world!';
	 * ```
	 *
	 * @remarks Note: If the right side has a leading comment, this setting is always false.
	 */
	"line-before-binary-operator"?: boolean;

	/**
	 * Whether to indent continuation lines of binary expressions.
	 *
	 * When enabled, if a binary expression breaks across lines, the continuation
	 * is indented relative to the start of the expression:
	 * @default false
	 *
	 * @example true
	 * ```php
	 * $emailNotifications = $this->stringUtils->splitStringToArray($jobPosting->getVacancyEmailNotification())
	 *     ?? [];
	 * ```
	 *
	 * @example false
	 * ```php
	 * $emailNotifications = $this->stringUtils->splitStringToArray($jobPosting->getVacancyEmailNotification())
	 * ?? [];
	 * ```
	 */
	"indent-binary-expression-continuation"?: boolean;

	/**
	 * Whether to omit redundant parentheses around arithmetic binary expressions under comparison and null coalesce expressions.
	 * @default false
	 *
	 * @example true
	 * ```php
	 * if ($i === $retries - 1) {
	 * }
	 * ```
	 *
	 * @example false
	 * ```php
	 * if ($i === ($retries - 1)) {
	 * }
	 * ```
	 */
	"omit-redundant-arithmetic-binary-expression-parentheses"?: boolean;

	/**
	 * Whether to omit redundant parentheses around bitwise binary child expressions.
	 * @default false
	 *
	 * @example true
	 * ```php
	 * if ($mask === $flags << 1) {
	 * }
	 * ```
	 *
	 * @example false
	 * ```php
	 * if ($mask === ($flags << 1)) {
	 * }
	 * ```
	 */
	"omit-redundant-bitwise-binary-expression-parentheses"?: boolean;

	/**
	 * Whether to preserve author-written parentheses around logical binary sub-expressions
	 * even when PHP's operator precedence makes them redundant.
	 * @default false
	 *
	 * @example true
	 * ```php
	 * if (($var1 > 200 && $var2 < 1) || ($var1 <= 200 && $var2 < 3)) {
	 * }
	 * ```
	 *
	 * @example false
	 * ```php
	 * if ($var1 > 200 && $var2 < 1 || $var1 <= 200 && $var2 < 3) {
	 * }
	 * ```
	 */
	"preserve-redundant-logical-binary-expression-parentheses"?: boolean;

	/**
	 * Whether to always break named argument lists into multiple lines.
	 * @default false
	 *
	 * @example true
	 * ```php
	 * $foo = some_function(
	 *     argument1: 'value1',
	 *     argument2: 'value2',
	 * );
	 * ```
	 */
	"always-break-named-arguments-list"?: boolean;

	/**
	 * Whether to always break named argument lists in attributes into multiple lines.
	 * @default false
	 *
	 * @example true
	 * ```php
	 * #[SomeAttribute(
	 *     argument1: 'value1',
	 *     argument2: 'value2',
	 * )]
	 * class Foo {}
	 * ```
	 */
	"always-break-attribute-named-argument-lists"?: boolean;

	/**
	 * Whether to align named arguments in multiline argument lists.
	 * @default false
	 *
	 * @example true
	 * ```php
	 * some_function(
	 *     short:       1,
	 *     longerName:  2,
	 *     longestName: 3,
	 * );
	 * ```
	 */
	"align-named-arguments"?: boolean;

	/**
	 * Whether to align multiline function and method parameter lists by the variable column.
	 *
	 * This is especially useful for promoted constructor properties with visibility modifiers.
	 * @default false
	 */
	"align-parameters"?: boolean;

	/**
	 * Whether to use table-style alignment for arrays.
	 * @default true
	 *
	 * @example true
	 * ```php
	 * $array = [
	 *     ['foo',  1.2,  123, false],
	 *     ['bar',  52.4, 456, true],
	 *     ['baz',  3.6,  789, false],
	 *     ['qux',  4.8,    1, true],
	 *     ['quux', 5.0,   12, false],
	 * ];
	 * ```
	 */
	"array-table-style-alignment"?: boolean;

	/**
	 * Whether to align consecutive assignment-like constructs in columns.
	 *
	 * When enabled, consecutive variable assignments, class properties, class constants,
	 * global constants, array key-value pairs, and backed enum cases are column-aligned.
	 * @default false
	 *
	 * @example true
	 * ```php
	 * $foo     = 1;
	 * $b       = 2;
	 * $ccccccc = 3;
	 *
	 * class X {
	 *     public string       $foo    = 1;
	 *     public readonly int $barrrr = 2;
	 * }
	 * ```
	 *
	 * @example false
	 * ```php
	 * $foo = 1;
	 * $b = 2;
	 * $ccccccc = 3;
	 * ```
	 *
	 * @remarks Note: Blank lines and comments break alignment runs. In class bodies,
	 * different member types (properties vs constants) are aligned separately.
	 */
	"align-assignment-like"?: boolean;

	/**
	 * Whether to sort use statements alphabetically.
	 * @default true
	 */
	"sort-uses"?: boolean;

	/**
	 * Whether to sort class methods by visibility and name.
	 *
	 * When enabled, methods in class-like structures are automatically reordered:
	 * 1. Constructor (`__construct`) - always first
	 * 2. Static methods (by visibility: public, protected, private)
	 *    - Abstract methods before concrete methods
	 *    - Alphabetically by name within each group
	 * 3. Instance methods (by visibility: public, protected, private)
	 *    - Abstract methods before concrete methods
	 *    - Alphabetically by name within each group
	 * 4. Other magic methods (e.g., `__toString`, `__get`, `__set`)
	 *    - Sorted alphabetically by name
	 * 5. Destructor (`__destruct`) - always last
	 *
	 * This applies to all class-like structures: classes, traits, interfaces, and enums.
	 * Other members (constants, properties, trait uses, enum cases) remain in their original positions.
	 * @default false
	 */
	"sort-class-methods"?: boolean;

	/**
	 * Whether to insert a blank line between different types of use statements.
	 * @default true
	 *
	 * @example true
	 * ```php
	 * use Foo\Bar;
	 * use Foo\Baz;
	 *
	 * use function Foo\bar;
	 * use function Foo\baz;
	 *
	 * use const Foo\A;
	 * use const Foo\B;
	 * ```
	 *
	 * @example false
	 * ```php
	 * use Foo\Bar;
	 * use Foo\Baz;
	 * use function Foo\bar;
	 * use function Foo\baz;
	 * use const Foo\A;
	 * use const Foo\B;
	 * ```
	 */
	"separate-use-types"?: boolean;

	/**
	 * Whether to expand grouped use statements into individual statements.
	 * @default true
	 *
	 * @example true
	 * ```php
	 * use Foo\Bar;
	 * use Foo\Baz;
	 * ```
	 *
	 * @example false
	 * ```php
	 * use Foo\{Bar, Baz};
	 * ```
	 */
	"expand-use-groups"?: boolean;

	/**
	 * How to format null type hints.
	 * @default "question"
	 *
	 * @example "question"
	 * ```php
	 * function foo(?string $bar) {
	 *     return $bar;
	 * }
	 * ```
	 *
	 * @example "null_pipe"
	 * ```php
	 * function foo(null|string $bar) {
	 *     return $bar;
	 * }
	 * ```
	 *
	 * @example "null_pipe_last"
	 * ```php
	 * function foo(string|null $bar) {
	 *     return $bar;
	 * }
	 * ```
	 */
	"null-type-hint"?: "null_pipe" | "null_pipe_last" | "question";

	/**
	 * Whether to include parentheses around `new` when followed by a member access.
	 *
	 * Controls whether to use PHP 8.4's shorthand syntax for new expressions
	 * followed by member access. If PHP version is earlier than 8.4, this is always true.
	 * @default false
	 *
	 * @example true
	 * ```php
	 * $foo = (new Foo)->bar();
	 * ```
	 *
	 * @example false
	 * ```php
	 * $foo = new Foo->bar();
	 * ```
	 */
	"parentheses-around-new-in-member-access"?: boolean;

	/**
	 * Whether to include parentheses in `new` expressions when no arguments are provided.
	 * @default true
	 *
	 * @example true
	 * ```php
	 * $foo = new Foo();
	 * ```
	 *
	 * @example false
	 * ```php
	 * $foo = new Foo;
	 * ```
	 */
	"parentheses-in-new-expression"?: boolean;

	/**
	 * Whether to include parentheses in `exit` and `die` constructs.
	 * @default true
	 *
	 * @example true
	 * ```php
	 * exit();
	 * die();
	 * ```
	 *
	 * @example false
	 * ```php
	 * exit;
	 * die;
	 * ```
	 */
	"parentheses-in-exit-and-die"?: boolean;

	/**
	 * Whether to include parentheses in attributes with no arguments.
	 * @default false
	 *
	 * @example true
	 * ```php
	 * #[SomeAttribute()]
	 * class Foo {}
	 * ```
	 *
	 * @example false
	 * ```php
	 * #[SomeAttribute]
	 * class Foo {}
	 * ```
	 */
	"parentheses-in-attribute"?: boolean;

	/**
	 * Whether to add a space before the opening parameters in arrow functions.
	 * @default false
	 *
	 * @example true
	 * ```php
	 * fn ($x) => $x * 2
	 * ```
	 *
	 * @example false
	 * ```php
	 * fn($x) => $x * 2
	 * ```
	 */
	"space-before-arrow-function-parameter-list-parenthesis"?: boolean;

	/**
	 * Whether to add a space before the opening parameters in closures.
	 * @default true
	 *
	 * @example true
	 * ```php
	 * function ($x) use ($y)
	 * ```
	 *
	 * @example false
	 * ```php
	 * function($x) use ($y)
	 * ```
	 */
	"space-before-closure-parameter-list-parenthesis"?: boolean;

	/**
	 * Whether to add a space before the opening parameters in hooks.
	 * @default false
	 *
	 * @example true
	 * ```php
	 * $hook ($param)
	 * ```
	 *
	 * @example false
	 * ```php
	 * $hook($param)
	 * ```
	 */
	"space-before-hook-parameter-list-parenthesis"?: boolean;

	/**
	 * Whether to keep abstract property hooks inline.
	 * @default true
	 *
	 * When enabled: `public int $id { get; }`
	 * When disabled: hook list is always expanded
	 *
	 * @remarks PER-CS 4.10 compliant
	 */
	"inline-abstract-property-hooks"?: boolean;

	/**
	 * Whether to add a space before the opening parenthesis in closure use clause.
	 * @default true
	 *
	 * @example true
	 * ```php
	 * function() use ($var)
	 * ```
	 *
	 * @example false
	 * ```php
	 * function() use($var)
	 * ```
	 */
	"space-before-closure-use-clause-parenthesis"?: boolean;

	/**
	 * Whether to add a space after cast operators (int, float, string, etc.).
	 * @default true
	 *
	 * @example true
	 * ```php
	 * (int) $foo
	 * ```
	 *
	 * @example false
	 * ```php
	 * (int)$foo
	 * ```
	 */
	"space-after-cast-unary-prefix-operators"?: boolean;

	/**
	 * Whether to add a space after the reference operator (&).
	 * @default false
	 *
	 * @example true
	 * ```php
	 * & $foo
	 * ```
	 *
	 * @example false
	 * ```php
	 * &$foo
	 * ```
	 */
	"space-after-reference-unary-prefix-operator"?: boolean;

	/**
	 * Whether to add a space after the error control operator (@).
	 * @default false
	 *
	 * @example true
	 * ```php
	 * @ $foo
	 * ```
	 *
	 * @example false
	 * ```php
	 * @$foo
	 * ```
	 */
	"space-after-error-control-unary-prefix-operator"?: boolean;

	/**
	 * Whether to add a space after the logical not operator (!).
	 * @default false
	 *
	 * @example true
	 * ```php
	 * ! $foo
	 * ```
	 *
	 * @example false
	 * ```php
	 * !$foo
	 * ```
	 */
	"space-after-logical-not-unary-prefix-operator"?: boolean;

	/**
	 * Whether to add a space after the bitwise not operator (~).
	 * @default false
	 *
	 * @example true
	 * ```php
	 * ~ $foo
	 * ```
	 *
	 * @example false
	 * ```php
	 * ~$foo
	 * ```
	 */
	"space-after-bitwise-not-unary-prefix-operator"?: boolean;

	/**
	 * Whether to add a space after the increment prefix operator (++).
	 * @default false
	 *
	 * @example true
	 * ```php
	 * ++ $i
	 * ```
	 *
	 * @example false
	 * ```php
	 * ++$i
	 * ```
	 */
	"space-after-increment-unary-prefix-operator"?: boolean;

	/**
	 * Whether to add a space after the decrement prefix operator (--).
	 * @default false
	 *
	 * @example true
	 * ```php
	 * -- $i
	 * ```
	 *
	 * @example false
	 * ```php
	 * --$i
	 * ```
	 */
	"space-after-decrement-unary-prefix-operator"?: boolean;

	/**
	 * Whether to add a space after the additive unary operators (+ and -).
	 * @default false
	 *
	 * @example true
	 * ```php
	 * + $i
	 * ```
	 *
	 * @example false
	 * ```php
	 * +$i
	 * ```
	 */
	"space-after-additive-unary-prefix-operator"?: boolean;

	/**
	 * Whether to add spaces around the concatenation operator (.).
	 * @default true
	 *
	 * @example true
	 * ```php
	 * $a . $b
	 * ```
	 *
	 * @example false
	 * ```php
	 * $a.$b
	 * ```
	 */
	"space-around-concatenation-binary-operator"?: boolean;

	/**
	 * Whether to add spaces around the assignment in declare statements.
	 * @default false
	 *
	 * @example true
	 * ```php
	 * declare(strict_types = 1)
	 * ```
	 *
	 * @example false
	 * ```php
	 * declare(strict_types=1)
	 * ```
	 */
	"space-around-assignment-in-declare"?: boolean;

	/**
	 * Whether to add spaces within grouping parentheses.
	 * @default false
	 *
	 * @example true
	 * ```php
	 * ( $expr ) - $expr
	 * ```
	 *
	 * @example false
	 * ```php
	 * ($expr) - $expr
	 * ```
	 */
	"space-within-grouping-parenthesis"?: boolean;

	/**
	 * Whether to add an empty line after control structures (if, for, foreach, while, do, switch).
	 * @default false
	 *
	 * @remarks Note: if an empty line already exists, it will be preserved regardless of this settings value.
	 */
	"empty-line-after-control-structure"?: boolean;

	/**
	 * Whether the opening `<?php` tag must be on its own line with no other statements.
	 * @default true
	 *
	 * When enabled, a newline is always inserted after the opening tag, even if
	 * the original source has statements on the same line (PER-CS compliant).
	 *
	 * @example true
	 * ```php
	 * <?php
	 * echo "Hello";
	 * ```
	 *
	 * @example false
	 * ```php
	 * <?php echo "Hello";
	 * ```
	 */
	"opening-tag-on-own-line"?: boolean;

	/**
	 * Whether to add an empty line after opening tag.
	 * @default true
	 *
	 * @remarks Note: if an empty line already exists, it will be preserved regardless of this settings value.
	 */
	"empty-line-after-opening-tag"?: boolean;

	/**
	 * Whether to add an empty line after declare statement.
	 * @default true
	 *
	 * @remarks Note: if an empty line already exists, it will be preserved regardless of this settings value.
	 */
	"empty-line-after-declare"?: boolean;

	/**
	 * Whether to add an empty line after namespace.
	 * @default true
	 *
	 * @remarks Note: if an empty line already exists, it will be preserved regardless of this settings value.
	 */
	"empty-line-after-namespace"?: boolean;

	/**
	 * Whether to add an empty line after use statements.
	 * @default true
	 *
	 * @remarks Note: if an empty line already exists, it will be preserved regardless of this settings value.
	 */
	"empty-line-after-use"?: boolean;

	/**
	 * Whether to add an empty line after symbols (class, enum, interface, trait, function, const).
	 * @default true
	 *
	 * @remarks Note: if an empty line already exists, it will be preserved regardless of this settings value.
	 */
	"empty-line-after-symbols"?: boolean;

	/**
	 * Whether to add an empty line between consecutive symbols of the same type.
	 *
	 * Only applies when `empty-line-after-symbols` is true.
	 * @default true
	 */
	"empty-line-between-same-symbols"?: boolean;

	/**
	 * Whether to add an empty line after class-like constant.
	 * @default false
	 *
	 * @remarks Note: if an empty line already exists, it will be preserved regardless of this settings value.
	 */
	"empty-line-after-class-like-constant"?: boolean;

	/**
	 * Whether to add an empty line immediately after a class-like opening brace.
	 * @default false
	 *
	 * @remarks Note: if an empty line already exists, it will be preserved regardless of this settings value.
	 */
	"empty-line-after-class-like-open"?: boolean;

	/**
	 * Whether to insert an empty line before the closing brace of class-like structures when the class body is not empty.
	 * @default false
	 *
	 * When enabled, a blank line will be inserted immediately before the `}` that closes a class, trait, interface or enum, but only if the body contains at least one member.
	 */
	"empty-line-before-class-like-close"?: boolean;

	/**
	 * Whether to add an empty line after enum case.
	 * @default false
	 *
	 * @remarks Note: if an empty line already exists, it will be preserved regardless of this settings value.
	 */
	"empty-line-after-enum-case"?: boolean;

	/**
	 * Whether to add an empty line after trait use.
	 * @default false
	 *
	 * @remarks Note: if an empty line already exists, it will be preserved regardless of this settings value.
	 */
	"empty-line-after-trait-use"?: boolean;

	/**
	 * Whether to add an empty line after property.
	 * @default false
	 *
	 * @remarks Note: if an empty line already exists, it will be preserved regardless of this settings value.
	 */
	"empty-line-after-property"?: boolean;

	/**
	 * Whether to add an empty line after method.
	 * @default true
	 *
	 * @remarks Note: if an empty line already exists, it will be preserved regardless of this settings value.
	 */
	"empty-line-after-method"?: boolean;

	/**
	 * Whether to add an empty line before return statements.
	 * @default false
	 */
	"empty-line-before-return"?: boolean;

	/**
	 * Whether to add an empty line before dangling comments.
	 * @default true
	 */
	"empty-line-before-dangling-comments"?: boolean;

	/**
	 * Whether to separate class-like members of different kinds with a blank line.
	 * @default true
	 */
	"separate-class-like-members"?: boolean;

	/**
	 * Whether to indent heredoc/nowdoc content.
	 * @default true
	 */
	"indent-heredoc"?: boolean;

	/**
	 * Whether to print boolean and null literals in upper-case (e.g. `TRUE`, `FALSE`, `NULL`).
	 * @default false
	 *
	 * When enabled these literals are printed in uppercase; when disabled they are printed in lowercase.
	 */
	"uppercase-literal-keyword"?: boolean;

	/**
	 * See {@link https://mago.carthage.software/tools/formatter/configuration-reference}
	 */
	[key: string]: unknown;
}
