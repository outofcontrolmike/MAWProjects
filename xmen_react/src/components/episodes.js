import React from 'react';

const Episodes = ({ episodes }) => {
    
    return (
        
        <div>
            <center><h1>Xmen Episode List</h1></center>
            {episodes.map((episode) => (
                  <div class="ui segment container">
                  <div class="ui content">
                    <div class="ui header">
                        {episode.title}
                    </div>
                    <div class="ui meta">
                    {episode.number}
                    </div>

                    <div class="ui meta">
                    {episode.air_date}
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