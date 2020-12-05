import React, { useContext, useEffect, useState } from 'react';
import { ActiveLinesContext } from './ActiveLines';
import '../styles/RenderLines.css'
import BetSlip from './BetSlip';
import Button from './Button';
export const RenderLinesContext = React.createContext();

const RenderLines = () => {
  // const [sportsLines, renderSportsLines] = useState
  // const [click, setClick] = useState(false);
  const [clickData, setClickData] = useState({ data: null, slipData: null, isLoading: true })
  const sportsLines = useContext(ActiveLinesContext);
  const header = ['TIME', 'TEAM', 'MONEY', 'SPREAD', 'TOTAL'];
  // console.log('hello');
  // console.log(clickData);
  
  const handleClick = (e, game) => {
    e.preventDefault();
    e.persist();
    console.log(e);
    console.log(e.target.id);
    console.log(game);
    switch (e.target.id) {
      case 'away-moneyline':
        setClickData({ data: game, slipData: {team: game.awayTeam, odds: game.awayMoneyLine, type: 'MONEYLINE'},  isLoading: false });
        break;
      case 'away-spread':
        setClickData({ data: game, slipData: {team: game.awayTeam, line: game.awaySpread, odds: game.awaySpreadOdds, type: 'SPREAD'},  isLoading: false });
        break;
      case 'over':
        setClickData({ data: game, slipData: {team: game.awayTeam, line: game.overUnder, odds: game.overOdds, type: 'TOTALS-OVER'},  isLoading: false });
        break;
      case 'home-moneyline':
        setClickData({ data: game, slipData: {team: game.homeTeam, odds: game.homeMoneyLine, type: 'MONEYLINE'},  isLoading: false });
        break;
      case 'home-spread':
        console.log('homespread');
        setClickData({ data: game, slipData: {team: game.homeTeam, line: game.homeSpread, odds: game.homeSpreadOdds, type: 'SPREAD'},  isLoading: false });
        break;
      case 'under':
        setClickData({ data: game, slipData: {team: game.homeTeam, line: game.overUnder, odds: game.underOdds, type: 'TOTALS-UNDER'},  isLoading: false });
        break;
      default:
        console.log('None selected.')
    };
    // setClickData({ data: game,  isLoading: false });
    // setClickData({ data: game, slipData: {team: game.awayTeam, odds: game.awayMoneyLine, type: 'moneyline'},  isLoading: false });
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
    console.log(clickData);
  }, [handleClick]);

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
          <div className='scroll-container'>
            {sportsLines.map(game => {
              return (
                <table key={game.key} className='render-main-body'>
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
                                  value={{
                                    
                                      slipInfo: {
                                        team: game.awayTeam,
                                        odds: game.awayMoneyLine
                                      } 
                                    
                                  }}
                                  data={game}
                                  className='render-moneyline'
                                  id='away-moneyline'
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
                                  id='away-spread'
                                >
                                  {game.awaySpread.toString().charAt(0)==='-' ? `${ game.awaySpread } (${ game.awaySpreadOdds })` : `+${ game.awaySpread } (${ game.awaySpreadOdds })`}
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
                                  id='over'
                                >
                                  O/{game.overUnder} ({game.overOdds})
                                </Button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td className='render-gametime-row'>
                        <table className='render-gametime'>
                          <tbody>
                            <tr>
                              <td>{game.gameDate}<br />{game.gameTimeEst}</td>
                              {/* <td>{game.gameTimeEst}</td> */}
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
                                  id='home-moneyline'
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
                                  id='home-spread'
                                >
                                  {game.homeSpread.toString().charAt(0)==='-' ? `${ game.homeSpread } (${ game.homeSpreadOdds })` : `+${ game.homeSpread } (${ game.homeSpreadOdds })`}
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
                                  id='under'
                                >
                                  U/{game.overUnder} ({game.underOdds})
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
      </div>
      <div className='bet-slip'>
        <BetSlip data={clickData} />
      </div>
    </div>
  );
};

export default RenderLines;
