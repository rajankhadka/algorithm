function tournamentWinner(competitions: string[][], results: number[]) {
    // Write your code here.
    let currentTeam = "currentTeam";
    let scores:{[index:string]:number} = {currentTeam:0};
    for (let idx1 = 0; idx1 < results.length; idx1++) {
        let [homeTeam,awayTeam] = competitions[idx1];
        let winningTeam:string = results[idx1]===1 ? homeTeam : awayTeam;
        if(!(winningTeam in scores)) scores[winningTeam] = 0;
        scores[winningTeam]+=3;
        if(scores[winningTeam] > scores[currentTeam]) currentTeam = winningTeam;
    }

    return currentTeam;

}

tournamentWinner([["HTML","C#"],["C#","Python"],["Python","HTML"]],[0,0,1]);