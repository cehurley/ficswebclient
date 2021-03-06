
var gamemap = new Map();

class Game {
    constructor(s12, game_info) {
        this.situ = game_info.situ;
        this.result = game_info.result;
        this.game_num = game_info.game_num;
        this.white_player = game_info.white_player;
        this.black_player = game_info.black_player;
        this.white_rating = game_info.white_rating;
        this.black_rating = game_info.black_rating;
        this.runr = game_info.runr;
        this.variant = game_info.variant;
        this.time = game_info.time;
        this.inc = game_info.inc;
        this.chess = new Chess();

        if (! this.game_num) {
            this.game_num = s12.game_num;
        }

        this.chess.header(
                'Event', this.time + " + " + this.inc + " " + this.runr + " " + this.variant,
                'White', this.white_player,
                'Black', this.black_player, 
                'TimeControl', s12.dur + '+' + s12.inc,
                'WhiteElo', this.white_rating,
                'BlackElo', this.black_rating
                );

        this.startfen = this.chess.fen().split(/\s+/)[0];

        this.top_is_black = true;

        this.movetimes = [];
        this.fens = [];

        this.s12 = s12;

        this.current_move_index = -1;
        this.clocks = {w:null, b:null};
    }
}


