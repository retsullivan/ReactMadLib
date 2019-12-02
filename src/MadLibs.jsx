import React from 'react';
//this is a function

export const MadLibs = props => <>
    <div className="mt-3">           
        {
            <div className="card mb-3 bg-light">
                <div className="card-header">
                    <h3>How to Decorate a Christmas Tree</h3>
                </div >
                <div className="card-body">
                    <div>
                        <div className="d-flex justify-content-between mb-2 text-muted">
                            <div>
                                <p> Chosing the right tree is an important part of { props.input.word1 } for Christmas. </p>
                                <p> You need a tree that will { props.input.word2 } in your living room - it has to be just the right { props.input.word3 }  </p>
                                <p> Look for one that smells just { props.input.word4 } and looks as { props.input.word5 } as possible. </p>
                                <p> Then take it home and { props.input.word6 } your tree for all to see! </p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        }
    </div>
</>