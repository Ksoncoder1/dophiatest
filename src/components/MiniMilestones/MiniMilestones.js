import React from 'react';
import './MiniMilestones.css';

const MiniMilestones = () => {
  return (
    <div className='MiniMilesContainer Section__Padding'>
        <h1 className='MiniMilesHeading'>Key Milestones</h1>
        <div className='underline'></div>
        <div className='MiniMilesContent'>
                    <p className='MiniMilesText'>
                    By shifting our focus and product offering from tree seedlings (exclusively)
                    to leguminous and fruit seedlings, we have enabled partner farmers to increase
                    their farm productivity by at least 30% and contributed to building a healthier
                    community through balanced nutrition.
                    </p>
                    <p className='MiniMilesText'>
                        Some key highlights from our 2022 operations include
                    </p>
                    <ul>
                        <li>
                            <p className='MiniMilesText'>
                                100%+ increase in the number of partner farmers
                            </p>
                        </li>
                        <li>
                            <p className='MiniMilesText'>
                                5 fully operational and independently managed community nurseries
                            </p>
                        </li>
                        <li>
                            <p className='MiniMilesText'>
                                Reinforced partnership with KEFRI and Kenya Forest College to improve
                                our research and innovation capabilities.
                            </p>
                        </li>
                        <li>
                            <p className='MiniMilesText'>
                                Seedling survival rates of 95%+ in grevillea, lucerne, and fruit trees
                            </p>
                        </li>
                        <li>
                            <p className='MiniMilesText'>
                                Successful pilot of fruit aggregation model for avocados
                            </p>
                        </li>
                        <li>
                            <p className='MiniMilesText'>
                                Improved soil health and crop yields.
                            </p>
                        </li>
                    </ul>
        </div>
    </div>
  )
}

export default MiniMilestones