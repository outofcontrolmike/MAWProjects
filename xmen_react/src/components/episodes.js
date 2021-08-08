import React from 'react';

const Episodes = ({ episodes }) => {
    return (
        <div>
            <button>Testing</button>
            <center><h1>Xmen Episode List</h1></center>
            {episodes.map((episode) => (
                  <div class="ui card fluid">
                  <div class="ui content">
                    <div class="ui header">
                        {episode.title}
                    </div>
                    <div class="ui meta">
                    {episode.number}
                    </div>
                    <div class="ui description">
                        {episode.plot}
                    </div>
                  </div>
                </div>
            ))}
        </div>
    )
};

export default Episodes