import React from 'react'

export default function MergeSortDescription() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                    <h2 className="desc_header">Merge Sort</h2>
                        <div className="desc_body">
                            <p>
                                <a className="ref_link"
                                    href="https://en.wikipedia.org/wiki/Merge_sort"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Merge Sort
                                </a>{' '}
                                is an efficient, stable sorting algorith that makes use of the
                                divide and conquer strategy. Conceptually the algorithm works as
                                follows:
                            </p>
                            <ol>
                                <li>
                                    Divide the unsorted list into <em>n</em> sublists, each
                                    containing one element(a list of one element is considered
                                    sorted)
                                </li>
                                <li>
                                    Repeatedly merge sublists to produce new sorted sublists until
                                    there is only one sublist remaining. This will be the sorted
                                    list.
                                </li>
                            </ol>
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
                                    O(n log n)
                                </p>
                                <p>
                                    O(n log n)
                                </p>
                                <p>
                                    O(n log n)
                                </p>
                                <p>
                                    O(n)
                                </p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </React.Fragment>
        
    )
}
