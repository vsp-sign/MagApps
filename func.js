function Recorder_to_Flute(song, shifter = 0) {
    var input = document.getElementById("input").value;
    
    var song = input

    function string_to_list(s) {
        let i = 0;
        let result = [];
        while (i < s.length) {
            if (i + 1 < s.length && ['_', '`', '^', '*'].includes(s[i + 1])) {
                result.push(s.substring(i, i + 2));
                i += 2;
            } else {
                result.push(s[i]);
                i += 1;
            }
        }
        return result;
    }

    const Sur = ['P_', 'D_', 'N_', 'S', 'R', 'G', 'M', 'P', 'D', 'N', 'S`', 'R`', 'G`', 'M`', 'P`', 'D`', 'N`', 'S`', 'R`', 'G`', 'M`', 'P`', 'D`', 'N`', 's^', 'r^', 'g^', 'm^', 'p^', 'd^', 'n^', 's*', 'r*', 'g*', 'm*'];
    const Note = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C`', 'D`', 'E`', 'F`', 'G`', 'A`', 'B`', 'C^', 'D^', 'E^', 'F^', 'G^', 'A^', 'B^', 'C*', 'D*', 'E*', 'F*', 'G*', 'A*', 'B*'];
    const shifted_Sur = Sur.slice(shifter).concat(Sur.slice(0, shifter));
    const Sur_dict = Object.fromEntries(Note.map((note, index) => [note, shifted_Sur[index]]));
    const SongNotes = string_to_list(song);
    let NewSongNotes = [];
    for (const note of SongNotes) {
        if (note in Sur_dict) {
            NewSongNotes.push(Sur_dict[note]);
        } else {
            NewSongNotes.push(note);
        }
    }
    NewSongNotes = NewSongNotes.join('');
    
    var output = document.getElementById("output");
    output.innerHTML = NewSongNotes.replace(/\n/g, '<br>'); 
    return ;
}