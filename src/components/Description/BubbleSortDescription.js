import React from 'react'

export default function BubbleSorttDescription() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                    <h2 className="desc_header">Bubble Sort</h2>
                        <div className="desc_body">
                            <p>
                                <a className="ref_link"
                                    href="https://en.wikipedia.org/wiki/Bubble_sort"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Bubble Sort
                                </a>{' '}
                                is a simple sorting algorithm that repeatedly steps through the
                                list, compares adjacent elements and swaps them if they are in the
                                wrong order.The pass through the list is repeated until the list
                                is sorted. The algorithm, which is a comparison sort, is named for
                                the way smaller or larger elements "bubble" to the top of the
                                list. Although the algorithm is simple, it is too slow and
                                impractical for most problems
                            </p>
            
                        </div>                       
                    </div>
                    <div className="col">
                        <h2 className="performance"> Performance</h2>
                        <div className="row performance_body">
                            <div className="col">
                                <p>
                                   Worst-Case time complexity 
                                </p>
                                <p>
                                   Average-Case time complexity 
                                </p><p>
                                   Best-Case time complexity 
                                </p><p>
                                   Worst-Case space complexity 
                                </p>


                            </div>
                            <div className="col">
                                <p>
                                    O(n<sup>2</sup>)
                                </p>
                                <p>
                                    O(n<sup>2</sup>)
                                </p>
                                <p>
                                    O(n)
                                </p>
                                <p>
                                    O(1)
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </React.Fragment>
        
    )
}
