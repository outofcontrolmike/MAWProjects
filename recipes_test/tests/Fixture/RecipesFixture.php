<?php
declare(strict_types=1);

namespace App\Test\Fixture;

use Cake\TestSuite\Fixture\TestFixture;

/**
 * RecipesFixture
 */
class RecipesFixture extends TestFixture
{
    /**
     * Init method
     *
     * @return void
     */
    public function init(): void
    {
        $this->records = [
            [
                'id' => 1,
                'user_id' => 1,
                'private_view' => 1,
                'title' => 'Lorem ipsum dolor sit amet',
                'slug' => 'Lorem ipsum dolor sit amet',
                'description' => 'Lorem ipsum dolor sit amet, aliquet feugiat. Convallis morbi fringilla gravida, phasellus feugiat dapibus velit nunc, pulvinar eget sollicitudin venenatis cum nullam, vivamus ut a sed, mollitia lectus. Nulla vestibulum massa neque ut et, id hendrerit sit, feugiat in taciti enim proin nibh, tempor dignissim, rhoncus duis vestibulum nunc mattis convallis.',
                'ingredients' => 'Lorem ipsum dolor sit amet',
                'prep_time' => 'Lorem ipsum dolor ',
                'cook_time' => 'Lorem ipsum dolor ',
                'servings' => 1,
                'directions' => 'Lorem ipsum dolor sit amet',
                'photo_paths' => 'Lorem ipsum dolor sit amet',
                'published' => 1,
                'created' => '2022-03-08 19:10:15',
                'modified' => '2022-03-08 19:10:15',
            ],
        ];
        parent::init();
    }
}
