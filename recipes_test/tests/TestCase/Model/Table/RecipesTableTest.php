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
        'app.Tags',
        'app.Users',
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

    /**
     * Test validationDefault method
     *
     * @return void
     * @uses \App\Model\Table\RecipesTable::validationDefault()
     */
    public function testValidationDefault(): void
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test buildRules method
     *
     * @return void
     * @uses \App\Model\Table\RecipesTable::buildRules()
     */
    public function testBuildRules(): void
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test findTagged method
     *
     * @return void
     * @uses \App\Model\Table\RecipesTable::findTagged()
     */
    public function testFindTagged(): void
    {
        $this->markTestIncomplete('Not implemented yet.');
    }
}
