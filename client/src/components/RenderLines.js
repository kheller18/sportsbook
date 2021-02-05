import React, { useContext, useEffect, useState } from 'react';
import { ActiveLinesContext } from './ActiveLines';
import '../styles/RenderLines.css'
import BetSlip from './BetSlip';
import RenderBetSlips from './RenderBetSlips';
import Button from './Button';
export const RenderLinesContext = React.createContext();

const RenderLines = (props) => {
  // const [clickData, setClickData] = useState({ data: null, slipData: null, isLoading: true })
  // const [clickData, setClickData] = useState([{ data: null, slipData: null, isLoading: true }])
  // const [clickData, setClickData] = useState([])
  const [clickData, setClickData] = useState()
  const sportsLines = useContext(ActiveLinesContext);
  const header = ['TIME', 'TEAM', 'MONEY', 'SPREAD', 'TOTAL'];

  // const handleClick = (e, game) => {
  //   e.preventDefault();
  //   e.persist();

  //   // sets click data for bet slips
  //   switch (e.target.id) {
  //     case 'away-moneyline':
  //       setClickData([...clickData, { data: game, slipData: {team: game.awayTeam, odds: game.awayMoneyLine, type: 'MONEYLINE'},  isLoading: false }]);
  //       break;
  //     case 'away-spread':
  //       setClickData([...clickData, { data: game, slipData: {team: game.awayTeam, line: game.awaySpread, odds: game.awaySpreadOdds, type: 'SPREAD'},  isLoading: false }]);
  //       break;
  //     case 'over':
  //       setClickData([...clickData, { data: game, slipData: {team: game.awayTeam, line: game.overUnder, odds: game.overOdds, type: 'TOTALS-OVER'},  isLoading: false }]);
  //       break;
  //     case 'home-moneyline':
  //       setClickData([...clickData, { data: game, slipData: {team: game.homeTeam, odds: game.homeMoneyLine, type: 'MONEYLINE'},  isLoading: false }]);
  //       break;
  //     case 'home-spread':
  //       setClickData([...clickData, { data: game, slipData: {team: game.homeTeam, line: game.homeSpread, odds: game.homeSpreadOdds, type: 'SPREAD'},  isLoading: false }]);
  //       break;
  //     case 'under':
  //       setClickData([...clickData, { data: game, slipData: {team: game.homeTeam, line: game.overUnder, odds: game.underOdds, type: 'TOTALS-UNDER'},  isLoading: false }]);
  //       break;
  //     default:
  //       console.log('None selected.')
  //   };
  //   console.log(clickData);
  //   // <BetSlip data={clickData} />
  // };

  const handleClick = (e, game) => {
    e.preventDefault();
    e.persist();

    // sets click data for bet slips
    switch (e.target.id) {
      case 'away-moneyline':
        setClickData({ data: game, slipData: {team: game.awayTeam, line: null, odds: game.awayMoneyLine, type: 'MONEYLINE', toWin: null, toLose: null, outcome: null, status: 'LIVE', payout: null}, isLoading: false });
        break;
      case 'away-spread':
        setClickData({ data: game, slipData: {team: game.awayTeam, line: game.awaySpread, odds: game.awaySpreadOdds, type: 'SPREAD', toWin: null, toLose: null, outcome: null, status: 'LIVE', payout: null},  isLoading: false });
        break;
      case 'over':
        setClickData({ data: game, slipData: {team: game.awayTeam, line: game.overUnder, odds: game.overOdds, type: 'TOTALS-OVER', toWin: null, toLose: null, outcome: null, status: 'LIVE', payout: null},  isLoading: false });
        break;
      case 'home-moneyline':
        setClickData({ data: game, slipData: {team: game.homeTeam, line: null, odds: game.homeMoneyLine, type: 'MONEYLINE', toWin: null, toLose: null, outcome: null, status: 'LIVE', payout: null},  isLoading: false });
        break;
      case 'home-spread':
        setClickData({ data: game, slipData: {team: game.homeTeam, line: game.homeSpread, odds: game.homeSpreadOdds, type: 'SPREAD', toWin: null, toLose: null, outcome: null, status: 'LIVE', payout: null},  isLoading: false });
        break;
      case 'under':
        setClickData({ data: game, slipData: {team: game.homeTeam, line: game.overUnder, odds: game.underOdds, type: 'TOTALS-UNDER', toWin: null, toLose: null, outcome: null, status: 'LIVE', payout: null},  isLoading: false });
        break;
      default:
        console.log('None selected.')
    };
    console.log(clickData);
    // <RenderBetSlips data={clickData} />
  };

  useEffect(() => {
    console.log('heres the data', clickData)

  }, []);

  return (
    <div className='container'>
      <div className='game-container'>
        <div className='render-sport-title'>{sportsLines[0].league}</div>
        <table className='table'>
          <thead>
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
                                  className='render-moneyline'
                                  id='away-moneyline'
                                >
                                  {game.awayMoneyLine.toString().charAt(0)==='-' ? game.awayMoneyLine : `+${ game.awayMoneyLine }`}
                                </Button>
                              </td>
                              <td className='render-button'>
                                <Button
                                  onClick={(e) => handleClick(e, game)}
                                  className='render-spread'
                                  id='away-spread'
                                >
                                  {game.awaySpread.toString().charAt(0)==='-' ? `${ game.awaySpread } (${ game.awaySpreadOdds })` : `+${ game.awaySpread } (${ game.awaySpreadOdds })`}
                                </Button>
                              </td>
                              <td className='render-button'>
                                <Button
                                  onClick={(e) => handleClick(e, game)}
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
                                  className='render-moneyline'
                                  id='home-moneyline'
                                >
                                  {game.homeMoneyLine.toString().charAt(0)==='-' ? game.homeMoneyLine : `+${ game.homeMoneyLine }`}
                                </Button>
                              </td>
                              <td className='render-button'>
                                <Button
                                  onClick={(e) => handleClick(e, game)}
                                  className='render-spread'
                                  id='home-spread'
                                >
                                  {game.homeSpread.toString().charAt(0)==='-' ? `${ game.homeSpread } (${ game.homeSpreadOdds })` : `+${ game.homeSpread } (${ game.homeSpreadOdds })`}
                                </Button>
                              </td>
                              <td className='render-button'>
                                <Button
                                  onClick={(e) => handleClick(e, game)}
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
        <RenderBetSlips data={clickData} />
      </div>
    </div>
  );
};

export default RenderLines;
