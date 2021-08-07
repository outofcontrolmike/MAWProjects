import React from 'react';

const Characters = ({ characters }) => {
    return (
        <div>
            <center><h1>Xmen List List</h1></center>
            {characters.map((character) => (
                  <div class="ui card fluid">
                  <div class="ui content">
                    <div class="ui header">
                        {character.name}
                    </div>
                    <div class="ui meta">
                    {character.alias}
                    </div>
                    <div class="ui description">
                        {character.description}
                    </div>
                  </div>
                </div>
            ))}
        </div>
    )
};

export default Characters