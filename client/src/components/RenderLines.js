import React, { useContext, useEffect, useState, useCallback } from 'react';
import { ActiveLinesContext } from './ActiveLines';
import '../styles/RenderLines.css'
import BetSlip from './BetSlip';
import Button from './Button';
export const RenderLinesContext = React.createContext();

const RenderLines = () => {
  // const [sportsLines, renderSportsLines] = useState
  const [click, setClick] = useState(false);
  const [clickData, setClickData] = useState({ data: null, isLoading: true })
  const sportsLines = useContext(ActiveLinesContext);
  const header = ['TIME', 'TEAM', 'MONEY', 'SPREAD', 'TOTAL'];
  console.log('hello');
  console.log(clickData);
  
  const handleClick = (e, game) => {
    e.preventDefault();
    e.persist();
    console.log(e);
    console.log(e.target.value)
    setClickData({ data: game,  isLoading: false })
    console.log(clickData);
  };

  useEffect(() => {
    // window.addEventListener("click", handleClick)
    // if(clickData.isLoading) {

    // } else {
    //   console.log('hey')
    // }
    // console.log(sportsLines);
  // }, [sportsLines]);
    // console.log(clickData.isLoading)
    // return () => window.removeEventListener("click", handleClick);
  }, [clickData]);

  return (
    <div className='container'>
      <div className='game-container'>
        <div className='render-sport-title'>NFL</div>
        <table className='table'>
          <thead>
            {/* <tr>{header.map((h, i) => <th key={i}>{h}</th>)}</tr> */}
            <tr className='table-headers'>
              <th className='th' id='header-time'>{header[0]}</th>
              <th className='th' id='header-team'>{header[1]}</th>
              <th className='th' id='header-money'>{header[2]}</th>
              <th className='th' id='header-spread'>{header[3]}</th>
              <th className='th' id='header-total'>{header[4]}</th>
            </tr>
          </thead>
        </table>
            {sportsLines.map(game => {
              return (
                <table className='render-main-body'>
                  <tbody>
                    <tr key={game.key}>
                      <td className='render-away-row'>
                        <table className='render-sub-body'>
                          <tbody>
                            <tr>
                              <td className='render-team'>{game.awayTeam}</td>
                              <td className='render-button'>
                                <Button 
                                  onClick={(e) => handleClick(e, game)}
                                  value={[{
                                    away: game.awayTeam,
                                    line: game.awayMoneyLine
                                  }]}
                                  data={game}
                                  className='render-moneyline'
                                >
                                  {game.awayMoneyLine.toString().charAt(0)==='-' ? game.awayMoneyLine : `+${ game.awayMoneyLine }`}
                                </Button>
                              </td>

                              <td className='render-button'>
                                <Button 
                                  onClick={(e) => handleClick(e, game)}
                                  value={[
                                    game.awayTeam,
                                    game.awaySpread
                                  ]}
                                  data={{data: game}}
                                  className='render-spread'
                                >
                                  {game.awaySpread.toString().charAt(0)==='-' ? game.awaySpread  : `+${ game.awaySpread } (${ game.awaySpreadOdds })`}
                                </Button>
                              </td>
                              <td className='render-button'>
                                <Button 
                                  onClick={(e) => handleClick(e, game)}
                                  value={[
                                    game.awayTeam,
                                    game.awaySpread
                                  ]}
                                  data={game}
                                  className='render-over'
                                >
                                  O/{game.overUnder}
                                </Button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <table className='render-gametime'>
                          <tbody>
                            <tr>
                              <td>{game.gameTimeEst}</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <table className='render-sub-body'>
                          <tbody>
                            <tr>
                              <td className='render-team'>{game.homeTeam}</td>
                              <td className='render-button'>
                                <Button 
                                  onClick={(e) => handleClick(e, game)}
                                  value={[{
                                    away: game.homeTeam,
                                    line: game.homeMoneyLine
                                  }]}
                                  data={game}
                                  className='render-moneyline'
                                >
                                  {game.homeMoneyLine.toString().charAt(0)==='-' ? game.homeMoneyLine : `+${ game.homeMoneyLine }`}
                                </Button>
                              </td>
                              <td className='render-button'>
                                <Button 
                                  onClick={(e) => handleClick(e, game)}
                                  value={[
                                    game.homeTeam,
                                    game.homeSpread
                                  ]}
                                  data={{data: game}}
                                  className='render-spread'
                                >
                                  {game.homeSpread.toString().charAt(0)==='-' ? game.homeSpread  : `+${ game.homeSpread } (${ game.homeSpreadOdds })`}
                                </Button>
                              </td>
                              <td className='render-button'>
                                <Button 
                                  onClick={(e) => handleClick(e, game)}
                                  value={[
                                    game.homeTeam,
                                    game.homeSpread
                                  ]}
                                  data={game}
                                  className='render-over'
                                >
                                  U/{game.overUnder}
                                </Button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              );
            })}
      </div>
      <div className='bet-slip'>
        <BetSlip data={clickData} />

      </div>

    </div>
  );
};

export default RenderLines;
