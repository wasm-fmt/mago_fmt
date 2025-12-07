<? // comment

/**
 * comment
 */
namespace A; // comment

$a = /* comment */ [ // comment
    'a' => 1, // comment
    'b' => 2, // comment
    /* comment */
]; // comment

$a = match (1) { // comment
    1 => 1, // comment
    // comment
    2 => 2, // comment
    // comment
    default => 3, // comment
}; // comment

$a = fn() => 1; // comment

$a = function () { // comment
    return 1; // comment
}; // comment

$a = new class { // comment
    public function a()
    { // comment
        return 1; // comment
    } // comment
}; // comment

/**
 * comment
 */
class A
{ // comment
    const A = 1; // comment
    const B = [ // comment
        // comment
    ];

    const C = [ // comment
        // comment
    ];

    public function a()
    { // comment
        return 1; // comment
    } // comment
} // comment

/**
 * comment
 */
trait A
{ // comment
    public function a()
    { // comment
        return 1; // comment
    } // comment
} // comment

/**
 * comment
 */
interface A
{ // comment
    public function a(); // comment
} // comment

if (1) { // comment
    // comment
} // comment

if (1) { // comment
    // comment
} elseif (2) { // comment
    // comment
} else { // comment
    // comment
} // comment

while (1) { // comment
    // comment
} // comment

do { // comment
    // comment
} while (1); // comment

for ($i = 0; $i < 10; $i++) { // comment
    // comment
} // comment

foreach ([1, 2, 3] as $i) { // comment
    // comment
} // comment

switch (1) { // comment
    case 1: // comment
        // comment
        break; // comment
    case 2: // comment
        // comment
        break; // comment
    default: // comment
        // comment
        break; // comment
} // comment

try { // comment
    // comment
} catch (Exception $e) { // comment
    // comment
} finally { // comment
    // comment
} // comment

goto a; // comment

a: // comment

echo 1; // comment

function foo() // comment
{ // comment
    // comment
} // comment

function foo() // comment
{ // comment
    if (1) { // comment
        // comment
    } // comment

    // comment
} // comment
