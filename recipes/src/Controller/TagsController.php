<?php
declare(strict_types=1);

namespace App\Controller;

/**
 * Tags Controller
 *
 * @property \App\Model\Table\TagsTable $Tags
 * @method \App\Model\Entity\Tag[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class TagsController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|null|void Renders view
     */
    public function index()
    {
        $this->Authorization->skipAuthorization();

        $tags = $this->paginate($this->Tags);

        $this->set(compact('tags'));
    }

    /**
     * View method
     *
     * @param string|null $id Tag id.
     * @return \Cake\Http\Response|null|void Renders view
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $this->Authorization->skipAuthorization();

        $tag = $this->Tags->get($id, [
            'contain' => ['Recipes'],
        ]);

        $this->set(compact('tag'));
    }

    /**
     * Add method
     *
     * @return \Cake\Http\Response|null|void Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $this->Authorization->skipAuthorization();

        $tag = $this->Tags->newEmptyEntity();
        if ($this->request->is('post')) {
            $tag = $this->Tags->patchEntity($tag, $this->request->getData());
            if ($this->Tags->save($tag)) {
                $this->Flash->success(__('The tag has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The tag could not be saved. Please, try again.'));
        }
        $recipes = $this->Tags->Recipes->find('list', ['limit' => 200])->all();
        $this->set(compact('tag', 'recipes'));
    }

    /**
     * Edit method
     *
     * @param string|null $id Tag id.
     * @return \Cake\Http\Response|null|void Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    // public function edit($id = null)
    // {
    //     $this->Authorization->skipAuthorization();

    //     $tag = $this->Tags->get($id, [
    //         'contain' => ['Recipes'],
    //     ]);
    //     if ($this->request->is(['patch', 'post', 'put'])) {
    //         $tag = $this->Tags->patchEntity($tag, $this->request->getData());
    //         if ($this->Tags->save($tag)) {
    //             $this->Flash->success(__('The tag has been saved.'));

    //             return $this->redirect(['action' => 'index']);
    //         }
    //         $this->Flash->error(__('The tag could not be saved. Please, try again.'));
    //     }
    //     $recipes = $this->Tags->Recipes->find('list', ['limit' => 200])->all();
    //     $this->set(compact('tag', 'recipes'));
    // }

    /**
    //  * Delete method
    //  *
    //  * @param string|null $id Tag id.
    //  * @return \Cake\Http\Response|null|void Redirects to index.
    //  * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
    //  */
    // public function delete($id = null)
    // {
    //     $this->request->allowMethod(['post', 'delete']);
    //     $tag = $this->Tags->get($id);
    //     if ($this->Tags->delete($tag)) {
    //         $this->Flash->success(__('The tag has been deleted.'));
    //     } else {
    //         $this->Flash->error(__('The tag could not be deleted. Please, try again.'));
    //     }

    //     return $this->redirect(['action' => 'index']);
    // }
}
