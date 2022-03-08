<?php
declare(strict_types=1);

namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Recipe Entity
 *
 * @property int $id
 * @property int $user_id
 * @property bool|null $private_view
 * @property string $title
 * @property string $slug
 * @property string $description
 * @property string|null $ingredients
 * @property string|null $prep_time
 * @property string|null $cook_time
 * @property int|null $servings
 * @property string|null $directions
 * @property string|null $photo_paths
 * @property bool|null $published
 * @property \Cake\I18n\FrozenTime|null $created
 * @property \Cake\I18n\FrozenTime|null $modified
 *
 * @property \App\Model\Entity\Tag[] $tags
 * @property \App\Model\Entity\User $user
 */
class Recipe extends Entity
{
    /**
     * Fields that can be mass assigned using newEntity() or patchEntity().
     *
     * Note that when '*' is set to true, this allows all unspecified fields to
     * be mass assigned. For security purposes, it is advised to set '*' to false
     * (or remove it), and explicitly make individual fields accessible as needed.
     *
     * @var array
     */
    protected $_accessible = [
        'user_id' => true,
        'private_view' => true,
        'title' => true,
        'slug' => true,
        'description' => true,
        'ingredients' => true,
        'prep_time' => true,
        'cook_time' => true,
        'servings' => true,
        'directions' => true,
        'photo_paths' => true,
        'published' => true,
        'created' => true,
        'modified' => true,
        'tags' => true,
        'user' => true,
    ];
}
