<?php
declare(strict_types=1);

namespace App\Test\TestCase\Model\Table;

use App\Model\Table\RecipesTable;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\RecipesTable Test Case
 */
class RecipesTableTest extends TestCase
{
    /**
     * Test subject
     *
     * @var \App\Model\Table\RecipesTable
     */
    protected $Recipes;

    /**
     * Fixtures
     *
     * @var array
     */
    protected $fixtures = [
        'app.Recipes',
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp(): void
    {
        parent::setUp();
        $config = $this->getTableLocator()->exists('Recipes') ? [] : ['className' => RecipesTable::class];
        $this->Recipes = $this->getTableLocator()->get('Recipes', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown(): void
    {
        unset($this->Recipes);

        parent::tearDown();
    }
}
