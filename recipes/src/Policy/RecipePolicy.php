<?php
declare(strict_types=1);

namespace App\Policy;

use App\Model\Entity\Recipe;
use Authorization\IdentityInterface;

/**
 * Recipe policy
 */
class RecipePolicy
{
    /**
     * Check if $user can create Recipe
     *
     * @param Authorization\IdentityInterface $user The user.
     * @param App\Model\Entity\Recipe $recipe
     * @return bool
     */
    public function canAdd(IdentityInterface $user, Recipe $recipe)
    {
        //All logged in users can create recipes
        return true;
    }

    /**
     * Check if $user can update Recipe
     *
     * @param Authorization\IdentityInterface $user The user.
     * @param App\Model\Entity\Recipe $recipe
     * @return bool
     */
    public function canEdit(IdentityInterface $user, Recipe $recipe)
    {
        //logged in uses can edit their own recipes
        return $this->isAuthor($user, $recipe);
    }

    /**
     * Check if $user can delete Recipe
     *
     * @param Authorization\IdentityInterface $user The user.
     * @param App\Model\Entity\Recipe $recipe
     * @return bool
     */
    public function canDelete(IdentityInterface $user, Recipe $recipe)
    {
        //logged in uses can delete their own recipes
        return $this->isAuthor($user, $recipe);
    }

    /**
     * Check if $user can view Recipe
     *
     * @param Authorization\IdentityInterface $user The user.
     * @param App\Model\Entity\Recipe $recipe
     * @return bool
     */
    // public function canView(IdentityInterface $user, Recipe $recipe)
    // {
    //     //all logged in users can view recipes
    //     return true;
    // }
    protected function isAuthor(IdentityInterface $user, Recipe $recipe)
    {
        return $recipe->user_id === $user->getIdentifier();
    }
}
