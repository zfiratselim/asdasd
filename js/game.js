var plays = 0;
let params = []
let startGame;

function playNow(_0x2184x9, _0x2184xe, _0x2184xd) {
    _0x2184x9.preventDefault();

    const con = document.querySelector(".play_con");
    con.innerHTML = `
			<div class="progress">
				<div class="progress-value"></div>
			</div>
		`

    setTimeout(() => {
        params = [];
        params.push(_0x2184x9, _0x2184xe, _0x2184xd)
        plays++;
        if (plays == 1) {
            show_preroll();
            plays = -4;
        } else {
            startGame(params[0], params[1], params[2])
        }
    }, 2500)
}

function refReshAds() {
    aiptag.cmd.display.push(function() { aipDisplayTag.display('paper-io-org_970x250') });
    aiptag.cmd.display.push(function() { aipDisplayTag.display('paper-io-org_300x250') });
}

var _0x4197 = ["\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74", "\x70\x61\x72\x65\x6E\x74\x4E\x6F\x64\x65", "\x72\x65\x6D\x6F\x76\x65\x43\x68\x69\x6C\x64", "\x6C\x65\x6E\x67\x74\x68", "\x70\x75\x73\x68", "\x63\x68\x69\x6C\x64\x72\x65\x6E", "\x64\x65\x66\x61\x75\x6C\x74\x50\x72\x6F\x70\x73", "\x72\x65\x66", "\x6B\x65\x79", "\x5F", "\x76\x6E\x6F\x64\x65", "\x62\x6F\x6F\x6C\x65\x61\x6E", "\x73\x74\x72\x69\x6E\x67", "\x6E\x75\x6D\x62\x65\x72", "\x69\x73\x41\x72\x72\x61\x79", "\x5F\x5F\x65", "\x5F\x5F\x63", "\x74\x79\x70\x65", "\x70\x72\x6F\x70\x73", "\x74\x65\x78\x74", "\x63\x6F\x6E\x74\x65\x78\x74", "\x5F\x5F\x64", "\x64\x65\x62\x6F\x75\x6E\x63\x65\x52\x65\x6E\x64\x65\x72\x69\x6E\x67", "\x5F\x5F\x62", "\x73\x6F\x72\x74", "\x70\x6F\x70", "\x66\x6F\x72\x63\x65\x55\x70\x64\x61\x74\x65", "\x5F\x5F\x6B", "\x6C", "\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64", "\x6E\x65\x78\x74\x53\x69\x62\x6C\x69\x6E\x67", "\x69\x6E\x73\x65\x72\x74\x42\x65\x66\x6F\x72\x65", "\x63\x6C\x61\x73\x73", "\x63\x6C\x61\x73\x73\x4E\x61\x6D\x65", "\x73\x74\x79\x6C\x65", "\x63\x73\x73\x54\x65\x78\x74", "", "\x2D", "\x72\x65\x70\x6C\x61\x63\x65", "\x73\x65\x74\x50\x72\x6F\x70\x65\x72\x74\x79", "\x74\x65\x73\x74", "\x70\x78", "\x64\x61\x6E\x67\x65\x72\x6F\x75\x73\x6C\x79\x53\x65\x74\x49\x6E\x6E\x65\x72\x48\x54\x4D\x4C", "\x6F", "\x6E", "\x73\x75\x62\x73\x74\x72\x69\x6E\x67", "\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65", "\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72", "\x72\x65\x6D\x6F\x76\x65\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72", "\x75", "\x6C\x69\x73\x74", "\x74\x61\x67\x4E\x61\x6D\x65", "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x77\x33\x2E\x6F\x72\x67\x2F\x31\x39\x39\x39\x2F\x78\x6C\x69\x6E\x6B", "\x72\x65\x6D\x6F\x76\x65\x41\x74\x74\x72\x69\x62\x75\x74\x65\x4E\x53", "\x72\x65\x6D\x6F\x76\x65\x41\x74\x74\x72\x69\x62\x75\x74\x65", "\x66\x75\x6E\x63\x74\x69\x6F\x6E", "\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65\x4E\x53", "\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65", "\x65\x76\x65\x6E\x74", "\x64\x69\x66\x66", "\x63\x6F\x6E\x74\x65\x78\x74\x54\x79\x70\x65", "\x76\x61\x6C\x75\x65", "\x5F\x5F\x70", "\x5F\x5F\x45", "\x70\x72\x6F\x74\x6F\x74\x79\x70\x65", "\x72\x65\x6E\x64\x65\x72", "\x63\x6F\x6E\x73\x74\x72\x75\x63\x74\x6F\x72", "\x5F\x5F\x61", "\x73\x75\x62", "\x73\x74\x61\x74\x65", "\x5F\x5F\x6E", "\x5F\x5F\x68", "\x5F\x5F\x76", "\x5F\x5F\x73", "\x67\x65\x74\x44\x65\x72\x69\x76\x65\x64\x53\x74\x61\x74\x65\x46\x72\x6F\x6D\x50\x72\x6F\x70\x73", "\x63\x6F\x6D\x70\x6F\x6E\x65\x6E\x74\x57\x69\x6C\x6C\x4D\x6F\x75\x6E\x74", "\x63\x6F\x6D\x70\x6F\x6E\x65\x6E\x74\x44\x69\x64\x4D\x6F\x75\x6E\x74", "\x63\x6F\x6D\x70\x6F\x6E\x65\x6E\x74\x57\x69\x6C\x6C\x52\x65\x63\x65\x69\x76\x65\x50\x72\x6F\x70\x73", "\x73\x68\x6F\x75\x6C\x64\x43\x6F\x6D\x70\x6F\x6E\x65\x6E\x74\x55\x70\x64\x61\x74\x65", "\x63\x6F\x6D\x70\x6F\x6E\x65\x6E\x74\x57\x69\x6C\x6C\x55\x70\x64\x61\x74\x65", "\x5F\x5F\x74", "\x67\x65\x74\x43\x68\x69\x6C\x64\x43\x6F\x6E\x74\x65\x78\x74", "\x67\x65\x74\x53\x6E\x61\x70\x73\x68\x6F\x74\x42\x65\x66\x6F\x72\x65\x55\x70\x64\x61\x74\x65", "\x62\x61\x73\x65", "\x5F\x5F\x50", "\x63\x61\x6C\x6C", "\x63\x6F\x6D\x70\x6F\x6E\x65\x6E\x74\x44\x69\x64\x55\x70\x64\x61\x74\x65", "\x73\x76\x67", "\x6E\x6F\x64\x65\x54\x79\x70\x65", "\x6C\x6F\x63\x61\x6C\x4E\x61\x6D\x65", "\x63\x72\x65\x61\x74\x65\x54\x65\x78\x74\x4E\x6F\x64\x65", "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x77\x33\x2E\x6F\x72\x67\x2F\x32\x30\x30\x30\x2F\x73\x76\x67", "\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74\x4E\x53", "\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74", "\x64\x61\x74\x61", "\x63\x68\x69\x6C\x64\x4E\x6F\x64\x65\x73", "\x73\x6C\x69\x63\x65", "\x61\x74\x74\x72\x69\x62\x75\x74\x65\x73", "\x6E\x61\x6D\x65", "\x5F\x5F\x68\x74\x6D\x6C", "\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C", "\x6D\x75\x6C\x74\x69\x70\x6C\x65", "\x66\x6F\x72\x65\x69\x67\x6E\x4F\x62\x6A\x65\x63\x74", "\x6B\x65\x79\x73", "\x63\x68\x65\x63\x6B\x65\x64", "\x64\x69\x66\x66\x65\x64", "\x63\x6F\x6D\x6D\x69\x74", "\x63\x75\x72\x72\x65\x6E\x74", "\x75\x6E\x6D\x6F\x75\x6E\x74", "\x63\x6F\x6D\x70\x6F\x6E\x65\x6E\x74\x57\x69\x6C\x6C\x55\x6E\x6D\x6F\x75\x6E\x74", "\x67\x65\x74\x44\x65\x72\x69\x76\x65\x64\x53\x74\x61\x74\x65\x46\x72\x6F\x6D\x45\x72\x72\x6F\x72", "\x73\x65\x74\x53\x74\x61\x74\x65", "\x63\x6F\x6D\x70\x6F\x6E\x65\x6E\x74\x44\x69\x64\x43\x61\x74\x63\x68", "\x6F\x77\x6E\x65\x72\x53\x56\x47\x45\x6C\x65\x6D\x65\x6E\x74", "\x72\x65\x73\x6F\x6C\x76\x65", "\x62\x69\x6E\x64", "\x74\x68\x65\x6E", "\x6E\x6F\x77", "\x65\x78\x70\x6F\x72\x74\x73", "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64", "\x65\x78\x70\x69\x72\x65\x73", "\x2F", "\x64\x65\x66\x61\x75\x6C\x74\x73", "\x67\x65\x74\x4D\x69\x6C\x6C\x69\x73\x65\x63\x6F\x6E\x64\x73", "\x73\x65\x74\x4D\x69\x6C\x6C\x69\x73\x65\x63\x6F\x6E\x64\x73", "\x74\x6F\x55\x54\x43\x53\x74\x72\x69\x6E\x67", "\x73\x74\x72\x69\x6E\x67\x69\x66\x79", "\x77\x72\x69\x74\x65", "\x3B\x20", "\x3D", "\x63\x6F\x6F\x6B\x69\x65", "\x73\x70\x6C\x69\x74", "\x6A\x6F\x69\x6E", "\x6A\x73\x6F\x6E", "\x22", "\x63\x68\x61\x72\x41\x74", "\x72\x65\x61\x64", "\x70\x61\x72\x73\x65", "\x67\x65\x74", "\x73\x65\x74", "\x67\x65\x74\x4A\x53\x4F\x4E", "\x61\x70\x70\x6C\x79", "\x72\x65\x6D\x6F\x76\x65", "\x77\x69\x74\x68\x43\x6F\x6E\x76\x65\x72\x74\x65\x72", "\x73\x79\x6D\x62\x6F\x6C", "\x69\x74\x65\x72\x61\x74\x6F\x72", "\x43\x61\x6E\x6E\x6F\x74\x20\x63\x61\x6C\x6C\x20\x61\x20\x63\x6C\x61\x73\x73\x20\x61\x73\x20\x61\x20\x66\x75\x6E\x63\x74\x69\x6F\x6E", "\x65\x6E\x75\x6D\x65\x72\x61\x62\x6C\x65", "\x63\x6F\x6E\x66\x69\x67\x75\x72\x61\x62\x6C\x65", "\x77\x72\x69\x74\x61\x62\x6C\x65", "\x64\x65\x66\x69\x6E\x65\x50\x72\x6F\x70\x65\x72\x74\x79", "\x53\x75\x70\x65\x72\x20\x65\x78\x70\x72\x65\x73\x73\x69\x6F\x6E\x20\x6D\x75\x73\x74\x20\x65\x69\x74\x68\x65\x72\x20\x62\x65\x20\x6E\x75\x6C\x6C\x20\x6F\x72\x20\x61\x20\x66\x75\x6E\x63\x74\x69\x6F\x6E", "\x63\x72\x65\x61\x74\x65", "\x73\x65\x74\x50\x72\x6F\x74\x6F\x74\x79\x70\x65\x4F\x66", "\x67\x65\x74\x50\x72\x6F\x74\x6F\x74\x79\x70\x65\x4F\x66", "\x5F\x5F\x70\x72\x6F\x74\x6F\x5F\x5F", "\x74\x68\x69\x73\x20\x68\x61\x73\x6E\x27\x74\x20\x62\x65\x65\x6E\x20\x69\x6E\x69\x74\x69\x61\x6C\x69\x73\x65\x64\x20\x2D\x20\x73\x75\x70\x65\x72\x28\x29\x20\x68\x61\x73\x6E\x27\x74\x20\x62\x65\x65\x6E\x20\x63\x61\x6C\x6C\x65\x64", "\x6F\x62\x6A\x65\x63\x74", "\x64\x6F\x6E\x65", "\x6E\x65\x78\x74", "\x72\x65\x74\x75\x72\x6E", "\x49\x6E\x76\x61\x6C\x69\x64\x20\x61\x74\x74\x65\x6D\x70\x74\x20\x74\x6F\x20\x64\x65\x73\x74\x72\x75\x63\x74\x75\x72\x65\x20\x6E\x6F\x6E\x2D\x69\x74\x65\x72\x61\x62\x6C\x65\x20\x69\x6E\x73\x74\x61\x6E\x63\x65", "\x5B\x6F\x62\x6A\x65\x63\x74\x20\x41\x72\x67\x75\x6D\x65\x6E\x74\x73\x5D", "\x74\x6F\x53\x74\x72\x69\x6E\x67", "\x66\x72\x6F\x6D", "\x49\x6E\x76\x61\x6C\x69\x64\x20\x61\x74\x74\x65\x6D\x70\x74\x20\x74\x6F\x20\x73\x70\x72\x65\x61\x64\x20\x6E\x6F\x6E\x2D\x69\x74\x65\x72\x61\x62\x6C\x65\x20\x69\x6E\x73\x74\x61\x6E\x63\x65", "\x70\x6F\x77", "\x61\x62\x73", "\x6D\x69\x6E", "\x6D\x61\x78", "\x50\x49", "\x63\x6F\x73", "\x73\x69\x6E", "\x68", "\x73", "\x76", "\x72\x6F\x75\x6E\x64", "\x66\x6C\x6F\x6F\x72", "\x63\x6F\x6E\x63\x61\x74", "\x30", "\x66\x6F\x72\x45\x61\x63\x68", "\x23", "\x63\x65\x6C\x6C", "\x73\x65\x67\x6D\x65\x6E\x74\x73", "\x78", "\x79", "\x69\x6E\x64\x65\x78\x4F\x66", "\x73\x70\x61\x63\x65", "\x73\x70\x6C\x69\x63\x65", "\x72\x65\x6C\x65\x61\x73\x65", "\x61\x64\x64", "\x6D\x75\x6C", "\x6D\x75\x6C\x53\x63\x61\x6C\x61\x72", "\x6D\x61\x67\x6E\x69\x74\x75\x64\x65", "\x73\x71\x72\x74", "\x6E\x6F\x72\x6D\x61\x6C\x69\x7A\x65", "\x63\x6F\x70\x79", "\x64\x69\x73\x74\x61\x6E\x63\x65", "\x64\x69\x73\x74\x61\x6E\x63\x65\x32", "\x64\x6F\x74", "\x72\x6F\x74\x61\x74\x65", "\x61\x6E\x67\x6C\x65", "\x61\x74\x61\x6E\x32", "\x69\x6E\x76\x65\x72\x74", "\x65\x71\x75\x61\x6C", "\x63\x6C\x6F\x6E\x65", "\x61\x6C\x6C\x6F\x63", "\x70\x6F\x69\x6E\x74\x73", "\x77\x69\x64\x74\x68", "\x68\x65\x69\x67\x68\x74", "\x63\x65\x6E\x74\x65\x72", "\x73\x69\x7A\x65", "\x77", "\x63\x65\x69\x6C", "\x63\x65\x6C\x6C\x73", "\x63\x6F\x75\x6E\x74", "\x67\x65\x74\x43\x65\x6C\x6C", "\x63\x68\x65\x63\x6B\x50\x6F\x69\x6E\x74", "\x66\x69\x6E\x64", "\x73\x65\x67\x6D\x65\x6E\x74\x73\x43\x6F\x75\x6E\x74", "\x69\x64", "\x69\x6E\x74\x65\x72\x73\x65\x63\x74\x69\x6F\x6E\x73", "\x73\x74\x61\x72\x74", "\x65\x6E\x64", "\x6D\x61\x72\x6B", "\x69\x6E\x74\x65\x72\x73\x65\x63\x74", "\x73\x68\x61\x70\x65", "\x63\x61\x6C\x63", "\x76\x65\x63\x74\x6F\x72", "\x61", "\x62", "\x63", "\x72\x65\x76\x65\x72\x73\x65", "\x7A\x6E", "\x73\x69\x67\x6E", "\x68\x61\x73", "\x6F\x77\x6E\x65\x72", "\x75\x70\x64\x61\x74\x65\x42\x6F\x75\x6E\x64\x73", "\x69\x6E\x73\x65\x72\x74", "\x66\x69\x6E\x64\x49\x6E\x64\x65\x78", "\x68\x61\x73\x50\x6F\x69\x6E\x74", "\x73\x6F\x6D\x65", "\x66\x69\x6E\x64\x53\x65\x67\x6D\x65\x6E\x74", "\x75\x6E\x73\x70\x6C\x69\x63\x65", "\x6C\x65\x66\x74", "\x72\x69\x67\x68\x74", "\x6D\x61\x70", "\x69\x6E\x73\x69\x64\x65", "\x72\x61\x77\x53\x71\x75\x61\x72\x65", "\x73\x71\x75\x61\x72\x65", "\x63\x61\x6C\x63\x50\x61\x74\x68", "\x6D\x6F\x76\x65\x54\x6F", "\x6C\x69\x6E\x65\x54\x6F", "\x63\x6C\x6F\x73\x65\x50\x61\x74\x68", "\x70\x61\x74\x68", "\x62\x6F\x75\x6E\x64\x73", "\x69\x6E\x6E\x65\x72\x57\x69\x64\x74\x68", "\x69\x6E\x6E\x65\x72\x48\x65\x69\x67\x68\x74", "\x72\x61\x64\x69\x75\x73", "\x70\x6F\x6C\x79\x67\x6F\x6E", "\x6F\x76\x65\x72\x6C\x61\x79", "\x66\x69\x6C\x74\x65\x72", "\x63\x6F\x6C\x6F\x72", "\x75\x6E\x69\x74", "\x70\x6F\x73\x69\x74\x69\x6F\x6E", "\x76\x65\x6C\x6F\x63\x69\x74\x79", "\x64\x75\x72\x61\x74\x69\x6F\x6E", "\x74\x69\x6D\x65", "\x66\x61\x64\x69\x6E\x67", "\x75\x70\x64\x61\x74\x65", "\x64\x72\x61\x77", "\x64\x65\x76\x69\x63\x65\x50\x69\x78\x65\x6C\x52\x61\x74\x69\x6F", "\x66\x69\x6C\x6C\x53\x74\x79\x6C\x65", "\x66\x6F\x6E\x74", "\x70\x78\x20", "\x62\x6F\x6C\x64\x20", "\x74\x65\x78\x74\x41\x6C\x69\x67\x6E", "\x74\x65\x78\x74\x42\x61\x73\x65\x6C\x69\x6E\x65", "\x6D\x69\x64\x64\x6C\x65", "\x66\x69\x6C\x6C\x54\x65\x78\x74", "\x61\x63\x63\x65\x6C\x65\x72\x61\x74\x69\x6F\x6E", "\x73\x63\x61\x6C\x65", "\x76\x73\x63\x61\x6C\x65", "\x72\x6F\x74\x61\x74\x69\x6F\x6E", "\x72\x61\x6E\x64\x6F\x6D", "\x73\x61\x76\x65", "\x74\x72\x61\x6E\x73\x6C\x61\x74\x65", "\x66\x69\x6C\x6C", "\x72\x65\x73\x74\x6F\x72\x65", "\x75\x70", "\x64\x6F\x77\x6E", "\x6D\x6F\x64\x69\x66\x69\x65\x72\x73", "\x6D\x6F\x75\x73\x65", "\x6C\x61\x73\x74\x4D\x6F\x75\x73\x65", "\x62\x75\x74\x74\x6F\x6E\x73", "\x6B\x65\x79\x62\x6F\x61\x72\x64\x4D\x6F\x64\x65\x53\x77\x69\x74\x63\x68", "\x6F\x6E\x4B\x65\x79\x43\x68\x61\x6E\x67\x65", "\x6B\x65\x79\x64\x6F\x77\x6E", "\x6B\x65\x79\x75\x70", "\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74", "\x63\x6F\x6E\x74\x65\x78\x74\x6D\x65\x6E\x75", "\x6F\x6E\x4D\x6F\x75\x73\x65\x43\x68\x61\x6E\x67\x65", "\x70\x61\x67\x65\x58", "\x70\x61\x67\x65\x59", "\x6D\x6F\x75\x73\x65\x65\x6E\x74\x65\x72", "\x6D\x6F\x75\x73\x65\x6D\x6F\x76\x65", "\x6D\x6F\x75\x73\x65\x6C\x65\x61\x76\x65", "\x6D\x6F\x75\x73\x65\x64\x6F\x77\x6E", "\x6D\x6F\x75\x73\x65\x75\x70", "\x63\x68\x61\x6E\x67\x65\x64\x54\x6F\x75\x63\x68\x65\x73", "\x63\x6C\x69\x65\x6E\x74\x58", "\x63\x6C\x69\x65\x6E\x74\x59", "\x74\x6F\x75\x63\x68\x73\x74\x61\x72\x74", "\x74\x6F\x75\x63\x68\x6D\x6F\x76\x65", "\x74\x6F\x75\x63\x68\x65\x6E\x64", "\x74\x6F\x75\x63\x68\x63\x61\x6E\x63\x65\x6C", "\x64\x69\x73\x70\x6F\x73\x65", "\x70\x72\x65\x73\x73\x65\x64", "\x74\x61\x72\x67\x65\x74", "\x62\x6F\x64\x79", "\x73\x77\x69\x74\x63\x68", "\x6B\x65\x79\x43\x6F\x64\x65", "\x73\x68\x69\x66\x74", "\x73\x68\x69\x66\x74\x4B\x65\x79", "\x63\x74\x72\x6C", "\x63\x74\x72\x6C\x4B\x65\x79", "\x61\x6C\x74", "\x61\x6C\x74\x4B\x65\x79", "\x6D\x65\x74\x61", "\x6D\x65\x74\x61\x4B\x65\x79", "\x62\x75\x74\x74\x6F\x6E", "\x70\x6F\x6C\x79\x6C\x69\x6E\x65", "\x6C\x69\x6E\x65\x57\x69\x64\x74\x68", "\x73\x74\x72\x6F\x6B\x65\x53\x74\x79\x6C\x65", "\x73\x74\x72\x6F\x6B\x65", "\x61\x72\x63", "\x74\x72\x61\x63\x6B\x57\x69\x64\x74\x68", "\x69\x6D\x61\x67\x65", "\x6E\x61\x74\x75\x72\x61\x6C\x57\x69\x64\x74\x68", "\x6E\x61\x74\x75\x72\x61\x6C\x48\x65\x69\x67\x68\x74", "\x61\x76\x61\x74\x61\x72", "\x73\x6B\x69\x6E", "\x62\x61\x73\x65\x48\x65\x69\x67\x68\x74", "\x6C\x65\x76\x65\x6C", "\x64\x69\x72\x65\x63\x74\x69\x6F\x6E", "\x62\x69\x6C\x6C\x62\x6F\x61\x72\x64", "\x70\x69\x76\x6F\x74", "\x64\x72\x61\x77\x49\x6D\x61\x67\x65", "\x6D\x65\x72\x67\x65\x73", "\x63\x61\x6C\x63\x53\x71\x75\x61\x72\x65", "\x68\x61\x6E\x64\x6C\x65\x49\x6E\x74\x65\x72\x73\x65\x63\x74", "\x68\x61\x6E\x64\x6C\x65\x53\x65\x6C\x66\x49\x6E\x74\x65\x72\x73\x65\x63\x74", "\x68\x61\x6E\x64\x6C\x65\x45\x6E\x65\x6D\x79\x49\x6E\x74\x65\x72\x73\x65\x63\x74", "\x70\x6F\x69\x6E\x74", "\x73\x65\x67\x6D\x65\x6E\x74", "\x69\x6E", "\x74\x72\x61\x63\x6B", "\x68\x61\x6E\x64\x6C\x65\x52\x65\x74\x75\x72\x6E", "\x61\x73\x73\x69\x67\x6E", "\x74\x6F\x70", "\x62\x6F\x74\x74\x6F\x6D", "\x69\x73\x54\x72\x61\x63\x6B", "\x6B\x69\x6C\x6C", "\x73\x74\x61\x74\x65\x73", "\x70\x61\x79\x6C\x6F\x61\x64", "\x63\x68\x61\x6E\x67\x65", "\x6C\x65\x61\x76\x65", "\x65\x6E\x74\x65\x72", "\x50\x54\x20\x53\x61\x6E\x73\x20\x43\x61\x70\x74\x69\x6F\x6E", "\x63\x75\x74", "\x65\x78\x69\x74", "\x67\x61\x6D\x65", "\x62\x6F\x72\x64\x65\x72", "\x65\x78\x69\x74\x50\x6F\x69\x6E\x74", "\x63\x61\x70\x74\x75\x72\x65", "\x69\x64\x6C\x65", "\x75\x6E\x69\x74\x53\x70\x65\x65\x64", "\x6D\x69\x6E\x44\x69\x73\x74\x61\x6E\x63\x65", "\x76\x61\x6C\x75\x65\x73", "\x6C\x6F\x67", "\u0110\u02C7\u0110\xB5\u0110\u0142\u0110\u013D\u0110\xB5\u0110\u02DD\u0143\u201A\x20\u0110\u02DD\u0110\xB5\x20\u0110\u02DD\u0110\xB0\u0110\u0105\u0110\xB4\u0110\xB5\u0110\u02DD\x2E\x20\u0110\u2018\u0110\xB0\u0110\u0142\x20\u0110\u02DB\x20\u0110\u0142\u0143\u20AC\u0143\u0179\u0110\xB7\u0110\u02DD\u0110\u013E\u0110\u013D\x20\u0143\u2026\u0110\xB0\u0110\u015F\u0110\xB5\x21\x21\x21", "\x74\x61\x72\x67\x65\x74\x73", "\x72\x65\x74\x75\x72\x6E\x50\x6F\x69\x6E\x74", "\x62\x61\x63\x6B", "\x75\x6E\x69\x74\x73", "\x6C\x61\x73\x74\x53\x71\x75\x61\x72\x65", "\x72\x65\x73\x70\x61\x77\x6E", "\x73\x74\x61\x74\x69\x73\x74\x69\x63\x73", "\x6D\x6F\x76\x65\x6D\x65\x6E\x74", "\x73\x70\x65\x65\x64", "\x66\x73\x6D", "\x63\x6F\x6E\x66\x69\x67", "\x6C\x61\x6E\x67\x75\x61\x67\x65", "\x63\x6F\x6E\x74\x72\x6F\x6C\x6C\x65\x72", "\x73\x6B\x69\x6E\x4D\x61\x6E\x61\x67\x65\x72", "\x6E\x61\x6D\x65\x4D\x61\x6E\x61\x67\x65\x72", "\x76\x69\x65\x77", "\x70\x6C\x61\x79\x65\x72", "\x6B\x65\x79\x62\x6F\x61\x72\x64", "\x66\x61\x6B\x65\x4D\x6F\x75\x73\x65", "\x6C\x61\x62\x65\x6C\x73", "\x6D\x61\x78\x53\x63\x61\x6C\x65", "\x67\x61\x6D\x65\x4F\x76\x65\x72\x43\x61\x6C\x6C\x62\x61\x63\x6B", "\x76\x69\x73\x69\x62\x6C\x65", "\x6E\x65\x65\x64\x53\x75\x73\x70\x65\x6E\x64\x53\x70\x61\x77\x6E", "\x73\x75\x73\x70\x65\x6E\x64\x53\x70\x61\x77\x6E", "\x70\x61\x72\x74\x69\x63\x6C\x65\x73", "\x6D\x65\x74\x72\x69\x63\x73", "\x63\x75\x72\x72\x4D\x65\x74\x72\x69\x63", "\x6C\x61\x73\x74", "\x6C\x6F\x6F\x70\x65\x64", "\x72\x65\x73\x69\x7A\x65", "\x73\x74\x61\x74\x73", "\x74\x69\x6D\x69\x6E\x67\x73", "\x65\x76\x65\x6E\x74\x73", "\x61\x64\x64\x50\x6C\x61\x79\x65\x72", "\x61\x64\x64\x55\x6E\x69\x74", "\x67\x65\x74\x73\x70\x61\x77\x6E\x50\x6F\x73\x69\x74\x69\x6F\x6E", "\x62\x61\x73\x65\x52\x61\x64\x69\x75\x73", "\x73\x70\x61\x77\x6E\x42\x6F\x74", "\x62\x61\x73\x65\x43\x6F\x75\x6E\x74", "\x73\x70\x61\x77\x6E\x54\x69\x6D\x65\x6F\x75\x74", "\x62\x6F\x74\x73\x43\x6F\x75\x6E\x74", "\x70\x6F\x6F\x6C", "\x72\x65\x71\x75\x65\x73\x74", "\x73\x70\x61\x77\x6E\x50\x6C\x61\x79\x65\x72", "\x6D\x69\x6E\x53\x63\x61\x6C\x65", "\x64\x65\x66\x61\x75\x6C\x74\x50\x6C\x61\x79\x65\x72\x4E\x61\x6D\x65", "\x73\x74\x61\x72\x74\x54\x69\x6D\x65", "\x67\x65\x6E\x4B\x69\x6C\x6C\x50\x61\x72\x74\x69\x63\x6C\x65\x73", "\x63\x6F\x6C\x6F\x72\x73", "\x67\x61\x6D\x65\x4F\x76\x65\x72", "\x63\x61\x6E\x76\x61\x73", "\x32\x64", "\x67\x65\x74\x43\x6F\x6E\x74\x65\x78\x74", "\x70\x61\x74\x74\x65\x72\x6E", "\x6D\x61\x69\x6E", "\x69\x6D\x61\x67\x65\x2F\x70\x6E\x67", "\x74\x6F\x44\x61\x74\x61\x55\x52\x4C", "\x62\x65\x73\x74", "\x6B\x69\x6C\x6C\x73", "\x64\x65\x61\x74\x68", "\x6B\x69\x6C\x6C\x54\x65\x78\x74", "\x67\x65\x74\x4D\x6F\x76\x65\x6D\x65\x6E\x74", "\x6F\x62\x73\x65\x72\x76\x65\x72\x53\x63\x61\x6C\x65", "\x6D\x6F\x64\x65\x32", "\x61\x69\x53\x74\x61\x72\x74\x54\x69\x6D\x65", "\x61\x69\x45\x6E\x64\x54\x69\x6D\x65", "\u0110\u2018\u0143\u2039\u0110\u02DB\u0110\xB0\u0110\xB5\u0143\u201A\x20\u0110\xBB\u0110\xB8\x20\u0143\u201A\u0110\xB0\u0110\u015F\u0110\u013E\u0110\xB5\x3F", "\x74\x6F\x46\x69\x78\x65\x64", "\x25", "\x2B", "\x73\x70\x61\x77\x6E\x53\x74\x61\x72\x74\x54\x69\x6D\x65", "\x73\x70\x61\x77\x6E\x45\x6E\x64\x54\x69\x6D\x65", "\x63\x6C\x69\x65\x6E\x74\x57\x69\x64\x74\x68", "\x63\x6C\x69\x65\x6E\x74\x48\x65\x69\x67\x68\x74", "\x72\x65\x73\x65\x74\x54\x72\x61\x6E\x73\x66\x6F\x72\x6D", "\x63\x6C\x65\x61\x72\x52\x65\x63\x74", "\x6C\x69\x6E\x65\x43\x61\x70", "\x67\x6C\x6F\x62\x61\x6C\x43\x6F\x6D\x70\x6F\x73\x69\x74\x65\x4F\x70\x65\x72\x61\x74\x69\x6F\x6E", "\x64\x65\x73\x74\x69\x6E\x61\x74\x69\x6F\x6E\x2D\x6F\x75\x74", "\x64\x65\x73\x74\x69\x6E\x61\x74\x69\x6F\x6E\x2D\x6F\x76\x65\x72", "\x63\x6C\x69\x70", "\x73\x6F\x75\x72\x63\x65\x2D\x6F\x76\x65\x72", "\x74\x6F\x70\x4C\x61\x79\x65\x72\x73", "\x6E\x69\x63\x6B", "\x62\x6F\x74\x74\x6F\x6D\x4C\x61\x79\x65\x72\x73", "\x67\x6C\x6F\x62\x61\x6C\x41\x6C\x70\x68\x61", "\x23\x65\x37\x66\x66\x66\x34", "\x23\x38\x38\x61\x37\x39\x39", "\x23\x32\x64\x36\x39\x39\x38", "\x61\x64\x64\x43\x6F\x6C\x6F\x72\x53\x74\x6F\x70", "\x63\x72\x65\x61\x74\x65\x4C\x69\x6E\x65\x61\x72\x47\x72\x61\x64\x69\x65\x6E\x74", "\x23\x35\x31\x64\x37\x64\x64", "\x23\x38\x31\x66\x61\x66\x66", "\x66\x69\x6C\x6C\x52\x65\x63\x74", "\x6C\x69\x6E\x65\x4A\x6F\x69\x6E", "\x62\x75\x74\x74", "\x23\x66\x66\x66\x66\x30\x30", "\x23\x66\x66\x38\x38\x30\x30", "\x62\x65\x67\x69\x6E\x50\x61\x74\x68", "\x71\x75\x61\x64\x72\x61\x74\x69\x63\x43\x75\x72\x76\x65\x54\x6F", "\x23\x30\x30\x30\x30\x30\x30\x32\x32", "\x70\x6C\x61\x74\x65", "\x25\x20", "\xE2\u20AC\u201C\x20", "\x23\x30\x30\x30\x30\x30\x30\x36\x36", "\x62\x65\x73\x74\x54\x78\x74", "\x20", "\x23\x30\x30\x30\x30\x30\x30\x38\x38", "\x23\x66\x66\x66\x66\x66\x66\x63\x63", "\x75\x70\x64\x61\x74\x65\x4D\x65\x74\x72\x69\x63\x73", "\x75\x70\x64\x61\x74\x65\x45\x6E\x64\x54\x69\x6D\x65", "\x75\x70\x64\x61\x74\x65\x53\x74\x61\x72\x74\x54\x69\x6D\x65", "\x72\x65\x6E\x64\x65\x72\x45\x6E\x64\x54\x69\x6D\x65", "\x72\x65\x6E\x64\x65\x72\x53\x74\x61\x72\x74\x54\x69\x6D\x65", "\x66\x70\x73", "\x75\x74", "\x61\x69\x74", "\x73\x74", "\x72\x74", "\x69\x6E\x66\x6F", "\x63\x68\x65\x63\x6B\x53\x65\x67\x6D\x65\x6E\x74\x73", "\x72\x65\x74\x75\x72\x6E\x73", "\x69\x6E\x64\x65\x78", "\x73\x74\x61\x72\x74\x54", "\x65\x6E\x64\x54", "\x73\x74\x61\x72\x74\x50\x6F\x69\x6E\x74", "\x65\x6E\x64\x50\x6F\x69\x6E\x74", "\x6C\x6F\x6F\x70", "\x62\x6C\x61\x63\x6B", "\x6F\x6E\x6C\x6F\x61\x64", "\x72\x65\x70\x65\x61\x74", "\x63\x72\x65\x61\x74\x65\x50\x61\x74\x74\x65\x72\x6E", "\x63\x72\x65\x61\x74\x65\x53\x56\x47\x4D\x61\x74\x72\x69\x78", "\x73\x65\x74\x54\x72\x61\x6E\x73\x66\x6F\x72\x6D", "\x73\x72\x63", "\x75\x72\x6C", "\x6C\x61\x79\x65\x72\x73", "\x61\x76\x61\x69\x6C\x61\x62\x6C\x65", "\x75\x73\x65\x64", "\x64\x65\x66\x61\x75\x6C\x74", "\u0110\u2014\u0110\xB0\u0110\u017C\u0110\xB0\u0143\x81\x20\u0143\x81\u0110\u015F\u0110\xB8\u0110\u02DD\u0110\u013E\u0110\u02DB\x20\u0110\xB8\u0143\x81\u0143\u2021\u0110\xB5\u0143\u20AC\u0110\u017C\u0110\xB0\u0110\u02DD", "\x70\x61\x70\x65\x72\x32\x5F\x6B\x65\x79\x62\x6F\x61\x72\x64\x5F\x6D\x6F\x64\x65\x32", "\x74\x72\x75\x65", "\x0A", "\x44\x65\x61\x64\x4D\x6F\x72\x6F\x73\x65\x0A\x6F\x6C\x64\x5F\x64\x65\x6D\x6F\x6E\x0A\x66\x6F\x78\x0A\x44\x65\x46\x72\x65\x65\x5A\x65\x0A\x47\x6F\x53\x65\x65\x6B\x0A\x4B\x65\x79\x70\x6C\x65\x78\x0A\x44\x61\x72\x6B\x66\x75\x72\x79\x0A\x46\x75\x6E\x6E\x79\x77\x61\x79\x0A\x42\x4C\x41\x43\x4B\x5F\x50\x52\x49\x4E\x43\x45\x0A\x5B\x42\x69\x67\x42\x6F\x73\x73\x5D\x53\x68\x61\x64\x69\x42\x6F\x6F\x0A\x44\x69\x7A\x7A\x65\x72\x0A\x4B\x41\x52\x41\x54\x45\x4C\x0A\x48\x6F\x77\x6C\x75\x78\x0A\x4C\x69\x67\x68\x74\x5F\x53\x6F\x75\x6C\x0A\x32\x66\x61\x62\x34\x75\x0A\x42\x6F\x4F\x54\x0A\x4D\x72\x4B\x61\x74\x32\x30\x31\x37\x0A\x53\x6B\x75\x6C\x4C\x0A\x43\x6D\x65\x54\x61\x6E\x6F\x34\x4B\x61\x0A\x66\x6C\x61\x73\x68\x0A\x68\x31\x6D\x65\x33\x72\x61\x0A\x48\x6F\x77\x61\x72\x64\x0A\x69\x5F\x50\x72\x6F\x0A\x72\x65\x64\x5F\x64\x65\x76\x69\x6C\x0A\x62\x65\x73\x74\x5F\x6F\x66\x5F\x74\x68\x65\x5F\x62\x65\x73\x74\x0A\x62\x6C\x6F\x77\x5F\x63\x72\x61\x7A\x79\x20\x0A\x66\x61\x63\x65\x5F\x6F\x66\x5F\x76\x65\x6E\x67\x65\x61\x6E\x63\x65\x0A\x47\x6C\x61\x6D\x62\x69\x74\x20\x0A\x4D\x41\x53\x54\x45\x52\x5F\x47\x52\x49\x46\x0A\x4D\x72\x2E\x42\x79\x42\x6C\x49\x6B\x0A\x6E\x31\x63\x65\x5F\x44\x61\x79\x5A\x0A\x52\x61\x6E\x74\x6F\x6D\x0A\x41\x62\x6F\x76\x65\x20\x44\x61\x65\x6D\x6F\x6E\x73\x0A\x63\x6F\x6D\x70\x61\x6E\x79\x5F\x54\x48\x45\x5F\x42\x65\x73\x74\x0A\x44\x61\x6E\x69\x65\x0A\x64\x61\x72\x6B\x6C\x69\x67\x68\x74\x0A\x44\x61\x78\x6D\x61\x75\x74\x0A\x64\x69\x61\x62\x6C\x6F\x0A\x67\x72\x65\x61\x74\x5F\x6D\x61\x6E\x0A\x6B\x69\x6C\x6C\x65\x72\x5F\x69\x6E\x6E\x6F\x74\x68\x69\x6E\x67\x0A\x4E\x69\x78\x0A\x56\x61\x6C\x65\x74\x74\x0A\x44\x61\x72\x6B\x41\x6E\x67\x65\x6C\x4B\x61\x65\x6C\x0A\x64\x75\x65\x6C\x69\x73\x74\x0A\x69\x5F\x7A\x61\x64\x72\x6F\x74\x0A\x4D\x6F\x6E\x73\x74\x65\x72\x5F\x45\x6E\x65\x72\x67\x79\x0A\x4D\x72\x2E\x57\x69\x6E\x73\x74\x6F\x6E\x0A\x52\x61\x69\x6E\x64\x72\x6F\x70\x73\x0A\x53\x75\x6D\x65\x72\x62\x72\x61\x75\x6D\x0A\x54\x65\x72\x6D\x69\x74\x0A\x54\x49\x54\x41\x4E\x0A\x57\x4F\x4F\x4F\x6C\x66\x0A\x41\x56\x53\x54\x52\x41\x4C\x0A\x42\x61\x64\x4C\x69\x6B\x65\x0A\x42\x75\x72\x69\x0A\x63\x6F\x70\x5F\x7A\x6F\x6D\x62\x69\x65\x0A\x64\x65\x73\x74\x72\x6F\x79\x65\x72\x5F\x66\x6F\x72\x5F\x75\x73\x0A\x45\x4B\x45\x4E\x0A\x45\x6B\x73\x6E\x65\x74\x0A\x46\x72\x6F\x73\x74\x6F\x72\x69\x6B\x0A\x67\x68\x6F\x73\x74\x5F\x6F\x66\x5F\x66\x65\x61\x72\x0A\x48\x6F\x74\x7A\x61\x72\x7A\x69\x6D\x0A\x6A\x31\x31\x31\x6D\x0A\x4B\x61\x65\x6C\x0A\x4B\x69\x6B\x45\x54\x0A\x34\x43\x48\x41\x4E\x0A\x50\x49\x4B\x41\x42\x55\x0A\x39\x47\x41\x47\x0A\x61\x75\x73\x74\x72\x61\x6C\x69\x61\x0A\x61\x75\x73\x74\x72\x69\x61\x0A\x61\x79\x79\x6C\x6D\x61\x6F\x0A\x62\x61\x69\x74\x0A\x62\x61\x6E\x67\x6C\x61\x64\x65\x73\x68\x0A\x62\x65\x6C\x67\x69\x75\x6D\x0A\x62\x6F\x73\x6E\x69\x61\x0A\x62\x6F\x74\x73\x77\x61\x6E\x61\x0A\x62\x72\x61\x7A\x69\x6C\x0A\x62\x75\x6C\x67\x61\x72\x69\x61\x0A\x63\x61\x6D\x62\x6F\x64\x69\x61\x0A\x63\x61\x6E\x61\x64\x61\x0A\x63\x68\x69\x6C\x65\x0A\x63\x68\x69\x6E\x61\x0A\x63\x69\x61\x0A\x63\x6F\x6E\x66\x65\x64\x65\x72\x61\x74\x65\x0A\x63\x72\x6F\x61\x74\x69\x61\x0A\x64\x65\x6E\x6D\x61\x72\x6B\x0A\x65\x61\x0A\x65\x61\x72\x74\x68\x0A\x65\x73\x74\x6F\x6E\x69\x61\x0A\x65\x75\x72\x6F\x70\x65\x61\x6E\x75\x6E\x69\x6F\x6E\x0A\x66\x61\x63\x65\x70\x75\x6E\x63\x68\x0A\x66\x65\x6D\x69\x6E\x69\x73\x6D\x0A\x66\x69\x6E\x6C\x61\x6E\x64\x0A\x66\x72\x61\x6E\x63\x65\x0A\x67\x65\x72\x6D\x61\x6E\x65\x6D\x70\x69\x72\x65\x0A\x67\x65\x72\x6D\x61\x6E\x79\x0A\x67\x72\x65\x65\x63\x65\x0A\x68\x6F\x6E\x67\x6B\x6F\x6E\x67\x0A\x68\x75\x6E\x67\x61\x72\x79\x0A\x69\x6E\x64\x69\x61\x0A\x69\x6E\x64\x69\x61\x6E\x61\x0A\x69\x6E\x64\x6F\x6E\x65\x73\x69\x61\x0A\x69\x72\x61\x6E\x0A\x69\x72\x61\x71\x0A\x69\x72\x65\x6C\x61\x6E\x64\x0A\x69\x74\x61\x6C\x79\x0A\x6A\x61\x6D\x61\x69\x63\x61\x0A\x6A\x61\x70\x61\x6E\x0A\x6B\x63\x0A\x6C\x61\x74\x76\x69\x61\x0A\x6C\x69\x74\x68\x75\x61\x6E\x69\x61\x0A\x6C\x75\x78\x65\x6D\x62\x6F\x75\x72\x67\x0A\x6D\x61\x6C\x64\x69\x76\x61\x73\x0A\x6D\x61\x74\x72\x69\x61\x72\x63\x68\x79\x0A\x6D\x65\x78\x69\x63\x6F\x0A\x6D\x6F\x6F\x6E\x0A\x6E\x61\x7A\x69\x0A\x6E\x65\x74\x68\x65\x72\x6C\x61\x6E\x64\x73\x0A\x6E\x69\x67\x65\x72\x69\x61\x0A\x6E\x6F\x72\x74\x68\x6B\x6F\x72\x65\x61\x0A\x6E\x6F\x72\x77\x61\x79\x0A\x6F\x72\x69\x67\x69\x6E\x0A\x70\x61\x6B\x69\x73\x74\x61\x6E\x0A\x70\x61\x74\x72\x69\x61\x72\x63\x68\x79\x0A\x70\x65\x72\x75\x0A\x70\x65\x77\x64\x69\x65\x70\x69\x65\x0A\x70\x69\x63\x63\x6F\x6C\x6F\x0A\x70\x6F\x6C\x61\x6E\x64\x0A\x70\x6F\x72\x74\x75\x67\x61\x6C\x0A\x70\x72\x6F\x64\x6F\x74\x61\x0A\x71\x69\x6E\x67\x64\x79\x6E\x61\x73\x74\x79\x0A\x71\x75\x65\x62\x65\x63\x0A\x72\x65\x64\x64\x69\x74\x0A\x72\x75\x73\x73\x69\x61\x0A\x73\x61\x6E\x69\x6B\x0A\x73\x61\x74\x61\x6E\x69\x73\x74\x0A\x73\x65\x61\x6C\x61\x6E\x64\x0A\x73\x6F\x75\x74\x68\x6B\x6F\x72\x65\x61\x0A\x73\x70\x61\x69\x6E\x0A\x73\x74\x61\x6C\x69\x6E\x0A\x73\x74\x65\x61\x6D\x0A\x73\x77\x65\x64\x65\x6E\x0A\x73\x77\x69\x74\x7A\x65\x72\x6C\x61\x6E\x64\x0A\x74\x61\x69\x77\x61\x6E\x0A\x74\x65\x78\x61\x73\x0A\x74\x68\x61\x69\x6C\x61\x6E\x64\x0A\x74\x73\x61\x72\x69\x73\x74\x72\x75\x73\x73\x69\x61\x0A\x74\x75\x6D\x62\x6C\x72\x0A\x75\x6B\x72\x61\x69\x6E\x65\x0A\x75\x6E\x69\x74\x65\x64\x6B\x69\x6E\x67\x64\x6F\x6D\x0A\x75\x73\x61\x0A\x75\x73\x73\x72\x0A\x76\x69\x6E\x65\x73\x61\x75\x63\x65\x0A\x79\x61\x72\x61\x6E\x61\x69\x6B\x61\x0A\x74\x75\x6D\x62\x6C\x72\x0A\x68\x6F\x6E\x67\x6B\x6F\x6E\x67\x0A\x4B\x69\x6C\x6C\x65\x72\x47\x61\x6D\x65\x72\x0A\x4C\x69\x6D\x75\x7A\x69\x6E\x0A\x6D\x61\x67\x65\x0A\x4D\x43\x47\x61\x4D\x65\x52\x0A\x4D\x72\x5F\x48\x65\x74\x0A\x4E\x61\x64\x6F\x72\x6E\x73\x4D\x6F\x6E\x73\x74\x65\x72\x73\x0A\x6E\x65\x72\x6F\x0A\x6F\x75\x74\x63\x61\x73\x74\x65\x72\x0A\x53\x74\x65\x65\x70\x43\x61\x74\x0A\x54\x55\x43\x41\x0A\x75\x72\x62\x61\x6E\x5F\x68\x75\x6E\x74\x65\x72\x0A\x76\x69\x72\x74\x75\x61\x6C\x5F\x6C\x6F\x72\x64\x0A\x77\x65\x72\x74\x79\x69\x0A\x57\x69\x6E\x73\x74\x6F\x6E\x4C\x69\x67\x68\x74\x0A\x57\x6F\x4A\x44\x6F\x6F\x0A\x41\x72\x74\x65\x6D\x61\x64\x0A\x43\x6C\x79\x64\x65\x4B\x61\x75\x74\x7A\x0A\x42\x61\x72\x6E\x65\x79\x0A\x52\x68\x6F\x64\x61\x50\x69\x6E\x67\x0A\x53\x68\x61\x72\x6C\x61\x50\x72\x6F\x70\x65\x73\x0A\x4E\x61\x6E\x63\x69\x54\x79\x6E\x65\x72\x0A\x49\x6C\x61\x57\x6F\x72\x6D\x0A\x53\x65\x62\x61\x73\x74\x69\x61\x6E\x52\x61\x77\x6C\x69\x6E\x73\x6F\x6E\x0A\x43\x72\x61\x69\x67\x46\x6C\x75\x72\x79\x0A\x45\x73\x74\x65\x62\x61\x6E\x42\x72\x65\x68\x6D\x0A\x44\x65\x62\x65\x72\x61\x56\x61\x6E\x63\x75\x72\x65\x6E\x0A\x54\x61\x62\x69\x74\x68\x61\x4F\x6C\x69\x76\x69\x65\x72\x69\x0A\x54\x72\x69\x73\x68\x61\x4B\x69\x6D\x62\x61\x6C\x6C\x0A\x4D\x69\x6C\x61\x67\x72\x6F\x73\x48\x79\x6C\x65\x72\x0A\x43\x69\x6E\x64\x65\x72\x65\x6C\x6C\x61\x47\x65\x72\x73\x6F\x6E\x0A\x46\x72\x61\x6E\x42\x61\x6C\x64\x72\x69\x64\x67\x65\x0A\x4D\x65\x6C\x69\x73\x61\x42\x72\x6F\x63\x6B\x0A\x47\x61\x79\x6E\x65\x6C\x6C\x65\x53\x69\x6D\x6D\x6F\x6E\x64\x73\x0A\x45\x74\x74\x61\x4D\x69\x72\x61\x62\x65\x6C\x6C\x61\x0A\x4C\x61\x76\x65\x72\x61\x4C\x61\x62\x72\x65\x63\x71\x75\x65\x0A\x42\x75\x64\x4E\x6F\x72\x6D\x61\x6E\x64\x0A\x45\x6C\x69\x61\x73\x53\x68\x65\x72\x77\x6F\x6F\x64\x0A\x4A\x61\x63\x6B\x70\x6F\x74\x0A\x53\x65\x6E\x73\x61\x74\x69\x6F\x6E\x0A\x43\x68\x75\x63\x6B\x0A\x53\x6F\x6F\x74\x73\x0A\x54\x68\x65\x53\x61\x69\x6E\x74\x0A\x49\x43\x45\x6D\x61\x6E\x0A\x4D\x69\x72\x61\x63\x6C\x65\x53\x6E\x6F\x6F\x70\x79\x0A\x42\x61\x68\x61\x72\x74\x65\x74\x0A\x42\x69\x6F\x74\x61\x72\x79\x0A\x48\x61\x6D\x6D\x65\x72\x38\x35\x0A\x42\x69\x7A\x63\x61\x72\x69\x74\x0A\x42\x6C\x61\x63\x6B\x65\x6E\x74\x61\x0A\x42\x75\x72\x6B\x65\x6C\x73\x74\x72\x69\x6E\x0A\x42\x75\x72\x6E\x74\x53\x65\x65\x6E\x0A\x43\x68\x61\x72\x69\x61\x6E\x61\x0A\x67\x6F\x6C\x64\x66\x69\x6E\x67\x65\x72\x0A\x43\x6F\x6E\x66\x69\x64\x65\x6E\x74\x48\x65\x6C\x70\x0A\x43\x6F\x70\x69\x63\x6F\x6E\x63\x0A\x44\x65\x6D\x6F\x63\x6F\x6D\x61\x6E\x0A\x47\x61\x61\x72\x74\x65\x6C\x79\x0A\x47\x65\x6E\x61\x6E\x74\x72\x6F\x0A\x47\x6C\x69\x74\x7A\x4D\x63\x47\x65\x6E\x69\x75\x73\x0A\x4A\x75\x6C\x69\x61\x74\x75\x0A\x4B\x61\x6C\x73\x74\x61\x78\x69\x0A\x4B\x65\x79\x6D\x61\x74\x72\x0A\x4B\x72\x65\x64\x69\x63\x6F\x6E\x0A\x4C\x75\x76\x47\x75\x72\x6C\x79\x0A\x4D\x61\x73\x74\x65\x72\x61\x6E\x63\x61\x0A\x4D\x65\x64\x69\x61\x42\x6F\x6C\x74\x0A\x4D\x65\x65\x6D\x75\x73\x65\x74\x0A\x4D\x6F\x6E\x73\x74\x65\x72\x49\x6E\x66\x6F\x72\x6D\x65\x72\x0A\x4F\x63\x63\x75\x69\x66\x66\x75\x0A\x4F\x6E\x6E\x69\x74\x61\x6C\x6C\x0A\x52\x6F\x64\x65\x6F\x6E\x65\x76\x65\x64\x6F\x0A\x53\x61\x6E\x64\x42\x6C\x6F\x6E\x64\x65\x46\x75\x6C\x6C\x79\x0A\x53\x68\x69\x70\x6E\x65\x61\x73\x65\x0A\x53\x6C\x79\x70\x65\x63\x74\x6C\x65\x0A\x53\x70\x69\x6E\x66\x6F\x6E\x65\x78\x75\x0A\x41\x64\x6F\x63\x61\x72\x6C\x69\x0A\x41\x6E\x67\x6C\x6F\x73\x69\x0A\x53\x69\x6D\x62\x61\x0A\x41\x75\x65\x74\x6F\x6E\x62\x72\x0A\x42\x61\x6E\x73\x68\x66\x65\x6C\x69\x0A\x51\x57\x45\x52\x54\x0A\x42\x65\x7A\x65\x71\x75\x61\x63\x69\x0A\x42\x69\x7A\x61\x72\x72\x65\x62\x6F\x62\x77\x0A\x42\x69\x7A\x61\x72\x72\x65\x77\x6F\x0A\x42\x6C\x65\x6E\x65\x74\x72\x61\x0A\x42\x6F\x6F\x74\x58\x62\x6F\x78\x53\x74\x65\x69\x6E\x0A\x42\x72\x61\x64\x6C\x65\x79\x46\x69\x6E\x65\x73\x74\x0A\x43\x65\x74\x69\x63\x52\x61\x76\x65\x6E\x0A\x43\x68\x75\x6E\x6B\x79\x4B\x6C\x75\x67\x0A\x44\x61\x69\x6C\x69\x65\x73\x48\x69\x67\x68\x0A\x44\x72\x61\x76\x65\x6E\x63\x79\x62\x65\x0A\x46\x61\x72\x65\x72\x53\x61\x69\x79\x61\x6E\x0A\x47\x61\x62\x72\x69\x6E\x67\x0A\x48\x61\x6C\x63\x79\x74\x65\x63\x68\x0A\x48\x65\x6D\x69\x6E\x65\x70\x65\x0A\x48\x65\x72\x61\x6C\x64\x68\x61\x6D\x61\x0A\x49\x6D\x61\x67\x65\x6E\x65\x0A\x4C\x6F\x6C\x61\x6E\x64\x65\x78\x74\x65\x0A\x4C\x75\x63\x65\x62\x61\x79\x6E\x0A\x4D\x61\x74\x72\x6F\x6E\x65\x72\x0A\x4D\x65\x64\x69\x75\x6D\x62\x62\x65\x6E\x0A\x4D\x6F\x66\x66\x69\x63\x61\x6E\x6B\x69\x0A\x4E\x61\x74\x65\x69\x6E\x76\x65\x6C\x6F\x0A\x54\x49\x4D\x42\x45\x52\x4C\x41\x4B\x45\x0A\x4E\x65\x73\x73\x44\x69\x64\x64\x79\x0A\x50\x6C\x61\x74\x69\x6E\x75\x6D\x54\x72\x69\x70\x70\x69\x6E\x0A\x74\x68\x65\x76\x69\x6B\x69\x6E\x67\x0A\x50\x6C\x75\x73\x65\x64\x67\x65\x0A\x52\x61\x65\x74\x73\x74\x61\x6C\x79\x64\x61\x0A\x4A\x75\x73\x74\x69\x6E\x53\x74\x72\x6F\x6D\x62\x65\x72\x67\x0A\x52\x65\x62\x65\x63\x61\x53\x65\x6E\x6E\x0A\x52\x6F\x78\x79\x0A\x4E\x65\x69\x6C\x0A\x4D\x61\x72\x69\x61\x0A\x57\x61\x72\x72\x65\x6E\x0A\x47\x72\x61\x63\x65\x0A\x57\x69\x6C\x6C\x69\x61\x6D\x0A\x4A\x61\x6E\x65\x0A\x56\x61\x6E\x65\x73\x73\x61\x0A\x4C\x69\x73\x61\x0A\x53\x74\x65\x70\x68\x61\x6E\x69\x65\x0A\x44\x69\x64\x69\x0A\x42\x6F\x72\x69\x73\x0A\x52\x75\x74\x68\x0A\x4C\x65\x6F\x6E\x61\x72\x64\x0A\x4A\x61\x63\x6B\x0A\x43\x61\x72\x6F\x6C\x69\x6E\x65\x0A\x53\x65\x62\x61\x73\x74\x69\x61\x6E\x0A\x43\x6F\x6E\x6E\x6F\x72\x0A\x49\x61\x6E\x0A\x54\x4F\x4D\x41\x53\x0A\x53\x75\x65\x0A\x46\x4F\x58\x0A\x44\x79\x6C\x61\x6E\x0A\x4C\x69\x73\x61\x0A\x47\x72\x61\x63\x65\x0A\x4A\x61\x62\x62\x61\x44\x61\x62\x62\x61\x0A\x4A\x65\x6E\x6E\x69\x66\x65\x72\x0A\x42\x65\x6E\x6A\x61\x6D\x69\x6E\x0A\x50\x69\x50\x50\x61\x0A\x53\x74\x65\x76\x65\x6E\x0A\x4A\x6F\x65\x0A\x4B\x4E\x69\x6E\x65\x0A\x4B\x65\x76\x69\x6E\x0A\x43\x61\x72\x6F\x6C\x69\x6E\x65\x0A\x4D\x63\x46\x6C\x75\x72\x72\x79\x0A\x4B\x61\x74\x68\x65\x72\x69\x6E\x65\x0A\x4C\x65\x61\x68\x0A\x49\x72\x65\x6E\x65\x0A\x4F\x77\x65\x6E\x0A\x55\x6E\x61\x0A\x47\x61\x62\x72\x69\x65\x6C\x6C\x65\x53\x6C\x61\x74\x65\x72\x0A\x41\x6D\x79\x46\x69\x73\x68\x65\x72\x0A\x41\x6E\x67\x65\x6C\x61\x47\x72\x61\x6E\x74\x0A\x41\x6C\x69\x73\x6F\x6E\x4F\x67\x64\x65\x6E\x0A\x44\x65\x61\x64\x73\x68\x6F\x74\x0A\x4E\x69\x74\x72\x6F\x0A\x54\x72\x65\x76\x6F\x72\x42\x6C\x61\x63\x6B\x0A\x4B\x61\x74\x68\x65\x72\x69\x6E\x65\x50\x75\x6C\x6C\x6D\x61\x6E\x0A\x4F\x6C\x69\x76\x65\x72\x4D\x61\x63\x44\x6F\x6E\x61\x6C\x64\x0A\x41\x76\x61\x56\x61\x75\x67\x68\x61\x6E\x0A\x4A\x65\x6E\x6E\x69\x66\x65\x72\x57\x68\x69\x74\x65\x0A\x57\x61\x72\x72\x65\x6E\x50\x65\x74\x65\x72\x73\x0A\x4C\x65\x61\x68\x43\x61\x6D\x65\x72\x6F\x6E\x0A\x41\x6C\x69\x73\x6F\x6E\x42\x65\x72\x72\x79\x0A\x4B\x65\x69\x74\x68\x42\x75\x63\x6B\x6C\x61\x6E\x64\x0A\x4A\x75\x6C\x69\x61\x6E\x4D\x61\x63\x6B\x61\x79\x0A\x4E\x61\x74\x61\x6C\x69\x65\x53\x61\x6E\x64\x65\x72\x73\x6F\x6E\x0A\x76\x69\x5A\x69\x6F\x6E\x0A\x4A\x6F\x73\x68\x75\x61\x50\x65\x61\x6B\x65\x0A\x4B\x65\x69\x74\x68\x44\x6F\x77\x64\x0A\x48\x6F\x74\x64\x6F\x67\x0A\x4A\x61\x6D\x65\x73\x4C\x61\x6D\x62\x65\x72\x74\x0A\x4A\x61\x6E\x42\x6F\x6E\x64\x0A\x43\x6F\x6C\x69\x6E\x4D\x61\x72\x73\x68\x61\x6C\x6C\x0A\x4A\x61\x73\x6F\x6E\x52\x65\x65\x73\x0A\x46\x52\x45\x44\x0A\x4A\x61\x6E\x65\x48\x75\x67\x68\x65\x73\x0A\x4C\x65\x6F\x6E\x61\x72\x64\x4F\x6C\x69\x76\x65\x72\x0A\x48\x61\x72\x72\x79\x41\x6E\x64\x65\x72\x73\x6F\x6E\x0A\x47\x72\x61\x63\x65\x53\x6D\x69\x74\x68\x0A\x44\x65\x69\x72\x64\x72\x65\x4A\x6F\x6E\x65\x73\x0A\x41\x75\x64\x72\x65\x79\x53\x70\x72\x69\x6E\x67\x65\x72\x0A\x45\x6C\x6C\x61\x47\x72\x61\x79\x0A\x44\x6F\x6D\x69\x6E\x69\x63\x48\x61\x6D\x69\x6C\x74\x6F\x6E\x0A\x4B\x65\x69\x74\x68\x42\x6C\x61\x6B\x65\x0A\x52\x75\x74\x68\x4A\x61\x63\x6B\x73\x6F\x6E\x0A\x4D\x6F\x6C\x6C\x79\x48\x75\x64\x73\x6F\x6E\x0A\x53\x6F\x70\x68\x69\x65\x42\x65\x72\x72\x79\x0A\x43\x61\x72\x6F\x6C\x69\x6E\x65\x4C\x79\x6D\x61\x6E\x0A\x45\x6D\x6D\x61\x48\x75\x64\x73\x6F\x6E\x0A\x4A\x6F\x65\x4C\x79\x6D\x61\x6E\x0A\x4F\x6C\x69\x76\x69\x61\x50\x69\x70\x65\x72\x0A\x43\x68\x72\x69\x73\x74\x6F\x70\x68\x65\x72\x41\x6C\x6C\x61\x6E\x0A\x4D\x61\x72\x69\x61\x4B\x69\x6E\x67\x0A\x50\x69\x70\x70\x61\x53\x6C\x61\x74\x65\x72\x0A\x53\x61\x72\x61\x68\x4A\x6F\x68\x6E\x73\x74\x6F\x6E\x0A\x52\x79\x61\x6E\x57\x68\x69\x74\x65\x0A\x4A\x61\x63\x6B\x48\x69\x6C\x6C\x0A\x57\x69\x6C\x6C\x69\x61\x6D\x4D\x61\x63\x6B\x61\x79\x0A\x42\x65\x6E\x6A\x61\x6D\x69\x6E\x41\x6C\x73\x6F\x70\x0A\x41\x6D\x61\x6E\x64\x61\x52\x6F\x62\x65\x72\x74\x73\x0A\x54\x68\x6F\x6D\x61\x73\x50\x61\x72\x73\x6F\x6E\x73\x0A\x4C\x69\x61\x6D\x4D\x63\x47\x72\x61\x74\x68\x0A\x4A\x61\x6E\x48\x65\x6E\x64\x65\x72\x73\x6F\x6E\x0A\x53\x6F\x6E\x69\x61\x43\x68\x61\x70\x6D\x61\x6E\x0A\x57\x69\x6C\x6C\x69\x61\x6D\x0A\x4C\x69\x6C\x79\x0A\x50\x65\x74\x65\x72\x0A\x4B\x65\x69\x74\x68\x0A\x49\x73\x61\x61\x63\x0A\x4C\x65\x61\x68\x0A\x4D\x61\x64\x65\x6C\x65\x69\x6E\x65\x0A\x4B\x61\x72\x65\x6E\x0A\x46\x72\x61\x6E\x6B\x0A\x41\x6C\x61\x6E\x0A\x4D\x69\x63\x68\x61\x65\x6C\x0A\x52\x61\x63\x68\x65\x6C\x0A\x44\x6F\x6D\x69\x6E\x69\x63\x0A\x50\x61\x75\x6C\x0A\x4E\x69\x63\x6F\x6C\x61\x0A\x45\x6D\x69\x6C\x79\x0A\x54\x69\x6D\x0A\x62\x69\x67\x42\x45\x4E\x0A\x43\x6F\x68\x65\x6E\x0A\x47\x6F\x6F\x64\x0A\x46\x72\x61\x6E\x63\x69\x73\x0A\x4F\x64\x6F\x6D\x0A\x47\x72\x65\x65\x6E\x0A\x43\x61\x69\x6E\x0A\x54\x72\x65\x76\x69\x6E\x6F\x0A\x4C\x75\x63\x65\x72\x6F\x0A\x41\x73\x68\x6C\x65\x79\x0A\x69\x67\x6C\x6F\x6F\x0A\x64\x75\x66\x66\x65\x72\x0A\x6C\x6F\x61\x64\x65\x64\x0A\x73\x69\x63\x6B\x6E\x65\x73\x73\x0A\x67\x72\x65\x65\x74\x69\x6E\x67\x0A\x6C\x6F\x6E\x65\x6C\x79\x0A\x62\x61\x66\x66\x6C\x65\x6D\x65\x6E\x74\x0A\x74\x72\x75\x73\x74\x79\x0A\x61\x6C\x74\x65\x72\x61\x74\x69\x6F\x6E\x0A\x65\x76\x69\x6C\x0A\x73\x6F\x6C\x76\x61\x0A\x70\x65\x6E\x75\x6D\x62\x72\x61\x0A\x64\x61\x75\x70\x68\x69\x6E\x65\x0A\x61\x6C\x6C\x75\x72\x69\x6E\x67\x0A\x6C\x69\x6C\x6C\x79\x0A\x73\x74\x69\x6E\x63\x68\x61\x72\x0A\x63\x75\x62\x69\x63\x0A\x62\x6C\x61\x63\x6B\x62\x72\x6F\x6F\x6B\x0A\x72\x65\x62\x75\x66\x66\x0A\x69\x6E\x63\x6C\x69\x6E\x65\x64\x0A\x6C\x79\x6F\x6E\x0A\x73\x71\x75\x61\x73\x68\x0A\x75\x6E\x69\x71\x75\x65\x0A\x6C\x79\x6E\x65\x0A\x63\x68\x65\x77\x79\x0A\x6D\x61\x73\x74\x69\x63\x61\x74\x65\x0A\x6D\x61\x67\x6E\x65\x74\x0A\x6B\x6E\x69\x74\x0A\x69\x6E\x64\x6F\x6C\x65\x6E\x74\x0A\x73\x65\x76\x65\x72\x65\x0A\x66\x65\x73\x74\x75\x73\x0A\x74\x72\x61\x69\x6E\x0A\x69\x6E\x63\x69\x73\x69\x6F\x6E\x4B\x69\x6D\x0A\x42\x65\x61\x6E\x0A\x41\x67\x75\x69\x6C\x61\x72\x0A\x45\x72\x6E\x65\x73\x74\x6F\x0A\x43\x75\x72\x74\x69\x73\x0A\x43\x6F\x72\x74\x65\x7A\x0A\x54\x79\x73\x68\x61\x77\x6E\x0A\x42\x72\x61\x64\x79\x0A\x42\x65\x63\x6B\x65\x74\x74\x0A\x58\x61\x76\x69\x65\x72\x0A\x43\x61\x73\x6F\x6E\x0A\x42\x72\x79\x73\x6F\x6E\x0A\x53\x68\x65\x6C\x64\x6F\x6E\x0A\x50\x69\x65\x72\x63\x65\x0A\x44\x65\x73\x68\x61\x77\x6E\x0A\x41\x6E\x64\x79\x0A\x41\x61\x72\x6F\x6E\x0A\x41\x72\x6D\x61\x6E\x64\x6F\x0A\x4B\x61\x72\x73\x6F\x6E\x0A\x4B\x39\x0A\x4E\x61\x64\x69\x61\x0A\x4A\x6F\x76\x61\x6E\x0A\x45\x72\x69\x6E\x0A\x54\x65\x72\x72\x79\x0A\x47\x72\x61\x79\x73\x6F\x6E\x0A\x43\x65\x6C\x69\x61\x0A\x41\x6C\x65\x78\x7A\x61\x6E\x64\x65\x72\x0A\x43\x61\x6E\x6E\x6F\x6E\x0A\x4A\x6F\x65\x79\x0A\x53\x74\x65\x6C\x6C\x61\x0A\x47\x72\x61\x63\x69\x65\x0A\x4B\x46\x43\x4C\x4F\x56\x45\x52\x0A\x43\x68\x69\x63\x6F\x0A\x50\x72\x69\x6E\x63\x65\x0A\x4D\x6F\x63\x68\x61\x0A\x53\x63\x6F\x6F\x74\x65\x72\x0A\x43\x68\x65\x73\x74\x65\x72\x0A\x43\x6F\x63\x6F\x0A\x44\x75\x73\x74\x79\x0A\x5A\x6F\x65\x0A\x53\x6F\x63\x6B\x73\x0A\x6A\x65\x66\x66\x65\x72\x73\x6F\x6E\x0A\x69\x67\x6E\x6F\x72\x65\x0A\x61\x6C\x6C\x61\x64\x61\x6C\x65\x0A\x76\x69\x72\x74\x75\x65\x0A\x70\x72\x6F\x76\x69\x64\x65\x64\x0A\x63\x6F\x68\x65\x73\x69\x76\x65\x0A\x62\x75\x6C\x6C\x66\x69\x6E\x63\x68\x65\x0A\x63\x6F\x6D\x65\x74\x0A\x64\x69\x70\x0A\x7A\x69\x70\x70\x65\x72\x0A\x70\x6F\x73\x74\x75\x6C\x61\x74\x65\x0A\x6C\x69\x63\x6B\x0A\x62\x61\x73\x68\x66\x75\x6C\x0A\x70\x61\x73\x63\x61\x6C\x73\x0A\x72\x75\x64\x79\x0A\x67\x6C\x6F\x61\x6D\x69\x6E\x67\x0A\x63\x61\x73\x68\x65\x77\x0A\x6D\x69\x78\x63\x6C\x6F\x75\x64\x0A\x74\x72\x61\x75\x6D\x61\x74\x69\x63\x0A\x70\x72\x6F\x73\x74\x61\x74\x65\x0A\x70\x65\x61\x73\x0A\x6D\x65\x6C\x6F\x6E\x0A\x62\x75\x6C\x62\x6F\x75\x73\x0A\x67\x61\x76\x65\x6C\x0A\x6E\x75\x6D\x6E\x61\x68\x0A\x6E\x61\x76\x65\x6C\x0A\x72\x69\x76\x65\x72\x0A\x73\x61\x73\x6B\x61\x74\x6F\x6F\x6E\x0A\x63\x61\x75\x73\x65\x64\x0A\x68\x61\x72\x64\x79\x0A\x70\x61\x72\x65\x0A\x66\x65\x6D\x61\x6C\x65\x0A\x76\x6F\x6C\x75\x6E\x74\x65\x65\x72\x0A\x73\x70\x65\x63\x6B\x0A\x79\x65\x61\x72\x73\x0A\x76\x61\x6C\x69\x64\x0A\x61\x72\x6D\x70\x69\x74\x0A\x62\x6F\x62\x62\x79\x0A\x62\x6F\x6C\x68\x61\x6D\x0A\x67\x6F\x6F\x67\x6C\x65\x0A\x62\x72\x65\x6E\x6E\x61\x6E\x64\x0A\x70\x61\x73\x74\x72\x79\x0A\x77\x65\x61\x70\x6F\x6E\x0A\x63\x75\x69\x6C\x6C\x69\x6E\x0A\x64\x65\x73\x63\x65\x6E\x74\x0A\x65\x61\x73\x69\x65\x72\x0A\x6D\x6F\x72\x65\x0A\x72\x69\x73\x65\x64\x61\x6C\x65\x0A\x67\x6F\x67\x67\x6C\x65\x73\x0A\x63\x75\x74\x65\x0A\x6D\x61\x67\x65\x6C\x6C\x61\x6E\x69\x63\x0A\x72\x65\x6E\x61\x6C\x0A\x7A\x75\x6E\x79\x69\x0A\x45\x76\x65\x72\x79\x50\x72\x69\x76\x61\x74\x65\x0A\x43\x68\x69\x70\x6D\x75\x6E\x6B\x54\x68\x72\x65\x61\x74\x0A\x4C\x65\x61\x66\x79\x46\x6F\x72\x65\x66\x6F\x6F\x74\x0A\x53\x65\x62\x61\x73\x74\x69\x61\x6E\x45\x78\x78\x6F\x6E\x0A\x48\x75\x63\x6B\x46\x61\x69\x73\x61\x6C\x61\x62\x61\x64\x0A\x57\x68\x65\x65\x6C\x63\x68\x61\x69\x72\x48\x61\x64\x61\x72\x0A\x42\x75\x6C\x69\x6D\x69\x61\x4D\x69\x6C\x6B\x0A\x45\x69\x64\x65\x72\x53\x74\x61\x6C\x6C\x69\x6F\x6E\x0A\x4D\x6F\x72\x6F\x6E\x69\x63\x42\x75\x63\x6B\x69\x6E\x67\x68\x61\x6D\x73\x68\x69\x72\x65\x0A\x50\x61\x79\x42\x69\x66\x66\x0A\x48\x69\x6C\x6C\x73\x62\x6F\x72\x6F\x75\x67\x68\x45\x6E\x76\x65\x6C\x6F\x70\x65\x0A\x41\x6C\x6C\x69\x61\x6E\x7A\x52\x68\x61\x70\x73\x6F\x64\x79\x0A\x41\x72\x73\x65\x45\x6E\x74\x65\x72\x61\x6C\x0A\x42\x6F\x72\x6F\x6E\x52\x61\x64\x69\x61\x6E\x74\x0A\x41\x72\x63\x68\x69\x76\x65\x55\x6E\x74\x72\x75\x65\x0A\x50\x6C\x61\x73\x74\x69\x63\x53\x70\x65\x65\x63\x68\x0A\x4F\x66\x66\x69\x63\x65\x72\x57\x69\x6C\x74\x73\x68\x69\x72\x65\x0A\x42\x75\x6E\x67\x42\x75\x7A\x7A\x61\x72\x64\x0A\x4D\x6F\x73\x63\x6F\x77\x53\x74\x65\x6C\x6C\x61\x72\x0A\x54\x72\x69\x61\x6C\x73\x48\x65\x61\x72\x74\x79\x0A\x4D\x6F\x64\x65\x6C\x48\x6F\x72\x73\x65\x0A\x42\x6F\x6F\x74\x73\x47\x72\x69\x6D\x61\x63\x69\x6E\x67\x0A\x53\x68\x69\x72\x61\x4D\x6F\x73\x65\x64\x61\x6C\x65\x0A\x4C\x65\x6F\x70\x61\x72\x64\x43\x6C\x61\x70\x70\x65\x72\x0A\x53\x6B\x61\x74\x65\x72\x73\x53\x74\x61\x72\x73\x0A\x43\x61\x72\x61\x6D\x65\x6C\x69\x7A\x65\x53\x74\x72\x61\x77\x73\x0A\x41\x6E\x67\x6F\x6C\x61\x6E\x56\x69\x6E\x6F\x6D\x61\x64\x65\x66\x69\x65\x64\x0A\x42\x61\x74\x74\x65\x72\x79\x53\x69\x65\x6D\x65\x6E\x73\x0A\x48\x65\x64\x67\x65\x54\x68\x6F\x6D\x70\x73\x6F\x6E\x0A\x4C\x75\x6B\x61\x49\x63\x69\x6E\x67\x0A\x4D\x69\x6D\x6F\x73\x61\x42\x72\x75\x6E\x73\x77\x69\x63\x6B\x0A\x54\x69\x6E\x46\x6F\x72\x67\x65\x74\x66\x75\x6C\x0A\x48\x75\x6D\x62\x65\x72\x48\x6F\x6F\x6B\x0A\x53\x65\x61\x67\x75\x6C\x6C\x54\x72\x75\x6D\x70\x0A\x42\x6F\x6F\x6B\x65\x72\x54\x6F\x75\x72\x69\x6E\x67\x0A\x53\x75\x67\x61\x72\x57\x61\x72\x6E\x0A\x43\x75\x73\x74\x61\x72\x64\x73\x53\x74\x72\x75\x63\x74\x75\x72\x65\x0A\x52\x75\x64\x79\x42\x61\x72\x69\x75\x6D\x0A\x45\x6C\x65\x63\x74\x72\x6F\x6C\x79\x74\x65\x44\x69\x73\x66\x69\x67\x75\x72\x65\x64\x0A\x42\x6C\x69\x67\x68\x74\x65\x72\x50\x68\x79\x73\x69\x63\x69\x73\x74\x0A\x41\x6E\x74\x6F\x6E\x69\x61\x64\x69\x41\x74\x6F\x6D\x0A\x50\x61\x63\x68\x61\x52\x75\x6C\x65\x0A\x4D\x61\x6C\x74\x79\x50\x61\x74\x63\x68\x65\x73\x0A\x48\x6F\x6E\x6F\x6C\x75\x6C\x75\x53\x77\x65\x64\x69\x73\x68\x0A\x47\x65\x6D\x47\x6C\x65\x61\x6D\x69\x6E\x67\x0A\x41\x73\x73\x6F\x63\x69\x61\x74\x65\x64\x54\x68\x6F\x73\x65\x0A\x41\x66\x74\x65\x72\x43\x6F\x69\x6E\x74\x72\x65\x61\x75\x0A\x45\x79\x65\x73\x50\x69\x65\x72\x72\x65\x0A\x53\x74\x65\x77\x61\x72\x74\x47\x65\x6C\x73\x0A\x41\x72\x65\x74\x65\x50\x75\x70\x70\x79\x0A\x46\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x54\x72\x6F\x70\x68\x69\x63\x0A\x4D\x61\x69\x6C\x57\x69\x6C\x6C\x6F\x77\x0A\x53\x63\x61\x75\x70\x46\x72\x6F\x73\x74\x79\x0A\x5A\x61\x72\x61\x42\x69\x70\x65\x64\x61\x6C\x0A\x43\x68\x65\x61\x70\x53\x63\x61\x66\x65\x6C\x6C\x0A\x44\x65\x76\x6F\x6E\x59\x6F\x6C\x6B\x0A\x53\x6B\x65\x67\x43\x6F\x68\x65\x73\x69\x76\x65\x0A\x43\x72\x69\x63\x6B\x65\x74\x42\x61\x73\x68\x66\x75\x6C\x0A\x43\x6F\x63\x6F\x61\x50\x75\x63\x6B\x0A\x44\x65\x63\x61\x74\x68\x6C\x6F\x6E\x49\x73\x63\x68\x65\x6D\x69\x63\x0A\x4F\x66\x74\x53\x6E\x6F\x74\x74\x6F\x72\x0A\x43\x68\x65\x65\x70\x4E\x65\x77\x6C\x79\x6E\x0A\x53\x77\x69\x6D\x47\x72\x69\x6C\x6C\x0A\x42\x61\x75\x62\x6C\x65\x53\x79\x6D\x62\x6F\x6C\x69\x63\x0A\x41\x73\x74\x72\x6F\x6E\x6F\x6D\x65\x72\x53\x70\x61\x6D\x0A\x56\x61\x72\x6C\x6F\x74\x4C\x65\x61\x6C\x74\x0A\x53\x65\x6E\x73\x6F\x72\x53\x71\x75\x61\x6D\x69\x73\x68\x0A\x4B\x65\x79\x54\x65\x63\x68\x6E\x65\x74\x69\x75\x6D\x0A\x43\x72\x75\x6D\x6D\x79\x51\x75\x69\x72\x6B\x79\x0A\x56\x69\x6E\x65\x50\x6C\x61\x6E\x65\x0A\x57\x61\x74\x65\x72\x73\x6B\x69\x42\x6C\x69\x6E\x64\x0A\x4F\x72\x64\x69\x6E\x61\x74\x65\x43\x72\x6F\x77\x6E\x0A\x53\x70\x6F\x74\x54\x65\x6E\x73\x65\x0A\x46\x75\x6D\x65\x56\x69\x6E\x65\x0A\x47\x6C\x61\x73\x73\x77\x61\x72\x65\x43\x68\x65\x72\x72\x69\x65\x73\x0A\x50\x68\x65\x6E\x6F\x6D\x65\x6E\x6F\x6E\x57\x69\x6C\x6C\x69\x65\x64\x0A\x50\x61\x70\x70\x75\x73\x57\x61\x7A\x7A\x65\x64\x0A\x46\x69\x6C\x74\x65\x72\x53\x70\x61\x63\x65\x0A\x48\x79\x70\x6E\x6F\x73\x69\x73\x53\x6F\x63\x69\x61\x62\x6C\x65\x0A\x47\x61\x66\x66\x45\x6E\x64\x65\x72\x0A\x54\x6F\x72\x64\x61\x48\x65\x6C\x70\x6C\x65\x73\x73\x0A\x52\x65\x73\x65\x61\x72\x63\x68\x4D\x61\x74\x0A\x41\x6D\x70\x65\x72\x65\x48\x65\x70\x74\x61\x67\x6F\x6E\x0A\x45\x63\x6C\x69\x70\x73\x65\x42\x61\x6C\x64\x79\x0A\x4C\x6C\x69\x65\x64\x69\x44\x69\x6F\x70\x73\x69\x64\x65\x0A\x52\x6F\x63\x6B\x65\x72\x73\x47\x61\x74\x63\x6F\x6D\x62\x65\x0A\x53\x61\x62\x69\x6E\x65\x45\x73\x73\x65\x6E\x74\x69\x61\x6C\x0A\x50\x6C\x75\x74\x6F\x41\x62\x73\x75\x72\x64\x0A\x54\x61\x67\x54\x65\x73\x74\x69\x66\x79\x0A\x46\x6F\x72\x73\x77\x65\x61\x72\x4A\x6F\x73\x69\x65\x0A\x45\x71\x75\x75\x6C\x65\x75\x73\x46\x61\x6C\x74\x65\x72\x0A\x43\x68\x65\x77\x69\x65\x46\x6C\x75\x74\x68\x65\x72\x0A\x57\x6F\x6D\x62\x59\x61\x6B\x61\x6D\x61\x0A\x48\x69\x6E\x64\x65\x72\x48\x69\x67\x68\x6C\x61\x6E\x64\x0A\x42\x69\x74\x65\x53\x65\x70\x74\x75\x6D\x0A\x52\x69\x66\x6C\x65\x47\x79\x6D\x0A\x4A\x75\x6E\x65\x61\x75\x49\x6E\x62\x6F\x61\x72\x64\x0A\x54\x72\x6F\x75\x62\x61\x64\x6F\x75\x72\x43\x68\x69\x6C\x6C\x69\x6E\x67\x77\x6F\x6F\x64\x0A\x4E\x65\x6F\x67\x65\x6E\x65\x4C\x65\x63\x74\x75\x72\x65\x72\x0A\x53\x75\x6C\x6C\x69\x76\x61\x6E\x53\x74\x65\x6E\x63\x69\x6C\x73\x0A\x43\x68\x65\x65\x73\x65\x63\x61\x6B\x65\x50\x69\x74\x0A\x43\x6C\x75\x6D\x70\x55\x6E\x68\x65\x6C\x70\x66\x75\x6C\x0A\x43\x68\x65\x63\x6B\x42\x69\x67\x0A\x4C\x6F\x6C\x6C\x79\x50\x75\x6D\x70\x6B\x69\x6E\x0A\x43\x69\x74\x72\x75\x73\x79\x43\x6F\x75\x6E\x74\x6C\x65\x73\x73\x0A\x56\x61\x72\x75\x6E\x61\x52\x65\x6D\x79\x0A\x44\x69\x76\x65\x72\x67\x65\x6E\x74\x4F\x69\x6C\x73\x0A\x46\x61\x6C\x6C\x69\x6E\x67\x54\x61\x6C\x69\x73\x6B\x65\x72\x0A\x42\x6C\x61\x63\x6B\x77\x61\x74\x65\x72\x4E\x69\x66\x74\x79\x0A\x42\x72\x69\x6E\x6B\x77\x6F\x72\x74\x68\x46\x72\x61\x6E\x6B\x6C\x79\x6E\x0A\x46\x72\x65\x64\x64\x79\x50\x6F\x73\x74\x6D\x61\x6E\x0A\x43\x6C\x75\x6D\x70\x65\x72\x50\x6F\x6B\x65\x0A\x53\x6C\x6F\x70\x65\x54\x6F\x6B\x61\x68\x65\x65\x0A\x53\x74\x65\x6E\x63\x69\x6C\x73\x48\x75\x6D\x65\x0A\x4A\x69\x6A\x69\x4B\x65\x79\x0A\x41\x64\x65\x70\x74\x53\x74\x6F\x72\x65\x73\x0A\x55\x6E\x69\x63\x6F\x64\x65\x49\x67\x6E\x65\x6F\x75\x73\x0A\x4D\x65\x61\x74\x79\x4E\x75\x74\x0A\x4D\x61\x73\x6B\x53\x70\x61\x72\x6B\x0A\x46\x6F\x72\x65\x67\x6F\x69\x6E\x67\x4D\x6F\x69\x73\x74\x0A\x45\x74\x68\x69\x63\x61\x6C\x43\x6F\x6E\x66\x69\x64\x65\x6E\x74\x0A\x4F\x62\x6C\x6F\x6E\x67\x61\x74\x61\x49\x73\x72\x61\x65\x6C\x69\x0A\x47\x72\x65\x65\x6E\x41\x6C\x65\x0A\x46\x69\x62\x75\x6C\x61\x4A\x6F\x73\x73\x0A\x53\x68\x72\x75\x67\x4D\x69\x6E\x67\x65\x0A\x46\x6C\x6F\x77\x73\x57\x68\x69\x73\x70\x65\x72\x73\x0A\x41\x63\x74\x69\x76\x65\x47\x6C\x69\x73\x73\x61\x64\x65\x0A\x45\x78\x61\x6C\x74\x65\x64\x53\x70\x61\x67\x68\x65\x74\x74\x69\x0A\x4D\x65\x65\x72\x6B\x61\x74\x4D\x61\x74\x63\x68\x0A\x43\x6F\x75\x6C\x64\x48\x6F\x66\x66\x0A\x59\x61\x77\x6E\x4F\x62\x74\x75\x73\x65\x0A\x43\x72\x61\x7A\x79\x55\x6E\x6B\x6E\x6F\x77\x6E\x0A\x50\x6C\x61\x6E\x65\x6D\x6F\x54\x79\x6C\x65\x72\x0A\x43\x61\x6C\x64\x65\x72\x61\x42\x65\x61\x6E\x73\x0A\x53\x6F\x75\x6E\x64\x63\x6C\x6F\x75\x64\x4A\x61\x70\x61\x6E\x0A\x53\x65\x76\x65\x72\x61\x6C\x47\x61\x6C\x6C\x65\x64\x0A\x53\x74\x61\x72\x62\x75\x63\x6B\x73\x44\x6F\x6D\x61\x69\x6E\x0A\x45\x64\x69\x62\x6C\x65\x47\x6C\x61\x7A\x69\x65\x72\x0A\x52\x65\x73\x6F\x75\x72\x63\x65\x73\x43\x61\x70\x69\x74\x61\x6C\x0A\x4E\x69\x74\x72\x6F\x67\x65\x6E\x42\x65\x6C\x6C\x61\x0A\x46\x6C\x61\x76\x6F\x72\x66\x75\x6C\x50\x72\x6F\x74\x6F\x70\x6C\x61\x6E\x65\x74\x0A\x54\x65\x61\x63\x68\x53\x71\x75\x65\x65\x7A\x65\x0A\x4D\x65\x69\x6F\x73\x69\x73\x53\x69\x70\x68\x6F\x6E\x0A\x54\x65\x6C\x65\x70\x68\x6F\x6E\x65\x4D\x61\x72\x6C\x0A\x54\x72\x75\x6E\x64\x6C\x65\x52\x69\x74\x65\x63\x0A\x54\x68\x65\x6F\x64\x6F\x72\x65\x53\x68\x61\x6D\x72\x6F\x63\x6B\x0A\x4E\x6F\x69\x72\x4D\x65\x6C\x6F\x64\x79\x0A\x56\x61\x6E\x69\x6C\x6C\x61\x41\x72\x6D\x65\x6E\x69\x61\x6E\x0A\x48\x6F\x6E\x6B\x45\x78\x6F\x74\x69\x63\x69\x73\x6D\x0A\x4D\x61\x6E\x64\x69\x62\x6C\x65\x53\x65\x70\x73\x69\x73\x0A\x56\x65\x6E\x6F\x6D\x6F\x75\x73\x53\x69\x67\x6E\x61\x6C\x0A\x4D\x61\x6E\x75\x6B\x61\x45\x76\x61\x6C\x0A\x4C\x6F\x6F\x6B\x73\x4C\x65\x61\x76\x65\x73\x0A\x46\x72\x69\x65\x64\x49\x6E\x74\x6F\x0A\x42\x6C\x6F\x77\x54\x61\x6C\x65\x6E\x74\x65\x64\x0A\x53\x74\x75\x62\x62\x73\x48\x65\x61\x64\x70\x68\x6F\x6E\x65\x73\x0A\x57\x69\x67\x65\x6F\x6E\x4E\x65\x77\x63\x61\x73\x74\x6C\x65\x0A\x4C\x6F\x61\x64\x48\x61\x6D\x73\x74\x65\x72\x0A\x50\x69\x6E\x6B\x69\x65\x53\x61\x69\x6E\x74\x0A\x45\x75\x70\x68\x6F\x6E\x69\x75\x6D\x52\x65\x64\x75\x6E\x64\x61\x6E\x74\x0A\x53\x61\x62\x64\x65\x6E\x52\x6F\x61\x64\x0A\x53\x75\x63\x63\x65\x73\x73\x41\x70\x61\x63\x68\x65\x0A\x50\x61\x74\x65\x72\x61\x43\x69\x74\x72\x69\x63\x0A\x42\x61\x6C\x6E\x61\x67\x6F\x77\x6E\x51\x75\x69\x76\x65\x72\x0A\x47\x61\x6D\x62\x69\x61\x6E\x48\x61\x72\x74\x66\x6F\x72\x64\x0A\x52\x69\x64\x69\x6E\x67\x4E\x6F\x73\x74\x61\x6C\x67\x69\x63\x0A\x41\x6D\x62\x75\x73\x68\x46\x6C\x65\x78\x0A\x42\x72\x65\x74\x6F\x6E\x43\x6F\x6D\x6D\x6F\x6E\x0A\x53\x70\x6F\x74\x21\x46\x69\x6E\x65\x0A\x50\x6C\x61\x69\x6E\x74\x69\x76\x65\x50\x72\x69\x64\x65\x0A\x44\x69\x70\x68\x74\x68\x6F\x6E\x67\x50\x72\x61\x6C\x69\x6E\x65\x0A\x53\x68\x65\x61\x72\x72\x61\x49\x6E\x66\x6C\x61\x74\x65\x0A\x57\x6F\x6C\x64\x73\x4C\x65\x6E\x6E\x6F\x6E\x0A\x53\x6F\x72\x64\x69\x6E\x69\x4D\x65\x61\x74\x68\x65\x61\x64\x0A\x53\x6F\x72\x64\x43\x65\x67\x69\x64\x6F\x67\x0A\x53\x65\x6C\x66\x69\x65\x73\x57\x65\x69\x67\x68\x0A\x4F\x72\x67\x61\x6E\x56\x69\x6C\x65\x0A\x50\x69\x6E\x63\x68\x57\x65\x69\x78\x69\x6E\x0A\x53\x61\x73\x73\x79\x46\x6C\x61\x67\x0A\x41\x6C\x62\x65\x72\x6E\x69\x44\x61\x72\x74\x0A\x42\x6F\x77\x65\x6E\x49\x6D\x6D\x65\x6E\x73\x65\x0A\x52\x75\x6C\x65\x72\x46\x6F\x63\x75\x73\x0A\x4D\x61\x67\x67\x6F\x74\x4D\x69\x6E\x65\x0A\x52\x65\x67\x75\x6C\x61\x74\x65\x49\x6E\x76\x65\x6E\x74\x69\x6F\x6E\x73\x0A\x4D\x65\x73\x68\x41\x6C\x62\x69\x74\x65\x0A\x50\x6F\x78\x41\x72\x61\x62\x65\x6C\x6C\x61\x0A\x54\x69\x6B\x69\x46\x72\x65\x64\x65\x72\x69\x63\x74\x6F\x6E\x0A\x4E\x65\x65\x64\x6C\x65\x44\x69\x61\x70\x69\x72\x0A\x47\x65\x6E\x65\x42\x6C\x75\x72\x74\x0A\x42\x69\x6E\x64\x79\x46\x6F\x6C\x6C\x6F\x77\x65\x64\x0A\x4D\x6F\x6E\x67\x6F\x6C\x69\x61\x6E\x54\x75\x72\x74\x6C\x65\x0A\x53\x65\x6E\x73\x65\x50\x72\x6F\x66\x65\x73\x73\x0A\x46\x6F\x6C\x64\x69\x6E\x67\x48\x61\x63\x6B\x69\x6E\x67\x0A\x41\x72\x73\x6F\x6E\x69\x73\x74\x43\x6C\x69\x70\x70\x69\x6E\x67\x0A\x4B\x65\x72\x72\x79\x42\x6F\x6E\x6E\x69\x65\x0A\x4D\x61\x6C\x69\x63\x69\x6F\x75\x73\x4D\x69\x6C\x69\x74\x61\x72\x79\x0A\x4D\x6F\x75\x6E\x74\x61\x69\x6E\x46\x72\x69\x76\x6F\x6C\x6F\x75\x73\x0A\x43\x61\x6E\x6E\x6F\x6E\x43\x6F\x67\x0A\x43\x6F\x72\x64\x46\x6C\x61\x70\x70\x69\x6E\x67\x0A\x53\x6E\x69\x63\x6B\x65\x72\x49\x6E\x64\x6F\x6E\x65\x73\x69\x61\x6E\x0A\x64\x6F\x6D\x65\x0A\x6B\x69\x6E\x67\x0A\x6F\x68\x69\x6F\x0A\x73\x74\x61\x6E\x64\x61\x72\x64\x0A\x66\x75\x73\x74\x69\x6C\x61\x72\x69\x61\x6E\x0A\x6E\x61\x74\x69\x76\x65\x0A\x73\x75\x70\x70\x6C\x79\x0A\x61\x6D\x68\x65\x72\x73\x74\x0A\x69\x6E\x69\x74\x69\x61\x6C\x0A\x74\x6F\x77\x65\x6C\x0A\x70\x75\x6D\x70\x69\x6F\x6E\x0A\x70\x65\x72\x66\x65\x63\x74\x0A\x6D\x6F\x75\x6C\x64\x79\x0A\x66\x6C\x61\x73\x6B\x73\x0A\x63\x61\x72\x69\x6E\x61\x0A\x64\x75\x63\x68\x65\x73\x73\x0A\x63\x72\x61\x63\x6B\x65\x72\x73\x0A\x65\x78\x63\x69\x74\x69\x6E\x67\x0A\x68\x6F\x6C\x65\x0A\x77\x69\x67\x67\x6C\x65\x0A\x67\x72\x65\x61\x74\x0A\x62\x65\x6E\x0A\x70\x6F\x6F\x70\x0A\x6F\x74\x69\x73\x0A\x70\x6F\x6C\x69\x74\x65\x0A\x73\x6C\x61\x70\x70\x69\x6E\x67\x0A\x6F\x74\x68\x65\x72\x77\x69\x73\x65\x0A\x67\x72\x69\x6C\x6C\x65\x64\x0A\x77\x65\x73\x0A\x73\x75\x6D\x6D\x61\x72\x79\x0A\x6E\x69\x63\x65\x0A\x62\x61\x73\x6B\x65\x74\x62\x61\x6C\x6C\x0A\x73\x74\x61\x72\x62\x6F\x6C\x69\x6E\x73\x0A\x62\x61\x62\x79\x0A\x62\x6F\x6F\x6B\x69\x6E\x67\x0A\x72\x68\x75\x62\x61\x72\x62\x0A\x70\x65\x72\x73\x6F\x6E\x0A\x73\x68\x6F\x6F\x74\x65\x72\x0A\x62\x6F\x75\x6E\x64\x65\x64\x0A\x6E\x6F\x72\x74\x68\x61\x6D\x70\x74\x6F\x6E\x73\x68\x69\x72\x65\x0A\x73\x79\x6C\x6C\x61\x62\x6C\x65\x0A\x67\x72\x65\x65\x6E\x69\x73\x68\x0A\x75\x70\x74\x69\x67\x68\x74\x0A\x74\x77\x65\x65\x64\x0A\x74\x68\x65\x0A\x72\x65\x65\x6B\x79\x0A\x6C\x61\x74\x68\x65\x72\x65\x64\x0A\x61\x73\x63\x65\x6E\x73\x69\x6F\x6E\x0A\x6F\x62\x74\x61\x69\x6E\x0A\x6E\x61\x67\x67\x69\x6E\x67\x0A\x63\x68\x61\x6C\x6C\x65\x6E\x67\x65\x72\x0A\x73\x65\x63\x72\x65\x74\x0A\x77\x6F\x72\x63\x65\x73\x74\x65\x72\x0A\x6C\x61\x6E\x67\x6C\x65\x79\x0A\x70\x6F\x6C\x6C\x79\x0A\x75\x72\x69\x6E\x61\x6C\x0A\x74\x72\x75\x73\x74\x69\x6E\x67\x0A\x62\x65\x76\x65\x72\x6C\x65\x79\x0A\x66\x72\x61\x6E\x6B\x69\x65\x0A\x64\x61\x72\x74\x6D\x6F\x6F\x72\x0A\x6D\x61\x73\x68\x0A\x67\x69\x6C\x6C\x69\x65\x0A\x6D\x65\x74\x68\x6F\x64\x69\x73\x74\x0A\x67\x61\x6C\x61\x78\x79\x0A\x6D\x6F\x7A\x61\x72\x74\x0A\x62\x61\x72\x72\x61\x67\x65\x0A\x73\x70\x6F\x74\x69\x63\x75\x73\x0A\x73\x63\x68\x65\x64\x75\x6C\x65\x64\x0A\x65\x65\x6C\x0A\x70\x61\x6E\x65\x6C\x0A\x66\x6C\x61\x70\x6A\x61\x63\x6B\x0A\x63\x68\x65\x6D\x69\x73\x74\x0A\x61\x6C\x62\x65\x72\x74\x0A\x6D\x65\x74\x61\x63\x61\x72\x70\x75\x73\x0A\x64\x65\x6E\x73\x65\x0A\x62\x6C\x65\x65\x64\x69\x6E\x67\x0A\x66\x69\x78\x61\x74\x69\x6F\x6E\x0A\x6E\x69\x67\x67\x6C\x65\x73\x0A\x63\x61\x6D\x65\x6C\x0A\x72\x6F\x73\x69\x6E\x0A\x63\x6F\x6D\x6D\x75\x6E\x69\x74\x79\x0A\x6C\x65\x61\x73\x68\x0A\x64\x75\x6C\x61\x69\x73\x0A\x6C\x61\x64\x64\x65\x72\x0A\x6C\x65\x65\x0A\x69\x6E\x64\x69\x63\x65\x73\x0A\x79\x6F\x75\x0A\x65\x64\x75\x63\x61\x74\x69\x6F\x6E\x0A\x64\x75\x6D\x70\x6C\x69\x6E\x67\x73\x0A\x62\x69\x64\x0A\x70\x72\x69\x6E\x63\x65\x0A\x61\x72\x74\x69\x73\x74\x65\x0A\x61\x76\x6F\x63\x65\x74\x0A\x62\x75\x72\x6E\x73\x0A\x62\x61\x72\x6E\x65\x79\x0A\x6D\x61\x6E\x61\x67\x65\x64\x0A\x62\x75\x72\x72\x69\x74\x6F\x73\x0A\x70\x65\x64\x75\x6E\x63\x6C\x65\x0A\x70\x61\x6C\x74\x72\x79\x0A\x65\x71\x75\x61\x74\x6F\x72\x0A\x73\x75\x62\x6D\x65\x72\x67\x65\x0A\x65\x78\x70\x65\x63\x74\x65\x64\x0A\x66\x61\x67\x73\x0A\x70\x65\x72\x6C\x0A\x63\x6C\x75\x65\x6C\x65\x73\x73\x0A\x63\x61\x72\x74\x69\x65\x72\x0A\x77\x6F\x6D\x62\x6C\x65\x64\x0A\x62\x65\x61\x72\x64\x65\x64\x0A\x6B\x61\x6C\x6D\x61\x6E\x0A\x74\x72\x65\x65\x73\x0A\x70\x69\x6E\x6B\x0A\x61\x64\x64\x69\x65\x0A\x74\x6F\x64\x0A\x75\x73\x64", "\x59\x4F\x55\x52\x20\x53\x43\x4F\x52\x45", "\x42\x45\x53\x54\x20\x53\x43\x4F\x52\x45", "\x4E\x45\x57", "\x54\x49\x4D\x45\x20\x50\x4C\x41\x59\x45\x44", "\x50\x4C\x41\x59\x45\x52\x53\x20\x4B\x49\x4C\x4C\x45\x44", "\x50\x4C\x41\x59\x20\x41\x47\x41\x49\x4E", "\x4D\x45\x4E\x55", "\x57\x61\x6E\x74\x20\x74\x6F\x20\x70\x6C\x61\x79\x20\x61\x20\x67\x61\x6D\x65\x3F", "\x54\x6F\x75\x63\x68\x20\x79\x6F\x75\x72\x20\x73\x63\x72\x65\x65\x6E\x20\x74\x6F\x20\x63\x6F\x6E\x74\x72\x6F\x6C", "\x42\x69\x74\x65\x20\x65\x6E\x65\x6D\x79\x20\x74\x61\x69\x6C\x73\x20\x62\x75\x74\x20\x64\x6F\x6E\x27\x74\x20\x6C\x65\x74\x20\x74\x68\x65\x6D\x20\x62\x69\x74\x65\x20\x79\x6F\x75\x72\x73\x21", "\x43\x6F\x6D\x70\x65\x74\x65\x20\x61\x67\x61\x69\x6E\x73\x74\x20\x6F\x74\x68\x65\x72\x20\x70\x6C\x61\x79\x65\x72\x73", "\x54\x68\x65\x20\x67\x61\x6D\x65\x20\x69\x73\x20\x6E\x6F\x74\x20\x73\x75\x70\x70\x6F\x72\x74\x65\x64\x20\x6F\x6E\x20\x79\x6F\x75\x72\x20\x64\x65\x76\x69\x63\x65", "\x50\x4C\x41\x59", "\x59\x6F\x75\x72\x20\x6E\x61\x6D\x65", "\x50\x6C\x61\x79\x65\x72", "\x42\x45\x53\x54", "\x4B\x69\x6C\x6C", "\x70\x72\x65\x70\x61\x72\x69\x6E\x67", "\x70\x72\x65\x70\x61\x72\x65", "\x70\x72\x65\x70\x61\x72\x65\x43\x6F\x75\x6E\x74\x65\x72", "\x5F\x5F\x48", "\x74", "\x68\x6F\x6F\x6B", "\x69", "\x70", "\x6D", "\x72\x65\x71\x75\x65\x73\x74\x41\x6E\x69\x6D\x61\x74\x69\x6F\x6E\x46\x72\x61\x6D\x65", "\x6D\x65\x73\x73\x61\x67\x65\x73", "\x64\x69\x76", "\x74\x69\x70\x73", "\x74\x69\x70", "\x6E\x69\x63\x6B\x4E\x61\x6D\x65", "\x73\x65\x74\x4E\x69\x63\x6B\x4E\x61\x6D\x65", "\x70\x6C\x61\x79\x61\x62\x6C\x65", "\x72\x6F\x75\x74\x65", "\x75\x69\x62\x6F\x78", "\x6C\x6F\x67\x6F", "\x69\x6D\x67", "\x61\x73\x73\x65\x74\x73\x2F\x69\x6D\x61\x67\x65\x73\x2F\x6C\x6F\x67\x6F\x2E\x70\x6E\x67", "\x66\x6F\x72\x6D", "\x70\x6C\x61\x79", "\x69\x6E\x70\x75\x74", "\x6F\x66\x66", "\x70\x6C\x61\x63\x65\x68\x6F\x6C\x64\x65\x72\x54\x65\x78\x74", "\x31\x32", "\x79\x65\x6C\x6C\x6F\x77", "\x20\x64\x69\x73\x61\x62\x6C\x65\x64", "\x62\x74\x6E\x50\x6C\x61\x79", "\x6E\x6F\x74\x73\x75\x70\x70\x6F\x72\x74\x65\x64", "\x6E\x6F\x73\x75\x70\x70\x6F\x72\x74", "\x62\x65\x73\x74\x53\x63\x6F\x72\x65", "\x73\x65\x74\x42\x65\x73\x74\x53\x63\x6F\x72\x65", "\x73\x65\x74\x52\x65\x73\x75\x6C\x74\x73", "\x73\x65\x74\x50\x72\x65\x70\x61\x72\x69\x6E\x67", "\x61\x70\x69", "\x73\x63\x6F\x72\x65", "\x6E\x65\x77", "\x72\x65\x73\x75\x6C\x74\x73", "\x6E\x61\x76", "\x61\x67\x61\x69\x6E", "\x70\x6C\x61\x79\x41\x67\x61\x69\x6E", "\x67\x72\x65\x65\x6E", "\x6D\x65\x6E\x75", "\x72\x65\x73\x75\x6C\x74\x62\x6F\x78", "\x72\x65\x73\x75\x6C\x74\x73\x69\x6D\x67", "\x79\x6F\x75\x72\x53\x63\x6F\x72\x65", "\x3A", "\x73\x70\x61\x6E", "\x6E\x65\x77\x53\x63\x6F\x72\x65", "\x6E\x65\x77\x54\x65\x78\x74", "\x74\x69\x6D\x65\x50\x6C\x61\x79\x65\x64", "\x70\x6C\x61\x79\x65\x72\x73\x4B\x69\x6C\x6C\x65\x64", "\x74\x6F\x49\x53\x4F\x53\x74\x72\x69\x6E\x67", "\x69\x6E\x74\x65\x72\x76\x61\x6C\x73", "\x72\x75\x6E", "\x73\x74\x61\x72\x74\x65\x64", "\x70\x61\x75\x73\x65", "\x72\x65\x61\x64\x79", "\x73\x74\x6F\x72\x61\x67\x65", "\x61\x64\x73", "\x70\x61\x70\x65\x72\x2E\x69\x6F\x2E\x73\x74\x6F\x72\x61\x67\x65", "\x73\x68\x6F\x77", "\x66\x61\x64\x65\x69\x6E", "\x75\x69", "\x68\x69\x64\x65", "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64", "\x72\x6F\x6F\x74"];
! function() {
    _0x4197[0];
    var _0x2184x1, _0x2184x2, _0x2184x3, _0x2184x4, _0x2184x5 = {},
        _0x2184x6 = [],
        _0x2184x7 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;

    function _0x2184x8(_0x2184x9, _0x2184x2) { for (var _0x2184x3 in _0x2184x2) { _0x2184x9[_0x2184x3] = _0x2184x2[_0x2184x3] }; return _0x2184x9 }

    function _0x2184xa(_0x2184x9) {
        var _0x2184x2 = _0x2184x9[_0x4197[1]];
        _0x2184x2 && _0x2184x2[_0x4197[2]](_0x2184x9)
    }

    function _0x2184xd() { var _0x2184x9; for (_0x2184x2[_0x4197[24]](function(_0x2184x9, _0x2184x2) { return _0x2184x2[_0x4197[23]] - _0x2184x9[_0x4197[23]] }); _0x2184x9 = _0x2184x2[_0x4197[25]]();) { _0x2184x9[_0x4197[21]] && _0x2184x9[_0x4197[26]](!1) } }

    startGame = (a, _0x2184xe, fn) => {
        _0x2184x9 = a;
        a.preventDefault();
        if (_0x2184xe) {
            fn()
        }
    }

    function _0x2184xb(_0x2184x9, _0x2184x2, _0x2184x3) { var _0x2184xc, _0x2184xd, _0x2184xe, _0x2184xf, _0x2184x10 = arguments; if (_0x2184x2 = _0x2184x8({}, _0x2184x2), 3 < arguments[_0x4197[3]]) { for (_0x2184x3 = [_0x2184x3], _0x2184xc = 3; _0x2184xc < arguments[_0x4197[3]]; _0x2184xc++) { _0x2184x3[_0x4197[4]](_0x2184x10[_0x2184xc]) } }; if (null != _0x2184x3 && (_0x2184x2[_0x4197[5]] = _0x2184x3), null != _0x2184x9 && null != _0x2184x9[_0x4197[6]]) { for (_0x2184xd in _0x2184x9[_0x4197[6]]) { void(0) === _0x2184x2[_0x2184xd] && (_0x2184x2[_0x2184xd] = _0x2184x9[_0x4197[6]][_0x2184xd]) } }; return (_0x2184xe = _0x2184x2[_0x4197[7]]) && delete _0x2184x2[_0x4197[7]], (_0x2184xf = _0x2184x2[_0x4197[8]]) && delete _0x2184x2[_0x4197[8]], _0x2184x11(_0x2184x9, _0x2184x2, null, _0x2184xf, _0x2184xe) }

    function _0x2184x11(_0x2184x9, _0x2184x2, _0x2184x3, _0x2184xc, _0x2184xd) { var _0x2184xe = { type: _0x2184x9, props: _0x2184x2, text: _0x2184x3, key: _0x2184xc, ref: _0x2184xd, __k: null, __e: null, l: null, __c: null }; return _0x2184xe[_0x4197[9]] = _0x2184xe, _0x2184x1[_0x4197[10]] && _0x2184x1[_0x4197[10]](_0x2184xe), _0x2184xe }

    function _0x2184x12() {}

    function _0x2184x13(_0x2184x9) { if (null == _0x2184x9 || _0x4197[11] == typeof _0x2184x9) { return null }; if (_0x4197[12] == typeof _0x2184x9 || _0x4197[13] == typeof _0x2184x9) { return _0x2184x11(null, null, _0x2184x9, null, null) }; if (Array[_0x4197[14]](_0x2184x9)) { return _0x2184xb(_0x2184x12, null, _0x2184x9) }; if (null == _0x2184x9[_0x4197[15]] && null == _0x2184x9[_0x4197[16]]) { return _0x2184x9 }; var _0x2184x2 = _0x2184x11(_0x2184x9[_0x4197[17]], _0x2184x9[_0x4197[18]], _0x2184x9[_0x4197[19]], _0x2184x9[_0x4197[8]], null); return _0x2184x2[_0x4197[15]] = _0x2184x9[_0x4197[15]], _0x2184x2 }

    function _0x2184x14(_0x2184x9, _0x2184x2) { this[_0x4197[18]] = _0x2184x9, this[_0x4197[20]] = _0x2184x2 }

    function _0x2184xc(_0x2184x9) {!_0x2184x9[_0x4197[21]] && (_0x2184x9[_0x4197[21]] = !0) && 1 === _0x2184x2[_0x4197[4]](_0x2184x9) && (_0x2184x1[_0x4197[22]] || _0x2184x3)(_0x2184xd) }


    function _0x2184x15(_0x2184x9, _0x2184x2, _0x2184x3, _0x2184xc, _0x2184xd, _0x2184xe, _0x2184xf, _0x2184x10, _0x2184x11) {
        var _0x2184x16, _0x2184x17, _0x2184x4, _0x2184x7, _0x2184x18, _0x2184x19, _0x2184x1a, _0x2184x1b = _0x2184x2[_0x4197[27]] || function _0x2184x9(_0x2184x2, _0x2184x3, _0x2184xc, _0x2184xd) { if (null == _0x2184x3 && (_0x2184x3 = []), null == _0x2184x2 || _0x4197[11] == typeof _0x2184x2) { _0x2184xd && _0x2184x3[_0x4197[4]](null) } else { if (Array[_0x4197[14]](_0x2184x2)) { for (var _0x2184xe = 0; _0x2184xe < _0x2184x2[_0x4197[3]]; _0x2184xe++) { _0x2184x9(_0x2184x2[_0x2184xe], _0x2184x3, _0x2184xc, _0x2184xd) } } else { _0x2184x3[_0x4197[4]](_0x2184xc ? _0x2184xc(_0x2184x2) : _0x2184x2) } }; return _0x2184x3 }(_0x2184x2[_0x4197[18]][_0x4197[5]], _0x2184x2[_0x4197[27]] = [], _0x2184x13, !0),
            _0x2184x1c = null != _0x2184x3 && _0x2184x3[_0x4197[27]] || _0x2184x6,
            _0x2184x1d = _0x2184x1c[_0x4197[3]];
        if (_0x2184x11 == _0x2184x5) { if ((_0x2184x11 = null) != _0x2184xe) { for (_0x2184x17 = 0; null == _0x2184x11 && _0x2184x17 < _0x2184xe[_0x4197[3]]; _0x2184x17++) { _0x2184x11 = _0x2184xe[_0x2184x17] } } else { for (_0x2184x17 = 0; null == _0x2184x11 && _0x2184x17 < _0x2184x1d; _0x2184x17++) { _0x2184x11 = _0x2184x1c[_0x2184x17] && _0x2184x1c[_0x2184x17][_0x4197[15]], _0x2184x1a = _0x2184x1c[_0x2184x17] } } };
        for (_0x2184x17 = 0; _0x2184x17 < _0x2184x1b[_0x4197[3]]; _0x2184x17++) {
            if (null != (_0x2184x16 = _0x2184x1b[_0x2184x17] = _0x2184x13(_0x2184x1b[_0x2184x17]))) {
                if (null === (_0x2184x7 = _0x2184x1c[_0x2184x17]) || null != _0x2184x7 && (null == _0x2184x16[_0x4197[8]] && null == _0x2184x7[_0x4197[8]] ? _0x2184x16[_0x4197[17]] === _0x2184x7[_0x4197[17]] : _0x2184x16[_0x4197[8]] === _0x2184x7[_0x4197[8]])) { _0x2184x1c[_0x2184x17] = void(0) } else {
                    for (_0x2184x4 = 0; _0x2184x4 < _0x2184x1d; _0x2184x4++) {
                        if (null != (_0x2184x7 = _0x2184x1c[_0x2184x4]) && (null == _0x2184x16[_0x4197[8]] && null == _0x2184x7[_0x4197[8]] ? _0x2184x16[_0x4197[17]] === _0x2184x7[_0x4197[17]] : _0x2184x16[_0x4197[8]] === _0x2184x7[_0x4197[8]])) { _0x2184x1c[_0x2184x4] = void(0), _0x2184x1d !== _0x2184x1b[_0x4197[3]] && _0x2184x7[_0x4197[17]] !== (_0x2184x1a && _0x2184x1a[_0x4197[17]]) && (_0x2184x11 = _0x2184x7[_0x4197[15]]); break };
                        _0x2184x7 = null
                    }
                };
                if (null != (_0x2184x18 = _0x2184x1f(_0x2184x9, _0x2184x16, _0x2184x7, _0x2184xc, _0x2184xd, _0x2184xe, _0x2184xf, _0x2184x10, null, _0x2184x11))) {
                    if (null != _0x2184x16[_0x4197[28]]) { _0x2184x18 = _0x2184x16[_0x4197[28]] } else {
                        if (_0x2184xe == _0x2184x7 || _0x2184x18 != _0x2184x11 || null == _0x2184x18[_0x4197[1]]) {
                            _0x2184x9: if (null == _0x2184x11 || _0x2184x11[_0x4197[1]] !== _0x2184x9) { _0x2184x9[_0x4197[29]](_0x2184x18) } else {
                                for (_0x2184x19 = _0x2184x11, _0x2184x4 = 0;
                                    (_0x2184x19 = _0x2184x19[_0x4197[30]]) && _0x2184x4++ < _0x2184x1d / 2;) { if (_0x2184x19 === _0x2184x18) { break _0x2184x9 } };
                                _0x2184x9[_0x4197[31]](_0x2184x18, _0x2184x11)
                            };
                        }
                    };
                    _0x2184x11 = _0x2184x18[_0x4197[30]]
                }
            }
        };
        if (null != _0x2184xe && _0x2184x2[_0x4197[17]] !== _0x2184x12) { for (_0x2184x17 = _0x2184xe[_0x4197[3]]; _0x2184x17--;) { null != _0x2184xe[_0x2184x17] && _0x2184xa(_0x2184xe[_0x2184x17]) } };
        for (_0x2184x17 = _0x2184x1d; _0x2184x17--;) { null != _0x2184x1c[_0x2184x17] && _0x2184x24(_0x2184x1c[_0x2184x17], _0x2184x10) }
    }

    function _0x2184x1e(_0x2184x9, _0x2184x2, _0x2184x3, _0x2184xc, _0x2184xd) {
        var _0x2184xe, _0x2184xf, _0x2184x10, _0x2184x11, _0x2184x16, _0x2184x17;
        if (_0x4197[32] !== _0x2184x2 && _0x4197[33] !== _0x2184x2 || (_0x2184x2 = _0x2184xd ? _0x4197[32] : _0x4197[33]), _0x4197[34] === _0x2184x2) { if (_0x2184xf = _0x2184x9[_0x4197[34]], _0x4197[12] == typeof _0x2184x3) { _0x2184xf[_0x4197[35]] = _0x2184x3 } else { if (_0x4197[12] == typeof _0x2184xc) { _0x2184xf[_0x4197[35]] = _0x4197[36] } else { for (_0x2184x10 in _0x2184xc) { null != _0x2184x3 && _0x2184x10 in _0x2184x3 || _0x2184xf[_0x4197[39]](_0x2184x10[_0x4197[38]](_0x2184x4, _0x4197[37]), _0x4197[36]) } }; for (_0x2184x11 in _0x2184x3) { _0x2184xe = _0x2184x3[_0x2184x11], null != _0x2184xc && _0x2184xe === _0x2184xc[_0x2184x11] || _0x2184xf[_0x4197[39]](_0x2184x11[_0x4197[38]](_0x2184x4, _0x4197[37]), _0x4197[13] == typeof _0x2184xe && !1 === _0x2184x7[_0x4197[40]](_0x2184x11) ? _0x2184xe + _0x4197[41] : _0x2184xe) } } } else {
            if (_0x4197[42] === _0x2184x2) { return };
            _0x4197[43] === _0x2184x2[0] && _0x4197[44] === _0x2184x2[1] ? (_0x2184x16 = _0x2184x2 !== (_0x2184x2 = _0x2184x2[_0x4197[38]](/Capture$/, _0x4197[36])), _0x2184x2 = ((_0x2184x17 = _0x2184x2[_0x4197[46]]()) in self ? _0x2184x17 : _0x2184x2)[_0x4197[45]](2), _0x2184x3 ? _0x2184xc || _0x2184x9[_0x4197[47]](_0x2184x2, _0x2184x18, _0x2184x16) : _0x2184x9[_0x4197[48]](_0x2184x2, _0x2184x18, _0x2184x16), (_0x2184x9[_0x4197[49]] || (_0x2184x9[_0x4197[49]] = {}))[_0x2184x2] = _0x2184x3) : _0x4197[50] !== _0x2184x2 && _0x4197[51] !== _0x2184x2 && !_0x2184xd && _0x2184x2 in _0x2184x9 ? _0x2184x9[_0x2184x2] = null == _0x2184x3 ? _0x4197[36] : _0x2184x3 : null == _0x2184x3 || !1 === _0x2184x3 ? _0x2184x2 !== (_0x2184x2 = _0x2184x2[_0x4197[38]](/^xlink:?/, _0x4197[36])) ? _0x2184x9[_0x4197[53]](_0x4197[52], _0x2184x2[_0x4197[46]]()) : _0x2184x9[_0x4197[54]](_0x2184x2) : _0x4197[55] != typeof _0x2184x3 && (_0x2184x2 !== (_0x2184x2 = _0x2184x2[_0x4197[38]](/^xlink:?/, _0x4197[36])) ? _0x2184x9[_0x4197[56]](_0x4197[52], _0x2184x2[_0x4197[46]](), _0x2184x3) : _0x2184x9[_0x4197[57]](_0x2184x2, _0x2184x3))
        }
    }

    function _0x2184x18(_0x2184x9) { return this[_0x4197[49]][_0x2184x9[_0x4197[17]]](_0x2184x1[_0x4197[58]] ? _0x2184x1[_0x4197[58]](_0x2184x9) : _0x2184x9) }

    function _0x2184x1f(_0x2184x9, _0x2184x2, _0x2184x3, _0x2184xc, _0x2184xd, _0x2184xe, _0x2184xf, _0x2184x10, _0x2184x11, _0x2184x16) {
        var _0x2184x17, _0x2184x4, _0x2184x7, _0x2184x18, _0x2184x19, _0x2184x1a, _0x2184x1b, _0x2184x1c, _0x2184x1d, _0x2184xa, _0x2184x20, _0x2184x21, _0x2184x22, _0x2184xb;
        if (null == _0x2184x3 || null == _0x2184x2 || _0x2184x3[_0x4197[17]] !== _0x2184x2[_0x4197[17]] || _0x2184x3[_0x4197[8]] !== _0x2184x2[_0x4197[8]]) {
            if (null != _0x2184x3 && _0x2184x24(_0x2184x3, _0x2184x10), null == _0x2184x2) { return null };
            _0x2184x3 = _0x2184x5
        };
        if (_0x2184x2[_0x4197[9]] !== _0x2184x2) { return null };
        _0x2184x1[_0x4197[59]] && _0x2184x1[_0x4197[59]](_0x2184x2), _0x2184x7 = !1, _0x2184x1b = _0x2184x2[_0x4197[17]];
        try {
            _0x2184x9: if (_0x2184x3[_0x4197[17]] === _0x2184x12 || _0x2184x1b === _0x2184x12) { if (_0x2184x15(_0x2184x9, _0x2184x2, _0x2184x3, _0x2184xc, _0x2184xd, _0x2184xe, _0x2184xf, _0x2184x17, _0x2184x16), _0x2184x2[_0x4197[27]][_0x4197[3]] && null != _0x2184x2[_0x4197[27]][0]) { for (_0x2184x2[_0x4197[15]] = _0x2184x2[_0x4197[27]][0][_0x4197[15]], _0x2184x1d = _0x2184x2[_0x4197[27]][_0x4197[3]]; _0x2184x1d-- && (_0x2184x2[_0x4197[28]] = (_0x2184x4 = _0x2184x2[_0x4197[27]][_0x2184x1d]) && (_0x2184x4[_0x4197[28]] || _0x2184x4[_0x4197[15]]), !_0x2184x2[_0x4197[28]]);) {; } } } else {
                if (_0x4197[55] == typeof _0x2184x1b) {
                    if (_0x2184x20 = (_0x2184xa = _0x2184x1b[_0x4197[60]]) && _0x2184xc[_0x2184xa[_0x4197[16]]], _0x2184x21 = null != _0x2184xa ? _0x2184x20 ? _0x2184x20[_0x4197[18]][_0x4197[61]] : _0x2184xa[_0x4197[62]] : _0x2184xc, _0x2184x3[_0x4197[16]] ? (_0x2184x1c = (_0x2184x17 = _0x2184x2[_0x4197[16]] = _0x2184x3[_0x4197[16]])[_0x4197[62]] = _0x2184x17[_0x4197[63]], _0x2184x2[_0x4197[15]] = _0x2184x3[_0x4197[15]]) : (_0x2184x1b[_0x4197[64]] && _0x2184x1b[_0x4197[64]][_0x4197[65]] ? _0x2184x2[_0x4197[16]] = _0x2184x17 = new _0x2184x1b(_0x2184x2[_0x4197[18]], _0x2184x21) : (_0x2184x2[_0x4197[16]] = _0x2184x17 = new _0x2184x14(_0x2184x2[_0x4197[18]], _0x2184x21), _0x2184x17[_0x4197[66]] = _0x2184x1b, _0x2184x17[_0x4197[65]] = _0x2184x25), _0x2184x17[_0x4197[67]] = _0x2184x10, _0x2184x20 && _0x2184x20[_0x4197[68]](_0x2184x17), _0x2184x17[_0x4197[18]] = _0x2184x2[_0x4197[18]], _0x2184x17[_0x4197[69]] || (_0x2184x17[_0x4197[69]] = {}), _0x2184x17[_0x4197[20]] = _0x2184x21, _0x2184x17[_0x4197[70]] = _0x2184xc, _0x2184x7 = _0x2184x17[_0x4197[21]] = !0, _0x2184x17[_0x4197[71]] = []), _0x2184x17[_0x4197[72]] = _0x2184x2, null == _0x2184x17[_0x4197[73]] && (_0x2184x17[_0x4197[73]] = _0x2184x17[_0x4197[69]]), null != _0x2184x1b[_0x4197[74]] && _0x2184x8(_0x2184x17[_0x4197[73]] == _0x2184x17[_0x4197[69]] ? _0x2184x17[_0x4197[73]] = _0x2184x8({}, _0x2184x17.__s) : _0x2184x17[_0x4197[73]], _0x2184x1b[_0x4197[74]](_0x2184x2[_0x4197[18]], _0x2184x17.__s)), _0x2184x7) { null == _0x2184x1b[_0x4197[74]] && null != _0x2184x17[_0x4197[75]] && _0x2184x17[_0x4197[75]](), null != _0x2184x17[_0x4197[76]] && _0x2184xf[_0x4197[4]](_0x2184x17) } else {
                        if (null == _0x2184x1b[_0x4197[74]] && null == _0x2184x11 && null != _0x2184x17[_0x4197[77]] && _0x2184x17[_0x4197[77]](_0x2184x2[_0x4197[18]], _0x2184x21), !_0x2184x11 && null != _0x2184x17[_0x4197[78]] && !1 === _0x2184x17[_0x4197[78]](_0x2184x2[_0x4197[18]], _0x2184x17.__s, _0x2184x21)) { _0x2184x17[_0x4197[18]] = _0x2184x2[_0x4197[18]], _0x2184x17[_0x4197[69]] = _0x2184x17[_0x4197[73]], _0x2184x17[_0x4197[21]] = !1, _0x2184x2[_0x4197[28]] = _0x2184x3[_0x4197[28]]; break _0x2184x9 };
                        null != _0x2184x17[_0x4197[79]] && _0x2184x17[_0x4197[79]](_0x2184x2[_0x4197[18]], _0x2184x17.__s, _0x2184x21)
                    };
                    for (_0x2184x18 = _0x2184x17[_0x4197[18]], _0x2184x19 = _0x2184x17[_0x4197[69]], _0x2184x17[_0x4197[20]] = _0x2184x21, _0x2184x17[_0x4197[18]] = _0x2184x2[_0x4197[18]], _0x2184x17[_0x4197[69]] = _0x2184x17[_0x4197[73]], _0x2184x1[_0x4197[65]] && _0x2184x1[_0x4197[65]](_0x2184x2), _0x2184x22 = _0x2184x17[_0x4197[80]] || null, _0x2184x17[_0x4197[21]] = !1, _0x2184xb = _0x2184x17[_0x4197[80]] = _0x2184x13(_0x2184x17[_0x4197[65]](_0x2184x17[_0x4197[18]], _0x2184x17[_0x4197[69]], _0x2184x17[_0x4197[20]])), null != _0x2184x17[_0x4197[81]] && (_0x2184xc = _0x2184x8(_0x2184x8({}, _0x2184xc), _0x2184x17[_0x4197[81]]())), _0x2184x7 || null == _0x2184x17[_0x4197[82]] || (_0x2184x1a = _0x2184x17[_0x4197[82]](_0x2184x18, _0x2184x19)), _0x2184x17[_0x4197[23]] = _0x2184x10 ? (_0x2184x10[_0x4197[23]] || 0) + 1 : 0, _0x2184x17[_0x4197[83]] = _0x2184x2[_0x4197[15]] = _0x2184x1f(_0x2184x9, _0x2184xb, _0x2184x22, _0x2184xc, _0x2184xd, _0x2184xe, _0x2184xf, _0x2184x17, null, _0x2184x16), null != _0x2184xb && (_0x2184x2[_0x4197[28]] = _0x2184xb[_0x4197[28]]), _0x2184x17[_0x4197[84]] = _0x2184x9, _0x2184x2[_0x4197[7]] && _0x2184x23(_0x2184x2[_0x4197[7]], _0x2184x17, _0x2184x10); _0x2184x4 = _0x2184x17[_0x4197[71]][_0x4197[25]]();) { _0x2184x4[_0x4197[85]](_0x2184x17) };
                    _0x2184x7 || null == _0x2184x18 || null == _0x2184x17[_0x4197[86]] || _0x2184x17[_0x4197[86]](_0x2184x18, _0x2184x19, _0x2184x1a)
                } else {
                    _0x2184x2[_0x4197[15]] = function(_0x2184x9, _0x2184x2, _0x2184x3, _0x2184xc, _0x2184xd, _0x2184xe, _0x2184xf, _0x2184x10) {
                        var _0x2184x11, _0x2184x16, _0x2184x17, _0x2184x4, _0x2184x7, _0x2184x18, _0x2184x19, _0x2184x1a, _0x2184x1b = _0x2184x9;
                        if (_0x2184xd = _0x4197[87] === _0x2184x2[_0x4197[17]] || _0x2184xd, null == _0x2184x9 && null != _0x2184xe) { for (_0x2184x11 = 0; _0x2184x11 < _0x2184xe[_0x4197[3]]; _0x2184x11++) { if (null != (_0x2184x16 = _0x2184xe[_0x2184x11]) && (null === _0x2184x2[_0x4197[17]] ? 3 === _0x2184x16[_0x4197[88]] : _0x2184x16[_0x4197[89]] === _0x2184x2[_0x4197[17]])) { _0x2184x9 = _0x2184x16, _0x2184xe[_0x2184x11] = null; break } } };
                        if (null == _0x2184x9 && (_0x2184x9 = null === _0x2184x2[_0x4197[17]] ? document[_0x4197[90]](_0x2184x2[_0x4197[19]]) : _0x2184xd ? document[_0x4197[92]](_0x4197[91], _0x2184x2[_0x4197[17]]) : document[_0x4197[93]](_0x2184x2[_0x4197[17]]), _0x2184xe = null), null === _0x2184x2[_0x4197[17]]) { null != _0x2184x1b && _0x2184x9 !== _0x2184x1b || _0x2184x2[_0x4197[19]] === _0x2184x3[_0x4197[19]] || (_0x2184x9[_0x4197[94]] = _0x2184x2[_0x4197[19]]) } else {
                            if (null != _0x2184xe && null != _0x2184x9[_0x4197[95]] && (_0x2184xe = _0x2184x6[_0x4197[96]][_0x4197[85]](_0x2184x9[_0x4197[95]])), _0x2184x2 !== _0x2184x3) {
                                if (_0x2184x4 = _0x2184x2[_0x4197[18]], null == (_0x2184x17 = _0x2184x3[_0x4197[18]]) && (_0x2184x17 = {}, null != _0x2184xe)) { for (_0x2184x18 = 0; _0x2184x18 < _0x2184x9[_0x4197[97]][_0x4197[3]]; _0x2184x18++) { _0x2184x17[_0x4197[32] == (_0x2184x7 = _0x2184x9[_0x4197[97]][_0x2184x18][_0x4197[98]]) && _0x2184x4[_0x4197[33]] ? _0x4197[33] : _0x2184x7] = _0x2184x9[_0x4197[97]][_0x2184x18][_0x4197[61]] } };
                                _0x2184x19 = _0x2184x17[_0x4197[42]], ((_0x2184x1a = _0x2184x4[_0x4197[42]]) || _0x2184x19) && (_0x2184x1a && _0x2184x19 && _0x2184x1a[_0x4197[99]] == _0x2184x19[_0x4197[99]] || (_0x2184x9[_0x4197[100]] = _0x2184x1a && _0x2184x1a[_0x4197[99]] || _0x4197[36])), _0x2184x4[_0x4197[101]] && (_0x2184x9[_0x4197[101]] = _0x2184x4[_0x4197[101]]), _0x2184x15(_0x2184x9, _0x2184x2, _0x2184x3, _0x2184xc, _0x4197[102] !== _0x2184x2[_0x4197[17]] && _0x2184xd, _0x2184xe, _0x2184xf, _0x2184x10, _0x2184x5),
                                    function(_0x2184x9, _0x2184x2, _0x2184x3, _0x2184xc) { var _0x2184xd, _0x2184xe, _0x2184xf = Object[_0x4197[103]](_0x2184x2)[_0x4197[24]](); for (_0x2184xd = 0; _0x2184xd < _0x2184xf[_0x4197[3]]; _0x2184xd++) { _0x4197[5] === _0x2184xf[_0x2184xd] || _0x4197[8] === _0x2184xf[_0x2184xd] || _0x2184x3 && (_0x4197[61] === _0x2184xf[_0x2184xd] || _0x4197[104] === _0x2184xf[_0x2184xd] ? _0x2184x9 : _0x2184x3)[_0x2184xf[_0x2184xd]] === _0x2184x2[_0x2184xf[_0x2184xd]] || _0x2184x1e(_0x2184x9, _0x2184xf[_0x2184xd], _0x2184x2[_0x2184xf[_0x2184xd]], _0x2184x3[_0x2184xf[_0x2184xd]], _0x2184xc) }; for (_0x2184xe in _0x2184x3) { _0x4197[5] === _0x2184xe || _0x4197[8] === _0x2184xe || _0x2184x2 && _0x2184xe in _0x2184x2 || _0x2184x1e(_0x2184x9, _0x2184xe, null, _0x2184x3[_0x2184xe], _0x2184xc) } }(_0x2184x9, _0x2184x4, _0x2184x17, _0x2184xd)
                            }
                        };
                        return _0x2184x9
                    }(_0x2184x3.__e, _0x2184x2, _0x2184x3, _0x2184xc, _0x2184xd, _0x2184xe, _0x2184xf, _0x2184x10), _0x2184x2[_0x4197[7]] && _0x2184x3[_0x4197[7]] !== _0x2184x2[_0x4197[7]] && _0x2184x23(_0x2184x2[_0x4197[7]], _0x2184x2.__e, _0x2184x10)
                }
            };_0x2184x1c && (_0x2184x17[_0x4197[63]] = _0x2184x17[_0x4197[62]] = null),
            _0x2184x1[_0x4197[105]] && _0x2184x1[_0x4197[105]](_0x2184x2)
        }
        catch (_0x2184x9) { _0x2184x26(_0x2184x9, _0x2184x10) };
        return _0x2184x2[_0x4197[15]]
    }

    function _0x2184xe(_0x2184x9, _0x2184x2) {
        for (var _0x2184x3; _0x2184x3 = _0x2184x9[_0x4197[25]]();) { try { _0x2184x3[_0x4197[76]]() } catch (_0x2184x9) { _0x2184x26(_0x2184x9, _0x2184x3.__a) } };
        _0x2184x1[_0x4197[106]] && _0x2184x1[_0x4197[106]](_0x2184x2)
    }

    function _0x2184x23(_0x2184x9, _0x2184x2, _0x2184x3) { try { _0x4197[55] == typeof _0x2184x9 ? _0x2184x9(_0x2184x2) : _0x2184x9[_0x4197[107]] = _0x2184x2 } catch (_0x2184x9) { _0x2184x26(_0x2184x9, _0x2184x3) } }

    function _0x2184x24(_0x2184x9, _0x2184x2, _0x2184x3) {
        var _0x2184xc, _0x2184xd, _0x2184xe;
        if (_0x2184x1[_0x4197[108]] && _0x2184x1[_0x4197[108]](_0x2184x9), (_0x2184xc = _0x2184x9[_0x4197[7]]) && _0x2184x23(_0x2184xc, null, _0x2184x2), _0x2184x3 || null != _0x2184x9[_0x4197[28]] || (_0x2184x3 = null != (_0x2184xd = _0x2184x9[_0x4197[15]])), _0x2184x9[_0x4197[15]] = _0x2184x9[_0x4197[28]] = null, null != (_0x2184xc = _0x2184x9[_0x4197[16]])) {
            if (_0x2184xc[_0x4197[109]]) { try { _0x2184xc[_0x4197[109]]() } catch (_0x2184x9) { _0x2184x26(_0x2184x9, _0x2184x2) } };
            _0x2184xc[_0x4197[83]] = _0x2184xc[_0x4197[84]] = null, (_0x2184xc = _0x2184xc[_0x4197[80]]) && _0x2184x24(_0x2184xc, _0x2184x2, _0x2184x3)
        } else { if (_0x2184xc = _0x2184x9[_0x4197[27]]) { for (_0x2184xe = 0; _0x2184xe < _0x2184xc[_0x4197[3]]; _0x2184xe++) { _0x2184xc[_0x2184xe] && _0x2184x24(_0x2184xc[_0x2184xe], _0x2184x2, _0x2184x3) } } };
        null != _0x2184xd && _0x2184xa(_0x2184xd)
    }

    function _0x2184x25(_0x2184x9, _0x2184x2, _0x2184x3) { return this[_0x4197[66]](_0x2184x9, _0x2184x3) }

    function _0x2184x26(_0x2184x9, _0x2184x2) {
        for (; _0x2184x2; _0x2184x2 = _0x2184x2[_0x4197[67]]) {
            if (!_0x2184x2[_0x4197[62]]) {
                try {
                    if (null != _0x2184x2[_0x4197[66]][_0x4197[110]]) { _0x2184x2[_0x4197[111]](_0x2184x2[_0x4197[66]][_0x4197[110]](_0x2184x9)) } else {
                        if (null == _0x2184x2[_0x4197[112]]) { continue };
                        _0x2184x2[_0x4197[112]](_0x2184x9)
                    };
                    return _0x2184xc(_0x2184x2[_0x4197[63]] = _0x2184x2)
                } catch (_0x2184x2) { _0x2184x9 = _0x2184x2 }
            }
        };
        throw _0x2184x9
    }
    _0x2184x1 = {}, _0x2184x14[_0x4197[64]][_0x4197[111]] = function(_0x2184x9, _0x2184x2) {
        var _0x2184x3 = this[_0x4197[73]] !== this[_0x4197[69]] && this[_0x4197[73]] || (this[_0x4197[73]] = _0x2184x8({}, this[_0x4197[69]]));
        (_0x4197[55] != typeof _0x2184x9 || (_0x2184x9 = _0x2184x9(_0x2184x3, this[_0x4197[18]]))) && _0x2184x8(_0x2184x3, _0x2184x9), null != _0x2184x9 && this[_0x4197[72]] && (_0x2184x2 && this[_0x4197[71]][_0x4197[4]](_0x2184x2), _0x2184xc(this))
    }, _0x2184x14[_0x4197[64]][_0x4197[26]] = function(_0x2184x9) {
        var _0x2184x2, _0x2184x3 = this[_0x4197[72]],
            _0x2184xc = this[_0x4197[72]][_0x4197[15]],
            _0x2184xd = this[_0x4197[84]];
        _0x2184xd && (null != (_0x2184xc = _0x2184x1f(_0x2184xd, _0x2184x3, _0x2184x3, this.__n, void(0) !== _0x2184xd[_0x4197[113]], null, _0x2184x2 = [], this.__a, !1 !== _0x2184x9, _0x2184xc)) && _0x2184xc[_0x4197[1]] !== _0x2184xd && _0x2184xd[_0x4197[29]](_0x2184xc), _0x2184xe(_0x2184x2, _0x2184x3)), _0x2184x9 && _0x2184x9()
    }, _0x2184x14[_0x4197[64]][_0x4197[65]] = _0x2184x12, _0x2184x2 = [], _0x2184x3 = _0x4197[55] == typeof Promise ? Promise[_0x4197[64]][_0x4197[116]][_0x4197[115]](Promise[_0x4197[114]]()) : setTimeout, _0x2184x4 = /-?(?=[A-Z])/g;
    Date[_0x4197[117]];
    try { performance[_0x4197[117]][_0x4197[115]](performance) } catch (_0x2184x1) {};
    var _0x2184x9, _0x2184xf = (function(_0x2184x9, _0x2184x2) {
        var _0x2184x3;
        _0x2184x3 = function() {
            function _0x2184x1a() { for (var _0x2184x9 = 0, _0x2184x2 = {}; _0x2184x9 < arguments[_0x4197[3]]; _0x2184x9++) { var _0x2184x3 = arguments[_0x2184x9]; for (var _0x2184xc in _0x2184x3) { _0x2184x2[_0x2184xc] = _0x2184x3[_0x2184xc] } }; return _0x2184x2 }
            return function _0x2184x9(_0x2184x18) {
                function _0x2184x19(_0x2184x9, _0x2184x2, _0x2184x3) {
                    var _0x2184xc;
                    if (_0x4197[119] != typeof document) {
                        if (1 < arguments[_0x4197[3]]) {
                            if (_0x4197[13] == typeof(_0x2184x3 = _0x2184x1a({ path: _0x4197[121] }, _0x2184x19[_0x4197[122]], _0x2184x3))[_0x4197[120]]) {
                                var _0x2184xd = new Date;
                                _0x2184xd[_0x4197[124]](_0x2184xd[_0x4197[123]]() + 864e5 * _0x2184x3[_0x4197[120]]), _0x2184x3[_0x4197[120]] = _0x2184xd
                            };
                            _0x2184x3[_0x4197[120]] = _0x2184x3[_0x4197[120]] ? _0x2184x3[_0x4197[120]][_0x4197[125]]() : _0x4197[36];
                            try { _0x2184xc = JSON[_0x4197[126]](_0x2184x2), /^[\{\[]/ [_0x4197[40]](_0x2184xc) && (_0x2184x2 = _0x2184xc) } catch (_0x2184x9) {};
                            _0x2184x2 = _0x2184x18[_0x4197[127]] ? _0x2184x18[_0x4197[127]](_0x2184x2, _0x2184x9) : encodeURIComponent(String(_0x2184x2))[_0x4197[38]](/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), _0x2184x9 = (_0x2184x9 = (_0x2184x9 = encodeURIComponent(String(_0x2184x9)))[_0x4197[38]](/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent))[_0x4197[38]](/[\(\)]/g, escape);
                            var _0x2184xe = _0x4197[36];
                            for (var _0x2184xf in _0x2184x3) { _0x2184x3[_0x2184xf] && (_0x2184xe += _0x4197[128] + _0x2184xf, !0 !== _0x2184x3[_0x2184xf] && (_0x2184xe += _0x4197[129] + _0x2184x3[_0x2184xf])) };

                            return document[_0x4197[130]] = _0x2184x9 + _0x4197[129] + _0x2184x2 + _0x2184xe
                        };
                        _0x2184x9 || (_0x2184xc = {});
                        for (var _0x2184x10 = document[_0x4197[130]] ? document[_0x4197[130]][_0x4197[131]](_0x4197[128]) : [], _0x2184x11 = /(%[0-9A-Z]{2})+/g, _0x2184x16 = 0; _0x2184x16 < _0x2184x10[_0x4197[3]]; _0x2184x16++) {
                            var _0x2184x17 = _0x2184x10[_0x2184x16][_0x4197[131]](_0x4197[129]),
                                _0x2184x4 = _0x2184x17[_0x4197[96]](1)[_0x4197[132]](_0x4197[129]);
                            this[_0x4197[133]] || _0x4197[134] !== _0x2184x4[_0x4197[135]](0) || (_0x2184x4 = _0x2184x4[_0x4197[96]](1, -1));
                            try {
                                var _0x2184x7 = _0x2184x17[0][_0x4197[38]](_0x2184x11, decodeURIComponent);
                                if (_0x2184x4 = _0x2184x18[_0x4197[136]] ? _0x2184x18[_0x4197[136]](_0x2184x4, _0x2184x7) : _0x2184x18(_0x2184x4, _0x2184x7) || _0x2184x4[_0x4197[38]](_0x2184x11, decodeURIComponent), this[_0x4197[133]]) { try { _0x2184x4 = JSON[_0x4197[137]](_0x2184x4) } catch (_0x2184x9) {} };
                                if (_0x2184x9 === _0x2184x7) { _0x2184xc = _0x2184x4; break };
                                _0x2184x9 || (_0x2184xc[_0x2184x7] = _0x2184x4)
                            } catch (_0x2184x9) {}
                        };
                        return _0x2184xc
                    }
                }
                return (_0x2184x19[_0x4197[139]] = _0x2184x19)[_0x4197[138]] = function(_0x2184x9) { return _0x2184x19[_0x4197[85]](_0x2184x19, _0x2184x9) }, _0x2184x19[_0x4197[140]] = function() { return _0x2184x19[_0x4197[141]]({ json: !0 }, [][_0x4197[96]][_0x4197[85]](arguments)) }, _0x2184x19[_0x4197[122]] = {}, _0x2184x19[_0x4197[142]] = function(_0x2184x9, _0x2184x2) { _0x2184x19(_0x2184x9, _0x4197[36], _0x2184x1a(_0x2184x2, { expires: -1 })) }, _0x2184x19[_0x4197[143]] = _0x2184x9, _0x2184x19
            }(function() {})
        }, _0x2184x9[_0x4197[118]] = _0x2184x3()
    }(_0x2184x9 = { exports: {} }, _0x2184x9[_0x4197[118]]), _0x2184x9[_0x4197[118]]);

    function _0x2184x22(_0x2184x9) { return (_0x2184x22 = _0x4197[55] == typeof Symbol && _0x4197[144] == typeof Symbol[_0x4197[145]] ? function(_0x2184x9) { return typeof _0x2184x9 } : function(_0x2184x9) { return _0x2184x9 && _0x4197[55] == typeof Symbol && _0x2184x9[_0x4197[66]] === Symbol && _0x2184x9 !== Symbol[_0x4197[64]] ? _0x4197[144] : typeof _0x2184x9 })(_0x2184x9) }

    function _0x2184x19(_0x2184x9, _0x2184x2) { if (!(_0x2184x9 instanceof _0x2184x2)) { throw new TypeError(_0x4197[146]) } }

    function _0x2184x10(_0x2184x9, _0x2184x2) {
        for (var _0x2184x3 = 0; _0x2184x3 < _0x2184x2[_0x4197[3]]; _0x2184x3++) {
            var _0x2184xc = _0x2184x2[_0x2184x3];
            _0x2184xc[_0x4197[147]] = _0x2184xc[_0x4197[147]] || !1, _0x2184xc[_0x4197[148]] = !0, _0x4197[61] in _0x2184xc && (_0x2184xc[_0x4197[149]] = !0), Object[_0x4197[150]](_0x2184x9, _0x2184xc[_0x4197[8]], _0x2184xc)
        }
    }

    function _0x2184x16(_0x2184x9, _0x2184x2, _0x2184x3) { return _0x2184x2 && _0x2184x10(_0x2184x9[_0x4197[64]], _0x2184x2), _0x2184x3 && _0x2184x10(_0x2184x9, _0x2184x3), _0x2184x9 }

    function _0x2184x17(_0x2184x9, _0x2184x2) {
        if (_0x4197[55] != typeof _0x2184x2 && null !== _0x2184x2) { throw new TypeError(_0x4197[151]) };
        _0x2184x9[_0x4197[64]] = Object[_0x4197[152]](_0x2184x2 && _0x2184x2[_0x4197[64]], { constructor: { value: _0x2184x9, writable: !0, configurable: !0 } }), _0x2184x2 && _0x2184x1b(_0x2184x9, _0x2184x2)
    }

    function _0x2184x1a(_0x2184x9) { return (_0x2184x1a = Object[_0x4197[153]] ? Object[_0x4197[154]] : function(_0x2184x9) { return _0x2184x9[_0x4197[155]] || Object[_0x4197[154]](_0x2184x9) })(_0x2184x9) }

    function _0x2184x1b(_0x2184x9, _0x2184x2) { return (_0x2184x1b = Object[_0x4197[153]] || function(_0x2184x9, _0x2184x2) { return _0x2184x9[_0x4197[155]] = _0x2184x2, _0x2184x9 })(_0x2184x9, _0x2184x2) }

    function _0x2184x1c(_0x2184x9) { if (void(0) === _0x2184x9) { throw new ReferenceError(_0x4197[156]) }; return _0x2184x9 }

    function _0x2184x1d(_0x2184x9, _0x2184x2) { return !_0x2184x2 || _0x4197[157] != typeof _0x2184x2 && _0x4197[55] != typeof _0x2184x2 ? _0x2184x1c(_0x2184x9) : _0x2184x2 }

    function _0x2184x27(_0x2184x9, _0x2184x2) {
        return function(_0x2184x9) { if (Array[_0x4197[14]](_0x2184x9)) { return _0x2184x9 } }(_0x2184x9) || function(_0x2184x9, _0x2184x2) {
            var _0x2184x3 = [],
                _0x2184xc = !0,
                _0x2184xd = !1,
                _0x2184xe = void(0);
            try { for (var _0x2184xf, _0x2184x10 = _0x2184x9[Symbol[_0x4197[145]]](); !(_0x2184xc = (_0x2184xf = _0x2184x10[_0x4197[159]]())[_0x4197[158]]) && (_0x2184x3[_0x4197[4]](_0x2184xf[_0x4197[61]]), !_0x2184x2 || _0x2184x3[_0x4197[3]] !== _0x2184x2); _0x2184xc = !0) {; } } catch (_0x2184x9) { _0x2184xd = !0, _0x2184xe = _0x2184x9 } finally { try { _0x2184xc || null == _0x2184x10[_0x4197[160]] || _0x2184x10[_0x4197[160]]() } finally { if (_0x2184xd) { throw _0x2184xe } } };
            return _0x2184x3
        }(_0x2184x9, _0x2184x2) || function() { throw new TypeError(_0x4197[161]) }()
    }

    function _0x2184x20(_0x2184x9) { return function(_0x2184x9) { if (Array[_0x4197[14]](_0x2184x9)) { for (var _0x2184x2 = 0, _0x2184x3 = new Array(_0x2184x9[_0x4197[3]]); _0x2184x2 < _0x2184x9[_0x4197[3]]; _0x2184x2++) { _0x2184x3[_0x2184x2] = _0x2184x9[_0x2184x2] }; return _0x2184x3 } }(_0x2184x9) || function(_0x2184x9) { if (Symbol[_0x4197[145]] in Object(_0x2184x9) || _0x4197[162] === Object[_0x4197[64]][_0x4197[163]][_0x4197[85]](_0x2184x9)) { return Array[_0x4197[164]](_0x2184x9) } }(_0x2184x9) || function() { throw new TypeError(_0x4197[165]) }() }
    var _0x2184x21, _0x2184x28, _0x2184x29, _0x2184x2a, _0x2184x2b, _0x2184x2c = Math[_0x4197[166]](2, -26),
        _0x2184x2d = function(_0x2184x9) { return Math[_0x4197[167]](_0x2184x9) <= _0x2184x2c },
        _0x2184x2e = function(_0x2184x9, _0x2184x2) { return Math[_0x4197[167]](_0x2184x9 - _0x2184x2) <= _0x2184x2c },
        _0x2184x2f = function(_0x2184x9, _0x2184x2, _0x2184x3, _0x2184xc) { return _0x2184x9 * _0x2184xc - _0x2184x2 * _0x2184x3 },
        _0x2184x30 = function(_0x2184x9, _0x2184x2, _0x2184x3) { return Math[_0x4197[168]](_0x2184x9, _0x2184x2) - _0x2184x2c <= _0x2184x3 && _0x2184x3 <= Math[_0x4197[169]](_0x2184x9, _0x2184x2) + _0x2184x2c },
        _0x2184x31 = function(_0x2184x9, _0x2184x2, _0x2184x3, _0x2184xc) { var _0x2184xd; return _0x2184x2 < _0x2184x9 && (_0x2184xd = _0x2184x9, _0x2184x9 = _0x2184x2, _0x2184x2 = _0x2184xd), _0x2184xc < _0x2184x3 && (_0x2184xd = _0x2184x3, _0x2184x3 = _0x2184xc, _0x2184xc = _0x2184xd), Math[_0x4197[168]](_0x2184x2, _0x2184xc) - Math[_0x4197[169]](_0x2184x9, _0x2184x3) },
        _0x2184x32 = performance || Date,
        _0x2184x33 = _0x2184x32[_0x4197[117]][_0x4197[115]](_0x2184x32),
        _0x2184x34 = 1,
        _0x2184x35 = function(_0x2184x9, _0x2184x2, _0x2184x3, _0x2184xc) { for (var _0x2184xd = 2 * Math[_0x4197[170]], _0x2184xe = _0x2184xd / _0x2184x3, _0x2184xf = [], _0x2184x10 = 0; _0x2184x10 < _0x2184xd - _0x2184x2c; _0x2184x10 += _0x2184xe) { _0x2184xf[_0x4197[4]](new _0x2184x39(_0x2184x9 + Math[_0x4197[171]](_0x2184x10) * _0x2184xc, _0x2184x2 + Math[_0x4197[172]](_0x2184x10) * _0x2184xc)) }; return _0x2184xf },
        _0x2184x36 = function(_0x2184x9, _0x2184x2, _0x2184x3) {
            return _0x4197[181][_0x4197[178]](function(_0x2184x9) {
                var _0x2184x3 = _0x4197[36];
                return _0x2184x9[_0x4197[180]](function(_0x2184x9) {
                    var _0x2184x2 = _0x2184x9.toString(16);
                    _0x2184x3 += _0x2184x2[_0x4197[3]] < 2 ? _0x4197[179][_0x4197[178]](_0x2184x2) : _0x2184x2
                }), _0x2184x3
            }(function(_0x2184x9) {
                var _0x2184x2, _0x2184x3, _0x2184xc, _0x2184xd, _0x2184xe, _0x2184xf, _0x2184x10, _0x2184x11, _0x2184x16 = _0x2184x9[_0x4197[173]],
                    _0x2184x17 = _0x2184x9[_0x4197[174]],
                    _0x2184x4 = _0x2184x9[_0x4197[175]];
                if (_0x2184x16 = Math[_0x4197[169]](0, Math[_0x4197[168]](360, _0x2184x16)), _0x2184x17 = Math[_0x4197[169]](0, Math[_0x4197[168]](100, _0x2184x17)), _0x2184x4 = Math[_0x4197[169]](0, Math[_0x4197[168]](100, _0x2184x4)), _0x2184x4 /= 100, 0 == (_0x2184x17 /= 100)) { return _0x2184x2 = _0x2184x3 = _0x2184xc = _0x2184x4, [Math[_0x4197[176]](255 * _0x2184x2), Math[_0x4197[176]](255 * _0x2184x3), Math[_0x4197[176]](255 * _0x2184xc)] };
                switch (_0x2184xf = _0x2184x4 * (1 - _0x2184x17), _0x2184x10 = _0x2184x4 * (1 - _0x2184x17 * (_0x2184xe = (_0x2184x16 /= 60) - (_0x2184xd = Math[_0x4197[177]](_0x2184x16)))), _0x2184x11 = _0x2184x4 * (1 - _0x2184x17 * (1 - _0x2184xe)), _0x2184xd) {
                    case 0:
                        _0x2184x2 = _0x2184x4, _0x2184x3 = _0x2184x11, _0x2184xc = _0x2184xf;
                        break;
                    case 1:
                        _0x2184x2 = _0x2184x10, _0x2184x3 = _0x2184x4, _0x2184xc = _0x2184xf;
                        break;
                    case 2:
                        _0x2184x2 = _0x2184xf, _0x2184x3 = _0x2184x4, _0x2184xc = _0x2184x11;
                        break;
                    case 3:
                        _0x2184x2 = _0x2184xf, _0x2184x3 = _0x2184x10, _0x2184xc = _0x2184x4;
                        break;
                    case 4:
                        _0x2184x2 = _0x2184x11, _0x2184x3 = _0x2184xf, _0x2184xc = _0x2184x4;
                        break;
                    default:
                        _0x2184x2 = _0x2184x4, _0x2184x3 = _0x2184xf, _0x2184xc = _0x2184x10
                };
                return [Math[_0x4197[176]](255 * _0x2184x2), Math[_0x4197[176]](255 * _0x2184x3), Math[_0x4197[176]](255 * _0x2184xc)]
            }({ h: _0x2184x9, s: _0x2184x2, v: _0x2184x3 })))
        },
        _0x2184x37 = Array[_0x4197[164]]({ length: 3e4 }),
        _0x2184x38 = 0,
        _0x2184x39 = function() {
            function _0x2184x3(_0x2184x9, _0x2184x2) { _0x2184x19(this, _0x2184x3), this[_0x4197[182]] = null, this[_0x4197[183]] = [], this[_0x4197[139]](_0x2184x9, _0x2184x2) }
            return _0x2184x16(_0x2184x3, [{ key: _0x4197[139], value: function(_0x2184x9, _0x2184x2) { return this[_0x4197[184]] = _0x2184x9 || 0, this[_0x4197[185]] = _0x2184x2 || (0 === _0x2184x2 ? 0 : this[_0x4197[184]]), this } }, {
                key: _0x4197[106],
                value: function(_0x2184x9) {
                    (-1 === this[_0x4197[183]][_0x4197[186]](_0x2184x9) && this[_0x4197[183]][_0x4197[4]](_0x2184x9), this[_0x4197[182]]) || _0x2184x3[_0x4197[187]][_0x4197[182]](this)[_0x4197[106]](this)
                }
            }, {
                key: _0x4197[142],
                value: function(_0x2184x9) {
                    var _0x2184x2 = this[_0x4197[183]][_0x4197[186]](_0x2184x9);
                    this[_0x4197[183]][_0x4197[188]](_0x2184x2, 1), this[_0x4197[182]] && !this[_0x4197[183]][_0x4197[3]] && this[_0x4197[182]][_0x4197[142]](this)
                }
            }, { key: _0x4197[189], value: function() { _0x2184x3[_0x4197[189]](this) } }, { key: _0x4197[190], value: function(_0x2184x9) { return this[_0x4197[184]] += _0x2184x9[_0x4197[184]], this[_0x4197[185]] += _0x2184x9[_0x4197[185]], this } }, { key: _0x4197[68], value: function(_0x2184x9) { return this[_0x4197[184]] -= _0x2184x9[_0x4197[184]], this[_0x4197[185]] -= _0x2184x9[_0x4197[185]], this } }, { key: _0x4197[191], value: function(_0x2184x9) { return this[_0x4197[184]] *= _0x2184x9[_0x4197[184]], this[_0x4197[185]] *= _0x2184x9[_0x4197[185]], this } }, { key: _0x4197[192], value: function(_0x2184x9) { return this[_0x4197[184]] *= _0x2184x9, this[_0x4197[185]] *= _0x2184x9, this } }, {
                key: _0x4197[193],
                value: function() {
                    var _0x2184x9 = this[_0x4197[184]],
                        _0x2184x2 = this[_0x4197[185]];
                    return Math[_0x4197[194]](_0x2184x9 * _0x2184x9 + _0x2184x2 * _0x2184x2)
                }
            }, { key: _0x4197[195], value: function() { var _0x2184x9 = this[_0x4197[193]](); return _0x2184x9 && this[_0x4197[192]](1 / _0x2184x9), this } }, { key: _0x4197[196], value: function(_0x2184x9) { return this[_0x4197[184]] = _0x2184x9[_0x4197[184]], this[_0x4197[185]] = _0x2184x9[_0x4197[185]], this } }, { key: _0x4197[197], value: function(_0x2184x9) { return Math[_0x4197[194]](this[_0x4197[198]](_0x2184x9)) } }, {
                key: _0x4197[198],
                value: function(_0x2184x9) {
                    var _0x2184x2 = this[_0x4197[184]] - _0x2184x9[_0x4197[184]],
                        _0x2184x3 = this[_0x4197[185]] - _0x2184x9[_0x4197[185]];
                    return _0x2184x2 * _0x2184x2 + _0x2184x3 * _0x2184x3
                }
            }, { key: _0x4197[199], value: function(_0x2184x9) { return this[_0x4197[184]] * _0x2184x9[_0x4197[184]] + this[_0x4197[185]] * _0x2184x9[_0x4197[185]] } }, {
                key: _0x4197[200],
                value: function(_0x2184x9) {
                    var _0x2184x2 = this[_0x4197[184]],
                        _0x2184x3 = this[_0x4197[185]],
                        _0x2184xc = Math[_0x4197[171]](_0x2184x9),
                        _0x2184xd = Math[_0x4197[172]](_0x2184x9);
                    return this[_0x4197[184]] = _0x2184x2 * _0x2184xc - _0x2184x3 * _0x2184xd, this[_0x4197[185]] = _0x2184x2 * _0x2184xd + _0x2184x3 * _0x2184xc, this
                }
            }, { key: _0x4197[201], value: function(_0x2184x9) { return Math[_0x4197[202]](this[_0x4197[184]] * _0x2184x9[_0x4197[185]] - _0x2184x9[_0x4197[184]] * this[_0x4197[185]], this[_0x4197[199]](_0x2184x9)) } }, { key: _0x4197[203], value: function() { return this[_0x4197[192]](-1) } }, { key: _0x4197[204], value: function(_0x2184x9) { return _0x2184x2e(this[_0x4197[184]], _0x2184x9[_0x4197[184]]) && _0x2184x2e(this[_0x4197[185]], _0x2184x9[_0x4197[185]]) } }, { key: _0x4197[205], value: function() { return new _0x2184x3(this[_0x4197[184]], this[_0x4197[185]]) } }], [{ key: _0x4197[206], value: function(_0x2184x9, _0x2184x2) { return _0x2184x38 ? _0x2184x37[--_0x2184x38][_0x4197[139]](_0x2184x9, _0x2184x2) : new _0x2184x3(_0x2184x9, _0x2184x2) } }, { key: _0x4197[205], value: function(_0x2184x9) { return _0x2184x3[_0x4197[206]](_0x2184x9[_0x4197[184]], _0x2184x9[_0x4197[185]]) } }, { key: _0x4197[3], value: function() { return _0x2184x38 } }, { key: _0x4197[189], value: function(_0x2184x9) { _0x2184x38 < 3e4 && (_0x2184x9[_0x4197[139]](), _0x2184x37[_0x2184x38++] = _0x2184x9) } }]), _0x2184x3
        }(),
        _0x2184x3a = function() {
            function _0x2184x3(_0x2184x9, _0x2184x2) { _0x2184x19(this, _0x2184x3), this[_0x4197[207]] = [], this[_0x4197[184]] = _0x2184x9, this[_0x4197[185]] = _0x2184x2 }
            return _0x2184x16(_0x2184x3, [{ key: _0x4197[106], value: function(_0x2184x9) { this[_0x4197[207]][_0x4197[4]](_0x2184x9), _0x2184x9[_0x4197[182]] = this } }, {
                key: _0x4197[142],
                value: function(_0x2184x9) {
                    var _0x2184x2 = this[_0x4197[207]],
                        _0x2184x3 = _0x2184x2[_0x4197[186]](_0x2184x9); - 1 !== _0x2184x3 && (_0x2184x2[_0x4197[188]](_0x2184x3, 1), _0x2184x9[_0x4197[182]] = null)
                }
            }]), _0x2184x3
        }(),
        _0x2184x3b = function() {
            function _0x2184xe(_0x2184x9, _0x2184x2, _0x2184x3) { _0x2184x19(this, _0x2184xe), this[_0x4197[208]] = _0x2184x9, this[_0x4197[209]] = _0x2184x2, this[_0x4197[210]] = new _0x2184x39(_0x2184x9 / 2, _0x2184x2 / 2), this[_0x4197[211]] = _0x2184x3, this[_0x4197[212]] = Math[_0x4197[213]](_0x2184x9 / _0x2184x3), this[_0x4197[173]] = Math[_0x4197[213]](_0x2184x2 / _0x2184x3), this[_0x4197[214]] = []; for (var _0x2184xc = 0; _0x2184xc < this[_0x4197[173]]; _0x2184xc++) { for (var _0x2184xd = 0; _0x2184xd < this[_0x4197[212]]; _0x2184xd++) { this[_0x4197[214]][_0x4197[4]](new _0x2184x3a(_0x2184xd, _0x2184xc)) } } }
            return _0x2184x16(_0x2184xe, [{ key: _0x4197[215], value: function() { var _0x2184x2 = 0; return this[_0x4197[214]][_0x4197[180]](function(_0x2184x9) { _0x2184x2 += _0x2184x9[_0x4197[207]][_0x4197[3]] }), _0x2184x2 } }, { key: _0x4197[182], value: function(_0x2184x9) { return this[_0x4197[216]](Math[_0x4197[177]](_0x2184x9[_0x4197[184]] / this[_0x4197[211]]), Math[_0x4197[177]](_0x2184x9[_0x4197[185]] / this[_0x4197[211]])) } }, { key: _0x4197[216], value: function(_0x2184x9, _0x2184x2) { return this[_0x4197[214]][_0x2184x9 + _0x2184x2 * this[_0x4197[212]]] } }, { key: _0x4197[217], value: function(_0x2184x2) { return this[_0x4197[182]](_0x2184x2)[_0x4197[207]][_0x4197[218]](function(_0x2184x9) { return _0x2184x9[_0x4197[204]](_0x2184x2) }) || _0x2184x2 } }, { key: _0x4197[219], value: function() { for (var _0x2184x2 = {}, _0x2184x9 = 0; _0x2184x9 < this[_0x4197[173]]; _0x2184x9++) { for (var _0x2184x3 = 0; _0x2184x3 < this[_0x4197[212]]; _0x2184x3++) { this[_0x4197[216]](_0x2184x3, _0x2184x9)[_0x4197[207]][_0x4197[180]](function(_0x2184x9) { _0x2184x9[_0x4197[183]][_0x4197[180]](function(_0x2184x9) { return _0x2184x2[_0x2184x9[_0x4197[220]]] = _0x2184x9 }) }) } }; return _0x2184x2 } }, {
                key: _0x4197[221],
                value: function(_0x2184x3) {
                    for (var _0x2184x9 = this[_0x4197[182]](_0x2184x3[_0x4197[222]]), _0x2184x2 = this[_0x4197[182]](_0x2184x3[_0x4197[223]]), _0x2184xc = Math[_0x4197[168]](_0x2184x9[_0x4197[184]], _0x2184x2[_0x4197[184]]), _0x2184xd = Math[_0x4197[169]](_0x2184x9[_0x4197[184]], _0x2184x2[_0x4197[184]]), _0x2184xe = Math[_0x4197[168]](_0x2184x9[_0x4197[185]], _0x2184x2[_0x4197[185]]), _0x2184xf = Math[_0x4197[169]](_0x2184x9[_0x4197[185]], _0x2184x2[_0x4197[185]]), _0x2184x10 = _0x2184x34++, _0x2184x11 = [], _0x2184x16 = _0x2184xe; _0x2184x16 <= _0x2184xf; _0x2184x16++) {
                        for (var _0x2184x17 = _0x2184xc; _0x2184x17 <= _0x2184xd; _0x2184x17++) {
                            this[_0x4197[216]](_0x2184x17, _0x2184x16)[_0x4197[207]][_0x4197[180]](function(_0x2184x9) {
                                _0x2184x9[_0x4197[183]][_0x4197[180]](function(_0x2184x9) {
                                    if (_0x2184x9[_0x4197[224]] !== _0x2184x10) {
                                        var _0x2184x2 = _0x2184x9[_0x4197[225]](_0x2184x3);
                                        _0x2184x2 && _0x2184x11[_0x4197[4]](_0x2184x2), _0x2184x9[_0x4197[224]] = _0x2184x10
                                    }
                                })
                            })
                        }
                    };
                    return _0x2184x11
                }
            }]), _0x2184xe
        }(),
        _0x2184x3c = function() {
            function _0x2184x3(_0x2184x9, _0x2184x2) { _0x2184x19(this, _0x2184x3), _0x2184x9[_0x4197[204]](_0x2184x2), this[_0x4197[224]] = 0, this[_0x4197[226]] = null, this[_0x4197[222]] = _0x2184x9, this[_0x4197[223]] = _0x2184x2, this[_0x4197[227]]() }
            return _0x2184x16(_0x2184x3, [{
                key: _0x4197[227],
                value: function() {
                    var _0x2184x9 = this[_0x4197[222]],
                        _0x2184x2 = this[_0x4197[223]];
                    this[_0x4197[228]] = _0x2184x2[_0x4197[205]]()[_0x4197[68]](_0x2184x9);
                    var _0x2184x3 = _0x2184x9[_0x4197[185]] - _0x2184x2[_0x4197[185]],
                        _0x2184xc = _0x2184x2[_0x4197[184]] - _0x2184x9[_0x4197[184]],
                        _0x2184xd = Math[_0x4197[194]](_0x2184x3 * _0x2184x3 + _0x2184xc * _0x2184xc);
                    _0x2184x3 /= _0x2184xd, _0x2184xc /= _0x2184xd, this[_0x4197[229]] = _0x2184x3, this[_0x4197[230]] = _0x2184xc, this[_0x4197[231]] = -(_0x2184x3 * _0x2184x9[_0x4197[184]] + _0x2184xc * _0x2184x9[_0x4197[185]])
                }
            }, { key: _0x4197[205], value: function() { return new _0x2184x3(this[_0x4197[222]], this[_0x4197[223]]) } }, { key: _0x4197[232], value: function() { var _0x2184x9 = this[_0x4197[222]]; return this[_0x4197[222]] = this[_0x4197[223]], this[_0x4197[223]] = _0x2184x9, this[_0x4197[227]](), this } }, { key: _0x4197[106], value: function(_0x2184x9) { return this[_0x4197[226]] = _0x2184x9, this[_0x4197[222]][_0x4197[106]](this), this[_0x4197[223]][_0x4197[106]](this), this } }, { key: _0x4197[142], value: function() { this[_0x4197[226]] = null, this[_0x4197[222]][_0x4197[142]](this), this[_0x4197[223]][_0x4197[142]](this) } }, { key: _0x4197[3], value: function() { return this[_0x4197[228]][_0x4197[193]]() } }, {
                key: _0x4197[233],
                value: function(_0x2184x9) {
                    var _0x2184x2 = _0x2184x9[_0x4197[229]],
                        _0x2184x3 = _0x2184x9[_0x4197[230]],
                        _0x2184xc = this[_0x4197[229]],
                        _0x2184xd = this[_0x4197[230]];
                    return _0x2184x2f(_0x2184x2, _0x2184x3, _0x2184xc, _0x2184xd)
                }
            }, {
                key: _0x4197[225],
                value: function(_0x2184x9) {
                    var _0x2184x2 = _0x2184x9[_0x4197[229]],
                        _0x2184x3 = _0x2184x9[_0x4197[230]],
                        _0x2184xc = _0x2184x9[_0x4197[231]],
                        _0x2184xd = _0x2184x9[_0x4197[222]],
                        _0x2184xe = _0x2184x9[_0x4197[223]],
                        _0x2184xf = this[_0x4197[229]],
                        _0x2184x10 = this[_0x4197[230]],
                        _0x2184x11 = this[_0x4197[231]],
                        _0x2184x16 = this[_0x4197[222]],
                        _0x2184x17 = this[_0x4197[223]],
                        _0x2184x4 = _0x2184x2f(_0x2184x2, _0x2184x3, _0x2184xf, _0x2184x10);
                    if (!_0x2184x2d(_0x2184x4)) {
                        var _0x2184x7 = -_0x2184x2f(_0x2184xc, _0x2184x3, _0x2184x11, _0x2184x10) / _0x2184x4,
                            _0x2184x18 = -_0x2184x2f(_0x2184x2, _0x2184xc, _0x2184xf, _0x2184x11) / _0x2184x4,
                            _0x2184x19 = _0x2184x30(_0x2184xd[_0x4197[184]], _0x2184xe[_0x4197[184]], _0x2184x7) && _0x2184x30(_0x2184xd[_0x4197[185]], _0x2184xe[_0x4197[185]], _0x2184x18) && _0x2184x30(_0x2184x16[_0x4197[184]], _0x2184x17[_0x4197[184]], _0x2184x7) && _0x2184x30(_0x2184x16[_0x4197[185]], _0x2184x17[_0x4197[185]], _0x2184x18) && new _0x2184x39(_0x2184x7, _0x2184x18);
                        return _0x2184x19 ? { point: _0x2184x16[_0x4197[204]](_0x2184x19) && _0x2184x16 || _0x2184x17[_0x4197[204]](_0x2184x19) && _0x2184x17 || _0x2184xd[_0x4197[204]](_0x2184x19) && _0x2184xd || _0x2184xe[_0x4197[204]](_0x2184x19) && _0x2184xe || _0x2184x19, segment: this, distance: _0x2184x19[_0x4197[198]](_0x2184xd), overlay: !1, zn: Math[_0x4197[234]](_0x2184x4) } : null
                    };
                    var _0x2184x1a = _0x2184x31(_0x2184xd[_0x4197[184]], _0x2184xe[_0x4197[184]], _0x2184x16[_0x4197[184]], _0x2184x17[_0x4197[184]]),
                        _0x2184x1b = _0x2184x31(_0x2184xd[_0x4197[185]], _0x2184xe[_0x4197[185]], _0x2184x16[_0x4197[185]], _0x2184x17[_0x4197[185]]);
                    if (_0x2184x2d(_0x2184x2f(_0x2184x2, _0x2184xc, _0x2184xf, _0x2184x11)) && _0x2184x2d(_0x2184x2f(_0x2184x3, _0x2184xc, _0x2184x10, _0x2184x11)) && -_0x2184x2c <= _0x2184x1a && -_0x2184x2c <= _0x2184x1b) { var _0x2184x1c; if (_0x2184x2c <= _0x2184x1a || _0x2184x2c <= _0x2184x1b) { return { point: _0x2184x1c = _0x2184x30(_0x2184x16[_0x4197[184]], _0x2184x17[_0x4197[184]], _0x2184xd[_0x4197[184]]) && _0x2184x30(_0x2184x16[_0x4197[185]], _0x2184x17[_0x4197[185]], _0x2184xd[_0x4197[185]]) ? _0x2184x16[_0x4197[204]](_0x2184xd) && _0x2184x16 || _0x2184x17[_0x4197[204]](_0x2184xd) && _0x2184x17 || _0x2184xd : _0x2184xd[_0x4197[198]](_0x2184x16) >= _0x2184xd[_0x4197[198]](_0x2184x17) ? _0x2184x17 : _0x2184x16, segment: this, distance: _0x2184x1c[_0x4197[198]](_0x2184xd), overlay: !0, zn: 0 } }; var _0x2184x1d = _0x2184x16[_0x4197[204]](_0x2184xd) || _0x2184x16[_0x4197[204]](_0x2184xe) ? _0x2184x16 : _0x2184x17; return { point: _0x2184x1d, segment: this, distance: _0x2184x1d[_0x4197[198]](_0x2184xd), overlay: !1, zn: 0 } };
                    return null
                }
            }, { key: _0x4197[235], value: function(_0x2184x9) { return this[_0x4197[222]] === _0x2184x9 || this[_0x4197[223]] === _0x2184x9 } }, { key: _0x4197[236], get: function() {} }]), _0x2184x3
        }(),
        _0x2184x3d = function(_0x2184x9, _0x2184x2, _0x2184x3) {
            var _0x2184xc = _0x2184x9[_0x4197[184]] - _0x2184x3[_0x4197[184]],
                _0x2184xd = _0x2184x9[_0x4197[185]] - _0x2184x3[_0x4197[185]],
                _0x2184xe = _0x2184x2[_0x4197[184]] - _0x2184x3[_0x4197[184]],
                _0x2184xf = _0x2184x2[_0x4197[185]] - _0x2184x3[_0x4197[185]];
            if (0 < _0x2184xd * _0x2184xf) { return 1 };
            var _0x2184x10 = _0x2184xc * _0x2184xf - _0x2184xd * _0x2184xe,
                _0x2184x11 = _0x2184x2d(_0x2184x10) ? 0 : Math[_0x4197[234]](_0x2184x10);
            return 0 === _0x2184x11 ? _0x2184xc * _0x2184xe <= 0 ? 0 : 1 : _0x2184xd < 0 ? -_0x2184x11 : _0x2184xf < 0 ? _0x2184x11 : 1
        },
        _0x2184x3e = function() {
            function _0x2184xc(_0x2184x9) {
                _0x2184x19(this, _0x2184xc), this[_0x4197[183]] = [], this[_0x4197[236]] = null;
                for (var _0x2184x2 = _0x2184x9[_0x4197[3]], _0x2184x3 = 0; _0x2184x3 < _0x2184x2;) { this[_0x4197[183]][_0x4197[4]](new _0x2184x3c(_0x2184x9[_0x2184x3++], _0x2184x9[_0x2184x3 < _0x2184x2 ? _0x2184x3 : 0])) };
                this[_0x4197[237]]()
            }
            return _0x2184x16(_0x2184xc, [{
                key: _0x4197[106],
                value: function(_0x2184x9) {
                    var _0x2184x2 = this;
                    _0x2184x9 && (this[_0x4197[236]] = _0x2184x9), this[_0x4197[183]][_0x4197[180]](function(_0x2184x9) { return _0x2184x9[_0x4197[106]](_0x2184x2) })
                }
            }, { key: _0x4197[142], value: function() { this[_0x4197[183]][_0x4197[180]](function(_0x2184x9) { return _0x2184x9[_0x4197[142]]() }) } }, { key: _0x4197[232], value: function() { return this[_0x4197[183]][_0x4197[232]](), this[_0x4197[183]][_0x4197[180]](function(_0x2184x9) { return _0x2184x9[_0x4197[232]]() }), this } }, {
                key: _0x4197[238],
                value: function(_0x2184x2, _0x2184x9) {
                    if (!_0x2184x2[_0x4197[235]](_0x2184x9)) {
                        var _0x2184x3 = this[_0x4197[183]][_0x4197[239]](function(_0x2184x9) { return _0x2184x9 === _0x2184x2 }),
                            _0x2184xc = new _0x2184x3c(_0x2184x2[_0x4197[222]], _0x2184x9)[_0x4197[106]](this),
                            _0x2184xd = new _0x2184x3c(_0x2184x9, _0x2184x2[_0x4197[223]])[_0x4197[106]](this);
                        _0x2184x2[_0x4197[142]](), this[_0x4197[183]][_0x4197[188]](_0x2184x3, 1, _0x2184xc, _0x2184xd)
                    }
                }
            }, { key: _0x4197[240], value: function(_0x2184x2) { return this[_0x4197[183]][_0x4197[241]](function(_0x2184x9) { return _0x2184x9[_0x4197[235]](_0x2184x2) }) } }, { key: _0x4197[242], value: function(_0x2184x2) { return this[_0x4197[183]][_0x4197[239]](function(_0x2184x9) { return _0x2184x9[_0x4197[222]] === _0x2184x2 }) } }, {
                key: _0x4197[188],
                value: function(_0x2184x9, _0x2184x2, _0x2184x3) {
                    var _0x2184xc;
                    (_0x2184xc = this[_0x4197[183]])[_0x4197[188]][_0x4197[141]](_0x2184xc, [_0x2184x2, _0x2184x3 - _0x2184x2][_0x4197[178]](_0x2184x20(_0x2184x9[_0x4197[183]])))[_0x4197[180]](function(_0x2184x9) { return _0x2184x9[_0x4197[142]]() }), _0x2184x9[_0x4197[106]](this)
                }
            }, {
                key: _0x4197[243],
                value: function(_0x2184x9, _0x2184x2, _0x2184x3) {
                    var _0x2184xc = this[_0x4197[183]][_0x4197[188]](_0x2184x2, _0x2184x3 - _0x2184x2);
                    this[_0x4197[142]](), this[_0x4197[183]] = _0x2184xc[_0x4197[178]](_0x2184x9[_0x4197[232]]()[_0x4197[183]]), _0x2184x9[_0x4197[106]](this)
                }
            }, {
                key: _0x4197[244],
                value: function(_0x2184x9, _0x2184x2, _0x2184x3) {
                    for (var _0x2184xc, _0x2184xd = this, _0x2184xe = [], _0x2184xf = 0; _0x2184xf < _0x2184x9[_0x4197[3]] - 1; _0x2184xf++) { _0x2184xe[_0x4197[4]](new _0x2184x3c(_0x2184x9[_0x2184xf], _0x2184x9[_0x2184xf + 1])) };
                    var _0x2184x10 = (_0x2184xc = this[_0x4197[183]])[_0x4197[188]][_0x4197[141]](_0x2184xc, [_0x2184x2, _0x2184x3 - _0x2184x2][_0x4197[178]](_0x2184xe));
                    _0x2184xe[_0x4197[180]](function(_0x2184x9) { return _0x2184x9[_0x4197[106]](_0x2184xd) }), _0x2184x10[_0x4197[180]](function(_0x2184x9) { return _0x2184x9[_0x4197[142]]() })
                }
            }, {
                key: _0x4197[245],
                value: function(_0x2184x9, _0x2184x2, _0x2184x3) {
                    for (var _0x2184xc = this, _0x2184xd = [], _0x2184xe = 0; _0x2184xe < _0x2184x9[_0x4197[3]] - 1; _0x2184xe++) { _0x2184xd[_0x4197[4]](new _0x2184x3c(_0x2184x9[_0x2184xe], _0x2184x9[_0x2184xe + 1])) };
                    var _0x2184xf = this[_0x4197[183]][_0x4197[188]](_0x2184x2, _0x2184x3 - _0x2184x2);
                    this[_0x4197[142]](), _0x2184xd[_0x4197[232]]()[_0x4197[180]](function(_0x2184x9) { return _0x2184x9[_0x4197[232]]()[_0x4197[106]](_0x2184xc) }), this[_0x4197[183]] = _0x2184xf[_0x4197[178]](_0x2184xd)
                }
            }, { key: _0x4197[207], value: function() { return this[_0x4197[183]][_0x4197[246]](function(_0x2184x9) { return _0x2184x9[_0x4197[222]] }) } }, {
                key: _0x4197[221],
                value: function(_0x2184x3) {
                    var _0x2184xc = [];
                    return 1 < this[_0x4197[183]][_0x4197[3]] && this[_0x4197[183]][_0x4197[180]](function(_0x2184x9) {
                        var _0x2184x2 = _0x2184x9[_0x4197[225]](_0x2184x3);
                        _0x2184x2 && _0x2184xc[_0x4197[4]](_0x2184x2)
                    }), _0x2184xc[_0x4197[24]](function(_0x2184x9, _0x2184x2) { return _0x2184x9[_0x4197[197]] - _0x2184x2[_0x4197[197]] }), _0x2184xc
                }
            }, {
                key: _0x4197[247],
                value: function(_0x2184x9) {
                    for (var _0x2184x2 = this[_0x4197[183]][_0x4197[3]], _0x2184x3 = 1, _0x2184xc = 0; _0x2184xc < _0x2184x2; _0x2184xc++) {
                        var _0x2184xd = this[_0x4197[183]][_0x2184xc],
                            _0x2184xe = _0x2184xd[_0x4197[222]],
                            _0x2184xf = _0x2184xd[_0x4197[223]],
                            _0x2184x10 = _0x2184x3d(_0x2184xe, _0x2184xf, _0x2184x9);
                        if (0 === _0x2184x10) { return !0 };
                        _0x2184x3 *= _0x2184x10
                    };
                    return 1 !== _0x2184x3
                }
            }, {
                key: _0x4197[248],
                value: function() {
                    var _0x2184xc = 0;
                    return this[_0x4197[183]][_0x4197[180]](function(_0x2184x9) {
                        var _0x2184x2 = _0x2184x9[_0x4197[222]],
                            _0x2184x3 = _0x2184x9[_0x4197[223]];
                        _0x2184xc += (_0x2184x2[_0x4197[184]] + _0x2184x3[_0x4197[184]]) * (_0x2184x3[_0x4197[185]] - _0x2184x2[_0x4197[185]])
                    }), _0x2184xc / 2
                }
            }, { key: _0x4197[249], value: function() { var _0x2184x9 = this[_0x4197[248]](); return _0x2184x9 < 0 && (_0x2184x9 *= -1), _0x2184x9 } }, {
                key: _0x4197[250],
                value: function() {
                    var _0x2184x9 = new Path2D,
                        _0x2184x2 = this[_0x4197[183]],
                        _0x2184x3 = _0x2184x2[_0x4197[3]],
                        _0x2184xc = _0x2184x2[0][_0x4197[222]];
                    _0x2184x9[_0x4197[251]](_0x2184xc[_0x4197[184]], _0x2184xc[_0x4197[185]]);
                    for (var _0x2184xd = 1; _0x2184xd < _0x2184x3; _0x2184xd++) {
                        var _0x2184xe = _0x2184x2[_0x2184xd][_0x4197[222]];
                        _0x2184x9[_0x4197[252]](_0x2184xe[_0x4197[184]], _0x2184xe[_0x4197[185]])
                    };
                    _0x2184x9[_0x4197[253]](), this[_0x4197[254]] = _0x2184x9, this[_0x4197[237]]()
                }
            }, {
                key: _0x4197[237],
                value: function() {
                    var _0x2184xd = 1 / 0,
                        _0x2184xe = -1 / 0,
                        _0x2184xf = 1 / 0,
                        _0x2184x10 = -1 / 0;
                    this[_0x4197[183]][_0x4197[180]](function(_0x2184x9) {
                        var _0x2184x2 = _0x2184x9[_0x4197[222]],
                            _0x2184x3 = _0x2184x2[_0x4197[184]],
                            _0x2184xc = _0x2184x2[_0x4197[185]];
                        _0x2184xd = Math[_0x4197[168]](_0x2184xd, _0x2184x3), _0x2184xe = Math[_0x4197[169]](_0x2184xe, _0x2184x3), _0x2184xf = Math[_0x4197[168]](_0x2184xf, _0x2184xc), _0x2184x10 = Math[_0x4197[169]](_0x2184x10, _0x2184xc)
                    }), this[_0x4197[255]] = { left: _0x2184xd, right: _0x2184xe, top: _0x2184xf, bottom: _0x2184x10 }
                }
            }]), _0x2184xc
        }(),
        _0x2184x3f = function() {
            function _0x2184x11(_0x2184x9, _0x2184x2) {
                if (_0x2184x19(this, _0x2184x11), !_0x2184x9) {
                    var _0x2184x3 = window[_0x4197[256]] / 2,
                        _0x2184xc = window[_0x4197[257]] / 2,
                        _0x2184xd = 0.85 * Math[_0x4197[168]](_0x2184x3, _0x2184xc),
                        _0x2184xe = 2 * Math[_0x4197[170]],
                        _0x2184xf = _0x2184xe / 200;
                    _0x2184x9 = [];
                    for (var _0x2184x10 = 0; _0x2184x10 < _0x2184xe - _0x2184x2c; _0x2184x10 += _0x2184xf) { _0x2184x9[_0x4197[4]](new _0x2184x39(_0x2184x3 + Math[_0x4197[171]](_0x2184x10) * _0x2184xd, _0x2184xc + Math[_0x4197[172]](_0x2184x10) * _0x2184xd)) }
                };
                this[_0x4197[258]] = _0x2184x2, this[_0x4197[259]] = new _0x2184x3e(_0x2184x9)
            }
            return _0x2184x16(_0x2184x11, [{ key: _0x4197[221], value: function(_0x2184x9) { return this[_0x4197[259]][_0x4197[221]](_0x2184x9)[_0x4197[261]](function(_0x2184x9) { return !_0x2184x9[_0x4197[260]] }) } }]), _0x2184x11
        }(),
        _0x2184x40 = function() {
            function _0x2184x10(_0x2184x9, _0x2184x2, _0x2184x3, _0x2184xc, _0x2184xd, _0x2184xe, _0x2184xf) { _0x2184x19(this, _0x2184x10), this[_0x4197[19]] = _0x2184x9, this[_0x4197[262]] = _0x2184x2, this[_0x4197[263]] = _0x2184x3, this[_0x4197[264]] = _0x2184xc, this[_0x4197[265]] = _0x2184xd, this[_0x4197[266]] = _0x2184xe, this[_0x4197[267]] = _0x2184xe, this[_0x4197[268]] = _0x2184xf }
            return _0x2184x16(_0x2184x10, [{ key: _0x4197[269], value: function(_0x2184x9) { this[_0x4197[267]] -= _0x2184x9, 0 < this[_0x4197[267]] && this[_0x4197[264]][_0x4197[190]](this[_0x4197[265]][_0x4197[205]]()[_0x4197[192]](_0x2184x9 / 1e3)) } }, {
                key: _0x4197[270],
                value: function(_0x2184x9, _0x2184x2, _0x2184x3, _0x2184xc) {
                    var _0x2184xd, _0x2184xe = Math[_0x4197[177]](255 * ((_0x2184xd = this[_0x4197[267]] / this[_0x4197[266]]) * _0x2184xd * _0x2184xd * (_0x2184xd * (6 * _0x2184xd - 15) + 10))).toString(16);
                    _0x2184xe[_0x4197[3]] < 2 && (_0x2184xe = _0x4197[179] + _0x2184xe);
                    var _0x2184xf = this[_0x4197[263]] ? this[_0x4197[263]][_0x4197[264]][_0x4197[205]]()[_0x4197[190]](this[_0x4197[264]]) : this[_0x4197[264]],
                        _0x2184x10 = 30 * _0x2184xc / window[_0x4197[271]];
                    _0x2184x9[_0x4197[272]] = _0x4197[36][_0x4197[178]](this[_0x4197[262]])[_0x4197[178]](this[_0x4197[268]] ? _0x2184xe : _0x4197[36]), _0x2184x9[_0x4197[273]] = _0x4197[275][_0x4197[178]](_0x2184x10, _0x4197[274])[_0x4197[178]](_0x2184x2), _0x2184x9[_0x4197[276]] = _0x4197[210], _0x2184x9[_0x4197[277]] = _0x4197[278], _0x2184x9[_0x4197[279]](this[_0x4197[19]], _0x2184xf[_0x4197[184]] * _0x2184x3, _0x2184xf[_0x4197[185]] * _0x2184x3)
                }
            }]), _0x2184x10
        }(),
        _0x2184x41 = ((_0x2184x21 = new Path2D)[_0x4197[251]](-1, -1), _0x2184x21[_0x4197[252]](1, -1), _0x2184x21[_0x4197[252]](1, 1), _0x2184x21[_0x4197[252]](-1, 1), _0x2184x21[_0x4197[253]](), _0x2184x21),
        _0x2184x42 = function() {
            function _0x2184x11(_0x2184x9, _0x2184x2, _0x2184x3, _0x2184xc, _0x2184xd, _0x2184xe, _0x2184xf, _0x2184x10) { _0x2184x19(this, _0x2184x11), this[_0x4197[262]] = _0x2184x9, this[_0x4197[264]] = _0x2184x2, this[_0x4197[265]] = _0x2184x3, this[_0x4197[280]] = _0x2184x10, this[_0x4197[200]] = _0x2184xc, this[_0x4197[281]] = _0x2184xd, this[_0x4197[282]] = _0x2184xe, this[_0x4197[283]] = Math[_0x4197[284]]() * Math[_0x4197[170]] * 2, this[_0x4197[267]] = _0x2184xf }
            return _0x2184x16(_0x2184x11, [{
                key: _0x4197[269],
                value: function(_0x2184x9) {
                    if (this[_0x4197[267]] -= _0x2184x9, 0 < this[_0x4197[267]]) {
                        var _0x2184x2 = _0x2184x9 / 1e3;
                        this[_0x4197[280]] && (this[_0x4197[265]][_0x4197[184]] += this[_0x4197[280]][_0x4197[184]] * _0x2184x2, this[_0x4197[265]][_0x4197[185]] += this[_0x4197[280]][_0x4197[185]] * _0x2184x2), this[_0x4197[264]][_0x4197[184]] += this[_0x4197[265]][_0x4197[184]] * _0x2184x2, this[_0x4197[264]][_0x4197[185]] += this[_0x4197[265]][_0x4197[185]] * _0x2184x2, this[_0x4197[283]] += this[_0x4197[200]] * _0x2184x2, this[_0x4197[281]] += this[_0x4197[282]] * _0x2184x2
                    }
                }
            }, {
                key: _0x4197[270],
                value: function(_0x2184x9) {
                    var _0x2184x2 = this[_0x4197[264]],
                        _0x2184x3 = _0x2184x2[_0x4197[184]],
                        _0x2184xc = _0x2184x2[_0x4197[185]],
                        _0x2184xd = this[_0x4197[283]],
                        _0x2184xe = this[_0x4197[262]],
                        _0x2184xf = this[_0x4197[281]];
                    _0x2184x9[_0x4197[285]](), _0x2184x9[_0x4197[286]](_0x2184x3, _0x2184xc), _0x2184x9[_0x4197[200]](_0x2184xd), _0x2184x9[_0x4197[281]](_0x2184xf, _0x2184xf), _0x2184x9[_0x4197[272]] = _0x2184xe, _0x2184x9[_0x4197[287]](_0x2184x41), _0x2184x9[_0x4197[288]]()
                }
            }]), _0x2184x11
        }(),
        _0x2184x43 = function() {
            function _0x2184x18(_0x2184x9, _0x2184x2) {
                var _0x2184x3 = this;
                _0x2184x19(this, _0x2184x18), this[_0x4197[289]] = !1, this[_0x4197[290]] = !1, this[_0x4197[244]] = !1, this[_0x4197[245]] = !1, this[_0x4197[291]] = { shift: !1, ctrl: !1, alt: !1, meta: !1 }, this[_0x4197[292]] = null, this[_0x4197[293]] = null, this[_0x4197[294]] = { left: !1, middle: !1, right: !1 }, this[_0x4197[295]] = _0x2184x2;
                var _0x2184xc = function(_0x2184x9) { return _0x2184x3[_0x4197[296]](_0x2184x9, !0) },
                    _0x2184xd = function(_0x2184x9) { return _0x2184x3[_0x4197[296]](_0x2184x9, !1) };
                _0x2184x2 && (_0x2184x2[_0x4197[138]](), window[_0x4197[47]](_0x4197[297], _0x2184xc, !1), window[_0x4197[47]](_0x4197[298], _0x2184xd, !1));
                var _0x2184xe = function(_0x2184x9) { return _0x2184x9[_0x4197[299]]() };
                _0x2184x9[_0x4197[47]](_0x4197[300], _0x2184xe, !1);
                var _0x2184xf = function(_0x2184x9) { return _0x2184x3[_0x4197[301]](_0x2184x9, !0) },
                    _0x2184x10 = function(_0x2184x9) { return _0x2184x3[_0x4197[301]](_0x2184x9, !1) },
                    _0x2184x11 = function() { _0x2184x3[_0x4197[293]] = _0x2184x3[_0x4197[292]], _0x2184x3[_0x4197[292]] = null, event[_0x4197[299]]() },
                    _0x2184x16 = function(_0x2184x9) { null === _0x2184x3[_0x4197[292]] && (_0x2184x3[_0x4197[292]] = {}), _0x2184x3[_0x4197[292]][_0x4197[184]] = _0x2184x9[_0x4197[302]], _0x2184x3[_0x4197[292]][_0x4197[185]] = _0x2184x9[_0x4197[303]], _0x2184x9[_0x4197[299]]() },
                    _0x2184x17 = function(_0x2184x9) {
                        _0x2184x16(_0x2184x9);
                        var _0x2184x2 = _0x2184x9[_0x4197[294]];
                        _0x2184x3[_0x4197[294]] = { left: !!(1 & _0x2184x2), middle: !!(4 & _0x2184x2), right: !!(2 & _0x2184x2) }, _0x2184x9[_0x4197[299]]()
                    };
                _0x2184x9[_0x4197[47]](_0x4197[304], _0x2184x17, !1), _0x2184x9[_0x4197[47]](_0x4197[305], _0x2184x16, !1), _0x2184x9[_0x4197[47]](_0x4197[306], _0x2184x11, !1), _0x2184x9[_0x4197[47]](_0x4197[307], _0x2184xf, !1), _0x2184x9[_0x4197[47]](_0x4197[308], _0x2184x10, !1);
                var _0x2184x4 = function() { _0x2184x3[_0x4197[293]] = _0x2184x3[_0x4197[292]], _0x2184x3[_0x4197[292]] = null, event[_0x4197[299]]() },
                    _0x2184x7 = function(_0x2184x9) {
                        null === _0x2184x3[_0x4197[292]] && (_0x2184x3[_0x4197[292]] = {});
                        var _0x2184x2 = _0x2184x9[_0x4197[309]][0];
                        _0x2184x3[_0x4197[292]][_0x4197[184]] = _0x2184x2[_0x4197[310]], _0x2184x3[_0x4197[292]][_0x4197[185]] = _0x2184x2[_0x4197[311]], _0x2184x9[_0x4197[299]]()
                    };
                _0x2184x9[_0x4197[47]](_0x4197[312], _0x2184x7, !1), _0x2184x9[_0x4197[47]](_0x4197[313], _0x2184x7, !1), _0x2184x9[_0x4197[47]](_0x4197[314], _0x2184x4, !1), _0x2184x9[_0x4197[47]](_0x4197[315], _0x2184x4, !1), this[_0x4197[316]] = function() { _0x2184x9[_0x4197[48]](_0x4197[300], _0x2184xe, !1), _0x2184x2 && (window[_0x4197[48]](_0x4197[297], _0x2184xc, !1), window[_0x4197[48]](_0x4197[298], _0x2184xd, !1)), _0x2184x9[_0x4197[48]](_0x4197[304], _0x2184x17, !1), _0x2184x9[_0x4197[48]](_0x4197[305], _0x2184x16, !1), _0x2184x9[_0x4197[48]](_0x4197[306], _0x2184x11, !1), _0x2184x9[_0x4197[48]](_0x4197[307], _0x2184xf, !1), _0x2184x9[_0x4197[48]](_0x4197[308], _0x2184x10, !1), _0x2184x9[_0x4197[48]](_0x4197[312], touchHandler, !1), _0x2184x9[_0x4197[48]](_0x4197[313], touchHandler, !1) }
            }
            return _0x2184x16(_0x2184x18, [{ key: _0x4197[317], value: function() { return this[_0x4197[289]] || this[_0x4197[290]] || this[_0x4197[244]] || this[_0x4197[245]] } }, {
                key: _0x4197[296],
                value: function(_0x2184x9, _0x2184x2) {
                    if (_0x2184x9[_0x4197[318]] === document[_0x4197[319]]) {
                        switch (_0x2184x9[_0x4197[321]]) {
                            case 38:
                                ;
                            case 87:
                                this[_0x4197[289]] = _0x2184x2;
                                break;
                            case 40:
                                ;
                            case 83:
                                this[_0x4197[290]] = _0x2184x2;
                                break;
                            case 37:
                                ;
                            case 65:
                                this[_0x4197[244]] = _0x2184x2;
                                break;
                            case 39:
                                ;
                            case 68:
                                this[_0x4197[245]] = _0x2184x2;
                                break;
                            case 67:
                                _0x2184x2 || this[_0x4197[295]][_0x4197[320]]()
                        };
                        this[_0x4197[291]][_0x4197[322]] = _0x2184x9[_0x4197[323]], this[_0x4197[291]][_0x4197[324]] = _0x2184x9[_0x4197[325]], this[_0x4197[291]][_0x4197[326]] = _0x2184x9[_0x4197[327]], this[_0x4197[291]][_0x4197[328]] = _0x2184x9[_0x4197[329]]
                    }
                }
            }, {
                key: _0x4197[301],
                value: function(_0x2184x9, _0x2184x2) {
                    switch (_0x2184x9[_0x4197[330]]) {
                        case 0:
                            this[_0x4197[294]][_0x4197[244]] = _0x2184x2;
                            break;
                        case 1:
                            this[_0x4197[294]][_0x4197[278]] = _0x2184x2;
                            break;
                        case 2:
                            this[_0x4197[294]][_0x4197[245]] = _0x2184x2
                    }
                }
            }]), _0x2184x18
        }(),
        _0x2184x44 = function(_0x2184x9, _0x2184x2, _0x2184x3) { _0x2184x9[_0x4197[272]] = _0x2184x3, _0x2184x9[_0x4197[287]](_0x2184x2) },
        _0x2184x45 = function(_0x2184x9, _0x2184x2, _0x2184x3, _0x2184xc, _0x2184xd) { _0x2184x3[_0x4197[331]][_0x4197[183]][_0x4197[3]] && (_0x2184x9[_0x4197[332]] = _0x2184xd, _0x2184x9[_0x4197[333]] = _0x2184x2, _0x2184x9[_0x4197[334]](_0x2184x3[_0x4197[331]][_0x4197[254]])) },
        _0x2184x46 = ((_0x2184x29 = new Path2D)[_0x4197[251]](-15, -15), _0x2184x29[_0x4197[252]](-5, -5), _0x2184x29[_0x4197[252]](0, -15), _0x2184x29[_0x4197[252]](5, -5), _0x2184x29[_0x4197[252]](15, -15), _0x2184x29[_0x4197[252]](10, 5), _0x2184x29[_0x4197[252]](-10, 5), _0x2184x29[_0x4197[253]](), _0x2184x29),
        _0x2184x47 = (_0x2184x2a = new Path2D, _0x2184x2b = 1.6, _0x2184x2a[_0x4197[251]](0, -7 * _0x2184x2b), _0x2184x2a[_0x4197[252]](8, -6 * _0x2184x2b), _0x2184x2a[_0x4197[252]](7 * _0x2184x2b, -3 * _0x2184x2b), _0x2184x2a[_0x4197[252]](6 * _0x2184x2b, 3.2), _0x2184x2a[_0x4197[252]](6.4, 3 * _0x2184x2b), _0x2184x2a[_0x4197[252]](3 * _0x2184x2b, 6 * _0x2184x2b), _0x2184x2a[_0x4197[252]](0, 7 * _0x2184x2b), _0x2184x2a[_0x4197[252]](-3 * _0x2184x2b, 6 * _0x2184x2b), _0x2184x2a[_0x4197[252]](-6.4, 3 * _0x2184x2b), _0x2184x2a[_0x4197[252]](-6 * _0x2184x2b, 3.2), _0x2184x2a[_0x4197[252]](-7 * _0x2184x2b, -3 * _0x2184x2b), _0x2184x2a[_0x4197[252]](-8, -6 * _0x2184x2b), _0x2184x2a[_0x4197[253]](), _0x2184x2a[_0x4197[335]](-3 * _0x2184x2b, -1.6, 3.2, 0, 2 * Math[_0x4197[170]], !0), _0x2184x2a[_0x4197[253]](), _0x2184x2a[_0x4197[335]](3 * _0x2184x2b, -1.6, 3.2, 0, 2 * Math[_0x4197[170]], !0), _0x2184x2a[_0x4197[253]](), _0x2184x2a[_0x4197[251]](0, 1.6), _0x2184x2a[_0x4197[252]](-3.2, 3 * _0x2184x2b), _0x2184x2a[_0x4197[252]](0, 6.4), _0x2184x2a[_0x4197[252]](3.2, 3 * _0x2184x2b), _0x2184x2a[_0x4197[253]](), _0x2184x2a),
        _0x2184x48 = function(_0x2184x9, _0x2184x2, _0x2184x3, _0x2184xc) {
            var _0x2184xd = _0x2184xc[_0x4197[336]];
            if (_0x2184x3[_0x4197[337]]) {
                var _0x2184xe = _0x2184x3[_0x4197[337]][_0x4197[338]] || _0x2184x3[_0x4197[337]][_0x4197[208]],
                    _0x2184xf = _0x2184x3[_0x4197[337]][_0x4197[339]] || _0x2184x3[_0x4197[337]][_0x4197[209]],
                    _0x2184x10 = _0x2184xd * _0x2184x2[_0x4197[341]][_0x4197[340]][_0x4197[281]] * _0x2184x3[_0x4197[281]] / _0x2184xe;
                _0x2184x9[_0x4197[285]](), _0x2184x9[_0x4197[286]](_0x2184x2[_0x4197[264]][_0x4197[184]], _0x2184x2[_0x4197[264]][_0x4197[185]] - _0x2184xc[_0x4197[342]] * _0x2184x3[_0x4197[343]]), _0x2184x9[_0x4197[200]](_0x2184x2[_0x4197[344]] + Math[_0x4197[170]] / 2), _0x2184x9[_0x4197[286]]((_0x2184x2[_0x4197[341]][_0x4197[340]][_0x4197[184]] + _0x2184x3[_0x4197[184]]) * _0x2184xd, (_0x2184x2[_0x4197[341]][_0x4197[340]][_0x4197[185]] + _0x2184x3[_0x4197[185]]) * _0x2184xd);
                var _0x2184x11 = 0;
                if (_0x4197[318] === _0x2184x3[_0x4197[344]]) {
                    var _0x2184x16 = _0x2184x2[_0x4197[318]][_0x4197[205]]()[_0x4197[68]](_0x2184x2[_0x4197[264]]);
                    _0x2184x11 += Math[_0x4197[202]](_0x2184x16[_0x4197[185]], _0x2184x16[_0x4197[184]]) - _0x2184x2[_0x4197[344]]
                };
                _0x4197[345] === _0x2184x3[_0x4197[344]] && (_0x2184x11 += -_0x2184x2[_0x4197[344]] - Math[_0x4197[170]] / 2), _0x2184x3[_0x4197[283]] && (_0x2184x11 += 0.0174533 * _0x2184x3[_0x4197[283]]), _0x2184x11 && _0x2184x9[_0x4197[200]](_0x2184x11), _0x2184x9[_0x4197[347]](_0x2184x3[_0x4197[337]], _0x2184xe * _0x2184x10 * -_0x2184x3[_0x4197[346]][_0x4197[184]], _0x2184xf * _0x2184x10 * -_0x2184x3[_0x4197[346]][_0x4197[185]], _0x2184xe * _0x2184x10, _0x2184xf * _0x2184x10), _0x2184x9[_0x4197[288]]()
            }
        },
        _0x2184x49 = function() {
            function _0x2184x3(_0x2184x9, _0x2184x2) { _0x2184x19(this, _0x2184x3), this[_0x4197[263]] = _0x2184x9, this[_0x4197[348]] = [], this[_0x4197[259]] = new _0x2184x3e(_0x2184x2), this[_0x4197[259]][_0x4197[106]](this), this[_0x4197[349]](), this[_0x4197[259]][_0x4197[250]]() }
            return _0x2184x16(_0x2184x3, [{
                key: _0x4197[250],
                value: function() {
                    this[_0x4197[254]] = new Path2D;
                    var _0x2184x9 = this[_0x4197[259]][_0x4197[183]],
                        _0x2184x2 = _0x2184x9[_0x4197[3]],
                        _0x2184x3 = _0x2184x9[0][_0x4197[222]];
                    this[_0x4197[254]][_0x4197[251]](_0x2184x3[_0x4197[184]], _0x2184x3[_0x4197[185]]);
                    for (var _0x2184xc = 1; _0x2184xc < _0x2184x2; _0x2184xc++) {
                        var _0x2184xd = _0x2184x9[_0x2184xc][_0x4197[222]];
                        this[_0x4197[254]][_0x4197[252]](_0x2184xd[_0x4197[184]], _0x2184xd[_0x4197[185]])
                    };
                    return this[_0x4197[254]][_0x4197[253]](), this[_0x4197[254]]
                }
            }, { key: _0x4197[349], value: function() { this[_0x4197[249]] = this[_0x4197[259]][_0x4197[249]]() } }, { key: _0x4197[142], value: function() { this[_0x4197[259]][_0x4197[142]]() } }, { key: _0x4197[350], value: function(_0x2184x9, _0x2184x2, _0x2184x3, _0x2184xc) { _0x2184x2 === this[_0x4197[263]] ? this[_0x4197[351]](_0x2184x9, _0x2184x2, _0x2184x3, _0x2184xc) : this[_0x4197[352]](_0x2184x9, _0x2184x2, _0x2184x3, _0x2184xc) } }, {
                key: _0x4197[351],
                value: function(_0x2184x9, _0x2184x2, _0x2184x3, _0x2184xc) {
                    if (!_0x2184x9[_0x4197[260]]) {
                        var _0x2184xd = _0x2184x9[_0x4197[353]],
                            _0x2184xe = _0x2184x9[_0x4197[354]];
                        if (_0x2184x2[_0x4197[355]] === this) {
                            if (_0x2184x9[_0x4197[233]] < 0) { return };
                            if (_0x2184xd[_0x4197[204]](_0x2184x3[_0x4197[223]])) { return };
                            this[_0x4197[259]][_0x4197[238]](_0x2184xe, _0x2184xd), _0x2184x2[_0x4197[356]][_0x4197[331]][_0x4197[190]](_0x2184xd), _0x2184x2[_0x4197[355]] = null
                        } else {
                            if (0 < _0x2184x9[_0x4197[233]]) { return };
                            if (_0x2184xd[_0x4197[204]](_0x2184x3[_0x4197[222]])) { return };
                            if (_0x2184x2[_0x4197[355]]) { return };
                            this[_0x4197[259]][_0x4197[238]](_0x2184xe, _0x2184xd), _0x2184x2[_0x4197[356]][_0x4197[331]][_0x4197[190]](_0x2184xd), _0x2184x2[_0x4197[356]][_0x4197[331]][_0x4197[223]] && _0x2184xc[_0x4197[357]](_0x2184x2), _0x2184x2[_0x4197[355]] = this, _0x2184x2[_0x4197[356]][_0x4197[142]]()
                        }
                    }
                }
            }, {
                key: _0x4197[352],
                value: function(_0x2184x9, _0x2184x2, _0x2184x3, _0x2184xc) {
                    var _0x2184xd = _0x2184x9[_0x4197[353]],
                        _0x2184xe = _0x2184x9[_0x4197[354]];
                    if (_0x2184x2[_0x4197[355]] === this) {
                        if (_0x2184x9[_0x4197[233]] < 0) { return };
                        this[_0x4197[259]][_0x4197[238]](_0x2184xe, _0x2184xd), _0x2184x2[_0x4197[356]][_0x4197[331]][_0x4197[190]](_0x2184xd), _0x2184x2[_0x4197[356]][_0x4197[225]](_0x2184x9, this, !1), _0x2184x2[_0x4197[355]] = null
                    } else {
                        if (0 < _0x2184x9[_0x4197[233]]) { return };
                        if (_0x2184x9[_0x4197[260]]) { return };
                        if (_0x2184xd[_0x4197[204]](_0x2184x3[_0x4197[223]])) { return };
                        if (_0x2184x2[_0x4197[355]]) { return };
                        this[_0x4197[259]][_0x4197[238]](_0x2184xe, _0x2184xd), _0x2184x2[_0x4197[356]][_0x4197[331]][_0x4197[190]](_0x2184xd), _0x2184x2[_0x4197[356]][_0x4197[225]](_0x2184x9, this, !0), _0x2184x2[_0x4197[355]] = this
                    }
                }
            }]), _0x2184x3
        }(),
        _0x2184x4a = function() {
            function _0x2184x2(_0x2184x9) { _0x2184x19(this, _0x2184x2), this[_0x4197[236]] = _0x2184x9 || null, this[_0x4197[222]] = null, this[_0x4197[223]] = null, this[_0x4197[183]] = [], this[_0x4197[255]] = { left: 1 / 0, right: -1 / 0, top: 1 / 0, bottom: -1 / 0 }, this[_0x4197[254]] = new Path2D }
            return _0x2184x16(_0x2184x2, [{ key: _0x4197[106], value: function(_0x2184x2) { this[_0x4197[183]][_0x4197[180]](function(_0x2184x9) { return _0x2184x9[_0x4197[106]](_0x2184x2) }) } }, { key: _0x4197[142], value: function() { this[_0x4197[183]][_0x4197[180]](function(_0x2184x9) { return _0x2184x9[_0x4197[142]]() }) } }, {
                key: _0x4197[232],
                value: function() {
                    if (this[_0x4197[183]][_0x4197[232]]()[_0x4197[180]](function(_0x2184x9) { return _0x2184x9[_0x4197[232]]() }), this[_0x4197[223]]) {
                        var _0x2184x9 = this[_0x4197[222]];
                        this[_0x4197[222]] = this[_0x4197[223]], this[_0x4197[223]] = _0x2184x9
                    };
                    return this
                }
            }, { key: _0x4197[205], value: function() { var _0x2184x9 = new _0x2184x2; return _0x2184x9[_0x4197[183]] = this[_0x4197[183]][_0x4197[246]](function(_0x2184x9) { return _0x2184x9[_0x4197[205]]() }), _0x2184x9[_0x4197[222]] = this[_0x4197[222]], _0x2184x9[_0x4197[223]] = this[_0x4197[223]], Object[_0x4197[358]](_0x2184x9[_0x4197[255]], this[_0x4197[255]]), _0x2184x9 } }, {
                key: _0x4197[237],
                value: function(_0x2184x9) {
                    var _0x2184x2 = _0x2184x9[_0x4197[184]],
                        _0x2184x3 = _0x2184x9[_0x4197[185]];
                    this[_0x4197[255]][_0x4197[244]] = Math[_0x4197[168]](this[_0x4197[255]][_0x4197[244]], _0x2184x2), this[_0x4197[255]][_0x4197[245]] = Math[_0x4197[169]](this[_0x4197[255]][_0x4197[245]], _0x2184x2), this[_0x4197[255]][_0x4197[359]] = Math[_0x4197[168]](this[_0x4197[255]][_0x4197[359]], _0x2184x3), this[_0x4197[255]][_0x4197[360]] = Math[_0x4197[169]](this[_0x4197[255]][_0x4197[360]], _0x2184x3)
                }
            }, {
                key: _0x4197[190],
                value: function(_0x2184x9) {
                    var _0x2184x2 = this[_0x4197[223]] || this[_0x4197[222]];
                    if (!_0x2184x2 || !_0x2184x2[_0x4197[204]](_0x2184x9)) {
                        var _0x2184x3 = _0x2184x9[_0x4197[184]],
                            _0x2184xc = _0x2184x9[_0x4197[185]];
                        if (this[_0x4197[223]]) { return this[_0x4197[183]][_0x4197[4]](new _0x2184x3c(this[_0x4197[223]], _0x2184x9)[_0x4197[106]](this)), this[_0x4197[223]] = _0x2184x9, this[_0x4197[237]](_0x2184x9), void(this[_0x4197[254]][_0x4197[252]](_0x2184x3, _0x2184xc)) };
                        if (this[_0x4197[222]]) { return this[_0x4197[183]][_0x4197[4]](new _0x2184x3c(this[_0x4197[222]], _0x2184x9)[_0x4197[106]](this)), this[_0x4197[223]] = _0x2184x9, this[_0x4197[237]](_0x2184x9), void(this[_0x4197[254]][_0x4197[252]](_0x2184x3, _0x2184xc)) };
                        this[_0x4197[222]] = _0x2184x9, this[_0x4197[237]](_0x2184x9), this[_0x4197[254]][_0x4197[251]](_0x2184x3, _0x2184xc)
                    }
                }
            }, { key: _0x4197[207], value: function() { var _0x2184x9 = this[_0x4197[183]][_0x4197[246]](function(_0x2184x9) { return _0x2184x9[_0x4197[222]] }); return this[_0x4197[223]] && _0x2184x9[_0x4197[4]](this[_0x4197[223]]), _0x2184x9 } }]), _0x2184x2
        }(),
        _0x2184x4b = function() {
            function _0x2184x2(_0x2184x9) { _0x2184x19(this, _0x2184x2), this[_0x4197[331]] = new _0x2184x4a(this), this[_0x4197[263]] = _0x2184x9, this[_0x4197[221]] = [], this[_0x4197[361]] = !0 }
            return _0x2184x16(_0x2184x2, [{
                key: _0x4197[225],
                value: function(_0x2184x2, _0x2184x9, _0x2184x3) {
                    var _0x2184xc = this[_0x4197[221]][_0x4197[218]](function(_0x2184x9) { return _0x2184x9[_0x4197[353]][_0x4197[204]](_0x2184x2[_0x4197[353]]) });
                    _0x2184xc ? _0x2184xc[_0x4197[221]][_0x4197[4]]({ intersection: _0x2184x2, base: _0x2184x9, enter: _0x2184x3 }) : this[_0x4197[221]][_0x4197[4]]({ point: _0x2184x2[_0x4197[353]], intersections: [{ intersection: _0x2184x2, base: _0x2184x9, enter: _0x2184x3 }] })
                }
            }, { key: _0x4197[142], value: function() { this[_0x4197[331]][_0x4197[142]](), this[_0x4197[331]] = new _0x2184x4a(this), this[_0x4197[221]] = [] } }, { key: _0x4197[350], value: function(_0x2184x9, _0x2184x2, _0x2184x3, _0x2184xc) { _0x2184x2 === this[_0x4197[263]] ? !0 !== _0x2184x9[_0x4197[260]] && _0x2184x9[_0x4197[353]] === this[_0x4197[331]][_0x4197[183]][this[_0x4197[331]][_0x4197[183]][_0x4197[3]] - 1][_0x4197[223]] || (this[_0x4197[263]][_0x4197[264]] = _0x2184x9[_0x4197[353]], _0x2184xc[_0x4197[362]](this[_0x4197[263]])) : _0x2184xc[_0x4197[362]](this[_0x4197[263]], _0x2184x2) } }, { key: _0x4197[236], get: function() {} }]), _0x2184x2
        }(),
        _0x2184x4c = function() {
            function _0x2184xc(_0x2184x9, _0x2184x2, _0x2184x3) { _0x2184x19(this, _0x2184xc), this[_0x4197[363]] = _0x2184x9, this[_0x4197[69]] = _0x4197[36], this[_0x4197[364]] = _0x2184x3, this[_0x4197[20]] = {}, this[_0x4197[365]](_0x2184x2) }
            return _0x2184x16(_0x2184xc, [{
                key: _0x4197[365],
                value: function(_0x2184x9) {
                    var _0x2184x2 = this[_0x4197[363]][this[_0x4197[69]]];
                    _0x2184x2 && _0x2184x2[_0x4197[366]] && (this[_0x4197[20]] = _0x2184x2[_0x4197[366]](this[_0x4197[364]], this[_0x4197[20]]) || this[_0x4197[20]]);
                    var _0x2184x3 = this[_0x4197[363]][_0x2184x9];
                    _0x2184x3 && (this[_0x4197[69]] = _0x2184x9, this[_0x4197[20]] = _0x2184x3[_0x4197[367]] && _0x2184x3[_0x4197[367]](this[_0x4197[364]], this[_0x4197[20]]) || this[_0x4197[20]], this[_0x4197[269]]())
                }
            }, {
                key: _0x4197[269],
                value: function() {
                    var _0x2184x9 = this[_0x4197[363]][this[_0x4197[69]]],
                        _0x2184x2 = _0x2184x9 && _0x2184x9[_0x4197[269]](this[_0x4197[364]], this[_0x4197[20]]);
                    _0x2184x2 && this[_0x4197[365]](_0x2184x2)
                }
            }]), _0x2184xc
        }(),
        _0x2184x4d = { baseRadius: 30, baseCount: 50, minScale: 2, maxScale: 5, observerScale: 2.5, trackWidth: 8, unitSpeed: 90, spawnTimeout: 3e3, prepareCounter: 1e3, baseHeight: 2, botsCount: 15, font: _0x4197[368] },
        _0x2184x4e = {
            idle: { update: function() { return Math[_0x4197[284]]() < 0.25 ? _0x4197[369] : _0x4197[370] } },
            cut: {
                enter: function(_0x2184x9) {
                    var _0x2184x2 = _0x2184x9[_0x4197[264]][_0x4197[205]]()[_0x4197[68]](_0x2184x9[_0x4197[371]][_0x4197[187]][_0x4197[210]]),
                        _0x2184x3 = _0x2184x2[_0x4197[193]](),
                        _0x2184xc = new _0x2184x3c(_0x2184x9[_0x4197[264]], _0x2184x2[_0x4197[195]]()[_0x4197[192]](_0x2184x9[_0x4197[371]][_0x4197[372]][_0x4197[258]] - _0x2184x3 + 10)[_0x4197[190]](_0x2184x9[_0x4197[264]])),
                        _0x2184xd = _0x2184x9[_0x4197[83]][_0x4197[259]][_0x4197[221]](_0x2184xc),
                        _0x2184xe = {};
                    return _0x2184xe[_0x4197[373]] = _0x2184xd[_0x4197[24]](function(_0x2184x9, _0x2184x2) { return _0x2184x9[_0x4197[197]] - _0x2184x2[_0x4197[197]] })[0][_0x4197[353]], _0x2184xe
                },
                update: function(_0x2184x9, _0x2184x2) {
                    if (_0x2184x9[_0x4197[355]] !== _0x2184x9[_0x4197[83]]) { return _0x4197[374] };
                    var _0x2184x3 = _0x2184x9[_0x4197[264]][_0x4197[197]](_0x2184x9[_0x4197[371]][_0x4197[187]][_0x4197[210]]);
                    if (_0x2184x9[_0x4197[371]][_0x4197[372]][_0x4197[258]] - _0x2184x3 < 1) { return _0x4197[375] };
                    _0x2184x9[_0x4197[318]] = _0x2184x2[_0x4197[373]]
                }
            },
            exit: {
                enter: function(_0x2184x9) {
                    var _0x2184x2, _0x2184x3 = {},
                        _0x2184xc = 1 / 0,
                        _0x2184xd = _0x2184x9[_0x4197[83]][_0x4197[259]][_0x4197[183]][_0x4197[3]],
                        _0x2184xe = _0x2184x4d[_0x4197[376]];
                    for (_0x2184x3[_0x4197[377]] = _0x2184xe; void(0) === _0x2184x2;) {
                        for (var _0x2184xf = 0; _0x2184xf < 1; _0x2184xf++) {
                            var _0x2184x10 = ~~(Math[_0x4197[284]]() * _0x2184xd),
                                _0x2184x11 = _0x2184x9[_0x4197[83]][_0x4197[259]][_0x4197[183]][_0x2184x10][_0x4197[222]][_0x4197[197]](_0x2184x9[_0x4197[264]]);
                            _0x2184x11 < _0x2184xc && _0x2184xe < _0x2184x11 && (_0x2184xc = _0x2184x11, _0x2184x2 = _0x2184x10)
                        };
                        _0x2184xe *= 0.75
                    };
                    return _0x2184x3[_0x4197[373]] = _0x2184x9[_0x4197[83]][_0x4197[259]][_0x4197[183]][_0x2184x2][_0x4197[222]], _0x2184x3
                },
                update: function(_0x2184x2, _0x2184x9) {
                    if (_0x2184x2[_0x4197[355]] !== _0x2184x2[_0x4197[83]]) { return _0x4197[374] };
                    var _0x2184x3 = _0x2184x2[_0x4197[83]][_0x4197[259]][_0x4197[183]][_0x4197[3]],
                        _0x2184xc = _0x2184x9[_0x4197[377]],
                        _0x2184xd = ~~(Math[_0x4197[284]]() * _0x2184x3),
                        _0x2184xe = _0x2184x2[_0x4197[83]][_0x4197[259]][_0x4197[183]][_0x2184xd][_0x4197[222]],
                        _0x2184xf = _0x2184xe[_0x4197[197]](_0x2184x2[_0x4197[264]]),
                        _0x2184x10 = _0x2184x9[_0x4197[373]][_0x4197[197]](_0x2184x2[_0x4197[264]]);
                    _0x2184xc < _0x2184xf && _0x2184xf < _0x2184x10 ? _0x2184x9[_0x4197[373]] = _0x2184xe : (Object[_0x4197[378]](_0x2184x9[_0x4197[373]][_0x4197[183]])[_0x4197[241]](function(_0x2184x9) { return _0x2184x9 && _0x2184x9[_0x4197[226]] === _0x2184x2[_0x4197[83]][_0x4197[259]] }) || (_0x2184x9[_0x4197[373]] = _0x2184xe), _0x2184x2[_0x4197[318]] && _0x2184x2[_0x4197[318]][_0x4197[197]](_0x2184x2[_0x4197[371]][_0x4197[187]][_0x4197[210]]) > _0x2184x2[_0x4197[371]][_0x4197[372]][_0x4197[258]] - 1 && (_0x2184x9[_0x4197[373]] = _0x2184xe)), _0x2184x2[_0x4197[318]] = _0x2184x9[_0x4197[373]]
                }
            },
            capture: {
                enter: function(_0x2184xc, _0x2184x9) {
                    var _0x2184x2 = _0x2184x9[_0x4197[373]],
                        _0x2184x3 = _0x2184x4d[_0x4197[376]],
                        _0x2184xd = _0x2184xc[_0x4197[83]][_0x4197[259]][_0x4197[183]],
                        _0x2184xe = (1 + Math[_0x4197[284]]()) * _0x2184x3,
                        _0x2184xf = Math[_0x4197[234]](Math[_0x4197[284]]() - 0.5) || 1,
                        _0x2184x10 = 0,
                        _0x2184x11 = _0x2184xd[_0x4197[239]](function(_0x2184x9) { return _0x2184x9[_0x4197[222]][_0x4197[204]](_0x2184x2) });
                    if (-1 === _0x2184x11) {
                        var _0x2184x16 = 1 / 0,
                            _0x2184x17 = 0;
                        if (_0x2184xd[_0x4197[180]](function(_0x2184x9, _0x2184x2) {
                                var _0x2184x3 = _0x2184x9[_0x4197[222]][_0x4197[198]](_0x2184xc[_0x4197[264]]);
                                _0x2184x3 < _0x2184x16 && (_0x2184x16 = _0x2184x3, _0x2184x17 = _0x2184x2)
                            }), _0x2184x2 = _0x2184xd[_0x2184x17][_0x4197[222]], _0x2184x9[_0x4197[373]] = _0x2184x2, -1 === (_0x2184x11 = _0x2184xd[_0x4197[239]](function(_0x2184x9) { return _0x2184x9[_0x4197[222]][_0x4197[204]](_0x2184x2) }))) { throw console[_0x4197[379]](_0x4197[373], _0x2184x2), new Error(_0x4197[380]) }
                    };
                    for (var _0x2184x4 = !1; _0x2184x10 < _0x2184xe;) {
                        if (_0x2184x10 = _0x2184xd[_0x2184x11][_0x4197[222]][_0x4197[197]](_0x2184x2), (_0x2184x11 += _0x2184xf) >= _0x2184xd[_0x4197[3]]) {
                            if (_0x2184x11 = 0, _0x2184x4) { break };
                            _0x2184x4 = !0
                        };
                        if (_0x2184x11 < 0) {
                            if (_0x2184x11 = _0x2184xd[_0x4197[3]] - 1, _0x2184x4) { break };
                            _0x2184x4 = !0
                        }
                    };
                    var _0x2184x7 = _0x2184xd[_0x2184x11][_0x4197[222]],
                        _0x2184x18 = _0x2184x7[_0x4197[205]]()[_0x4197[68]](_0x2184x2),
                        _0x2184x19 = _0x2184x2[_0x4197[205]]()[_0x4197[190]](_0x2184x18[_0x4197[205]]()[_0x4197[192]](0.5)),
                        _0x2184x1a = (0.5 + Math[_0x4197[284]]()) * _0x2184x3,
                        _0x2184x1b = _0x2184x18[_0x4197[205]]()[_0x4197[200]](-_0x2184xf * Math[_0x4197[170]] / 2)[_0x4197[195]]()[_0x4197[192]](_0x2184x1a),
                        _0x2184x1c = _0x2184x19[_0x4197[190]](_0x2184x1b);
                    _0x2184xc[_0x4197[318]] = _0x2184x1c, _0x2184x9[_0x4197[381]] = [_0x2184x7], _0x2184x9[_0x4197[234]] = _0x2184xf, _0x2184x9[_0x4197[382]] = _0x2184x7
                },
                update: function(_0x2184x2, _0x2184x9) {
                    if (_0x2184x2[_0x4197[355]] === _0x2184x2[_0x4197[83]]) { return _0x4197[375] };
                    if (!Object[_0x4197[378]](_0x2184x9[_0x4197[382]][_0x4197[183]])[_0x4197[241]](function(_0x2184x9) { return _0x2184x9 && _0x2184x9[_0x4197[226]] === _0x2184x2[_0x4197[83]][_0x4197[259]] })) { return _0x4197[383] };
                    if (_0x2184x2[_0x4197[371]][_0x4197[384]][_0x4197[241]](function(_0x2184x9) { return _0x2184x9 !== _0x2184x2 && _0x2184x2[_0x4197[264]][_0x4197[197]](_0x2184x9[_0x4197[264]]) < _0x2184x4d[_0x4197[376]] })) { return _0x4197[383] };
                    if (_0x2184x2[_0x4197[318]][_0x4197[197]](_0x2184x2[_0x4197[371]][_0x4197[187]][_0x4197[210]]) > _0x2184x2[_0x4197[371]][_0x4197[372]][_0x4197[258]] + 18) { return _0x4197[383] };
                    if (_0x2184x2[_0x4197[264]][_0x4197[198]](_0x2184x2[_0x4197[318]]) < 400) {
                        var _0x2184x3 = _0x2184x9[_0x4197[381]][_0x4197[322]]();
                        if (!_0x2184x3) { return _0x4197[383] };
                        _0x2184x2[_0x4197[318]] = _0x2184x3
                    }
                }
            },
            back: {
                enter: function(_0x2184xc, _0x2184x9) {
                    var _0x2184x2 = _0x2184xc[_0x4197[83]][_0x4197[259]][_0x4197[183]],
                        _0x2184x3 = _0x2184x9[_0x4197[373]],
                        _0x2184xd = _0x2184x9[_0x4197[234]],
                        _0x2184xe = 1 / 0,
                        _0x2184xf = 0;
                    _0x2184x2[_0x4197[180]](function(_0x2184x9, _0x2184x2) {
                        var _0x2184x3 = _0x2184x9[_0x4197[222]][_0x4197[198]](_0x2184xc[_0x4197[264]]);
                        _0x2184x3 < _0x2184xe && (_0x2184xe = _0x2184x3, _0x2184xf = _0x2184x2)
                    });
                    var _0x2184x10 = _0x2184x2[_0x2184xf][_0x4197[222]];
                    if (_0x2184x3) {
                        for (; _0x2184x10[_0x4197[198]](_0x2184x3) < 100;) {
                            (_0x2184xf += _0x2184xd) >= _0x2184x2[_0x4197[3]] && (_0x2184xf = 0), _0x2184xf < 0 && (_0x2184xf = _0x2184x2[_0x4197[3]] - 1), _0x2184x10 = _0x2184x2[_0x2184xf][_0x4197[222]]
                        }
                    };
                    _0x2184xc[_0x4197[318]] = _0x2184x10
                },
                update: function(_0x2184x9, _0x2184x2) { if (_0x2184x9[_0x4197[355]] === _0x2184x9[_0x4197[83]]) { return _0x4197[375] } }
            }
        },
        _0x2184x4f = function() {
            function _0x2184xd(_0x2184x9, _0x2184x2, _0x2184x3, _0x2184xc) { _0x2184x19(this, _0x2184xd), this[_0x4197[98]] = _0x2184x9, this[_0x4197[344]] = 0, this[_0x4197[264]] = _0x2184x2, this[_0x4197[83]] = new _0x2184x49(this, _0x2184x3), this[_0x4197[341]] = _0x2184xc, this[_0x4197[385]] = this[_0x4197[83]][_0x4197[249]], this[_0x4197[355]] = this[_0x4197[83]], this[_0x4197[356]] = new _0x2184x4b(this), this[_0x4197[318]] = null, this[_0x4197[386]] = !1, this[_0x4197[387]] = { kills: 0 } }
            return _0x2184x16(_0x2184xd, [{ key: _0x4197[388], value: function() { return this[_0x4197[318]] && this[_0x4197[318]][_0x4197[205]]()[_0x4197[68]](this[_0x4197[264]])[_0x4197[195]]() } }, { key: _0x4197[389], get: function() {} }]), _0x2184xd
        }(),
        _0x2184x50 = function(_0x2184x9) {
            function _0x2184xe(_0x2184x9, _0x2184x2, _0x2184x3, _0x2184xc) { var _0x2184xd; return _0x2184x19(this, _0x2184xe), (_0x2184xd = _0x2184x1d(this, _0x2184x1a(_0x2184xe)[_0x4197[85]](this, _0x2184x9, _0x2184x2, _0x2184x3, _0x2184xc)))[_0x4197[385]] = _0x2184xd[_0x4197[83]][_0x4197[249]], _0x2184xd }
            return _0x2184x17(_0x2184xe, _0x2184x4f), _0x2184x16(_0x2184xe, [{ key: _0x4197[269], value: function(_0x2184x9) { this[_0x4197[386]] || (this[_0x4197[318]] = _0x2184x9[_0x4197[344]][_0x4197[205]]()[_0x4197[192]](50)[_0x4197[190]](this[_0x4197[264]])) } }]), _0x2184xe
        }(),
        _0x2184x51 = function(_0x2184x9) {
            function _0x2184xf(_0x2184x9, _0x2184x2, _0x2184x3, _0x2184xc, _0x2184xd) { var _0x2184xe; return _0x2184x19(this, _0x2184xf), (_0x2184xe = _0x2184x1d(this, _0x2184x1a(_0x2184xf)[_0x4197[85]](this, _0x2184x9, _0x2184x3, _0x2184xc, _0x2184xd)))[_0x4197[381]] = [], _0x2184xe[_0x4197[371]] = _0x2184x2, _0x2184xe[_0x4197[390]] = new _0x2184x4c(_0x2184x4e, _0x4197[370], _0x2184x1c(_0x2184xe)), _0x2184xe }
            return _0x2184x17(_0x2184xf, _0x2184x4f), _0x2184x16(_0x2184xf, [{ key: _0x4197[269], value: function() { this[_0x4197[390]][_0x4197[269]]() } }]), _0x2184xf
        }(),
        _0x2184x52 = 2 * Math[_0x4197[170]],
        _0x2184x53 = Math[_0x4197[171]](0),
        _0x2184x54 = Math[_0x4197[172]](0),
        _0x2184x55 = function(_0x2184x9) {
            var _0x2184x2 = Math[_0x4197[171]](_0x2184x9),
                _0x2184x3 = Math[_0x4197[172]](_0x2184x9),
                _0x2184xc = _0x2184x53 * _0x2184x2 - _0x2184x54 * _0x2184x3,
                _0x2184xd = _0x2184x53 * _0x2184x3 + _0x2184x54 * _0x2184x2;
            return _0x2184x39[_0x4197[206]](_0x2184xc, _0x2184xd)
        },
        _0x2184x56 = function() {
            function _0x2184x4(_0x2184x9, _0x2184x2, _0x2184x3, _0x2184xc, _0x2184xd, _0x2184xe, _0x2184xf, _0x2184x10, _0x2184x11) {
                var _0x2184x16 = this;
                if (_0x2184x19(this, _0x2184x4), this[_0x4197[391]] = _0x2184x9, this[_0x4197[392]] = _0x2184x11, this[_0x4197[393]] = new _0x2184x43(_0x2184x2, _0x2184x10), this[_0x4197[394]] = _0x2184xd, this[_0x4197[395]] = _0x2184xf, this[_0x4197[187]] = _0x2184x3, this[_0x4197[396]] = _0x2184x2, this[_0x4197[372]] = _0x2184xc, this[_0x4197[397]] = null, this[_0x4197[384]] = [], this[_0x4197[292]] = new _0x2184x39, this[_0x4197[344]] = new _0x2184x39(1, 0), this[_0x4197[398]] = !1, this[_0x4197[399]] = null, this[_0x4197[400]] = [], this[_0x4197[281]] = _0x2184x9[_0x4197[401]], this[_0x4197[249]] = this[_0x4197[372]][_0x4197[259]][_0x4197[249]](), this[_0x4197[402]] = _0x2184xe, this[_0x4197[403]] = !1, this[_0x4197[404]] = !0, this[_0x4197[405]] = !1, this[_0x4197[406]] = [], this[_0x4197[407]] = [], this[_0x4197[408]] = null, this[_0x4197[409]] = 0, this[_0x4197[410]] = !1, this[_0x4197[372]][_0x4197[259]][_0x4197[250]](), _0x2184x2) {
                    var _0x2184x17 = function() {};
                    window[_0x4197[47]](_0x4197[411], _0x2184x17, !1)
                };
                this[_0x4197[412]] = { fps: 0, ut: 0, ait: 0, st: 0, rt: 0 }, this[_0x4197[413]] = { updateStartTime: 0, updateEndTime: 0, aiStartTime: 0, aiEndTime: 0, spawnStartTime: 0, spawnEndTime: 0, renderStartTime: 0, renderEndTime: 0 }, this[_0x4197[414]] = { returns: 0, kills: 0 }, setInterval(function() { _0x2184x16[_0x4197[406]] = _0x2184x16[_0x4197[406]][_0x4197[261]](function(_0x2184x9) { return 0 < _0x2184x9[_0x4197[267]] }) }, 2e3)
            }
            return _0x2184x16(_0x2184x4, [{ key: _0x4197[415], value: function(_0x2184x9) { this[_0x4197[384]][_0x4197[4]](_0x2184x9), this[_0x4197[397]] = _0x2184x9 } }, { key: _0x4197[416], value: function(_0x2184x9) { this[_0x4197[384]][_0x4197[4]](_0x2184x9) } }, {
                key: _0x4197[417],
                value: function(_0x2184x9) {
                    var _0x2184x2, _0x2184x3 = this[_0x4197[187]][_0x4197[210]],
                        _0x2184xc = this[_0x4197[372]][_0x4197[258]],
                        _0x2184xd = 2 * this[_0x4197[391]][_0x4197[418]],
                        _0x2184xe = _0x2184xd * (this[_0x4197[397]] ? 3 - this[_0x4197[397]][_0x4197[83]][_0x4197[249]] / this[_0x4197[249]] * 2 : 3),
                        _0x2184xf = _0x2184xe * _0x2184xe;
                    switch (_0x2184x9) {
                        case _0x4197[255]:
                            _0x2184x2 = _0x2184xc - (3 + 2 * Math[_0x4197[284]]()) * _0x2184xd;
                            break;
                        case _0x4197[210]:
                            _0x2184x2 = Math[_0x4197[284]]() * (4 * _0x2184xd);
                            break;
                        default:
                            _0x2184x2 = Math[_0x4197[284]]() * (_0x2184xc - _0x2184xd)
                    };
                    var _0x2184x10 = _0x2184x39[_0x4197[206]](0, _0x2184x2)[_0x4197[200]](Math[_0x4197[284]]() * Math[_0x4197[170]] * 2),
                        _0x2184x11 = _0x2184x3[_0x4197[205]]()[_0x4197[190]](_0x2184x10);
                    _0x2184x10[_0x4197[189]]();
                    for (var _0x2184x16 = 0; _0x2184x16 < this[_0x4197[384]][_0x4197[3]]; _0x2184x16++) { var _0x2184x17 = this[_0x4197[384]][_0x2184x16]; if (_0x2184x17[_0x4197[83]][_0x4197[259]][_0x4197[247]](_0x2184x11)) { return }; if (_0x2184x17[_0x4197[83]][_0x4197[259]][_0x4197[183]][_0x4197[241]](function(_0x2184x9) { return _0x2184x11[_0x4197[198]](_0x2184x9[_0x4197[222]]) < _0x2184xf })) { return }; if (_0x2184x17[_0x4197[356]][_0x4197[331]][_0x4197[183]][_0x4197[241]](function(_0x2184x9) { return _0x2184x11[_0x4197[198]](_0x2184x9[_0x4197[222]]) < _0x2184xf })) { return } };
                    return _0x2184x11
                }
            }, {
                key: _0x4197[419],
                value: function(_0x2184x9) {
                    var _0x2184x2 = this,
                        _0x2184x3 = this[_0x4197[391]],
                        _0x2184xc = _0x2184x3[_0x4197[420]],
                        _0x2184xd = _0x2184x3[_0x4197[418]],
                        _0x2184xe = _0x2184x3[_0x4197[421]],
                        _0x2184xf = _0x2184x3[_0x4197[422]];
                    if (!(this[_0x4197[384]][_0x4197[3]] >= _0x2184xf)) {
                        if (this[_0x4197[403]]) { if (this[_0x4197[405]]) { return }; if (this[_0x4197[404]]) { return this[_0x4197[405]] = !0, void(setTimeout(function() { _0x2184x2[_0x4197[404]] = !1, _0x2184x2[_0x4197[405]] = !1 }, (1 + Math[_0x4197[284]]()) * _0x2184xe)) } };
                        if (this[_0x4197[395]][_0x4197[423]][_0x4197[3]]) {
                            var _0x2184x10 = this[_0x4197[417]](_0x2184x9);
                            _0x2184x10 && (this[_0x4197[416]](new _0x2184x51(this[_0x4197[395]][_0x4197[138]](), this, _0x2184x10, _0x2184x35(_0x2184x10[_0x4197[184]], _0x2184x10[_0x4197[185]], _0x2184xc, _0x2184xd), this[_0x4197[394]][_0x4197[138]]())), this[_0x4197[404]] = !0, this[_0x4197[405]] = !1)
                        } else { this[_0x4197[395]][_0x4197[424]]() }
                    }
                }
            }, {
                key: _0x4197[425],
                value: function(_0x2184x9, _0x2184x2) {
                    var _0x2184x3, _0x2184xc = this[_0x4197[391]],
                        _0x2184xd = _0x2184xc[_0x4197[420]],
                        _0x2184xe = _0x2184xc[_0x4197[418]],
                        _0x2184xf = _0x2184xc[_0x4197[401]],
                        _0x2184x10 = _0x2184xc[_0x4197[426]],
                        _0x2184x11 = _0x2184xc[_0x4197[422]],
                        _0x2184x16 = 0;
                    for (this[_0x4197[403]] = !1, this[_0x4197[384]][_0x4197[3]] >= _0x2184x11 && this[_0x4197[362]](this[_0x4197[384]][_0x2184x11 / 2 | 0]); !_0x2184x3;) { 50 < ++_0x2184x16 && (_0x2184x16 = 0, this[_0x4197[384]][_0x4197[3]] && this[_0x4197[362]](this[_0x4197[384]][0])), _0x2184x3 = this[_0x4197[417]](_0x4197[284]) };
                    this[_0x4197[403]] = !0;
                    var _0x2184x17 = this[_0x4197[394]][_0x4197[138]](_0x2184x2, !0);
                    if (!_0x2184x17) {
                        var _0x2184x4 = this[_0x4197[384]][_0x4197[218]](function(_0x2184x9) { return _0x2184x9[_0x4197[341]][_0x4197[98]] === _0x2184x2 });
                        _0x2184x4 ? (_0x2184x17 = _0x2184x4[_0x4197[341]], _0x2184x4[_0x4197[341]] = this[_0x4197[394]][_0x4197[138]]()) : _0x2184x17 = this[_0x4197[394]][_0x4197[138]](_0x4197[36], !0)
                    };
                    var _0x2184x7 = new _0x2184x50(_0x2184x9 || this[_0x4197[392]][_0x4197[427]], _0x2184x3, _0x2184x35(_0x2184x3[_0x4197[184]], _0x2184x3[_0x4197[185]], _0x2184xd, _0x2184xe), _0x2184x17);
                    this[_0x4197[415]](_0x2184x7), this[_0x4197[281]] = _0x2184xf - ~~(_0x2184x7[_0x4197[83]][_0x4197[249]] / this[_0x4197[249]] * 20) / 20 * (_0x2184xf - _0x2184x10), this[_0x4197[428]] = _0x2184x33()
                }
            }, {
                key: _0x4197[429],
                value: function(_0x2184xd, _0x2184x9, _0x2184xe) {
                    var _0x2184xf = this;
                    if (this[_0x4197[403]]) {
                        var _0x2184x10 = 0;
                        _0x2184x9[_0x4197[180]](function(_0x2184x9) {
                            if (5 < (_0x2184x10 += _0x2184x9[_0x4197[228]][_0x4197[193]]())) {
                                _0x2184x10 = 0;
                                var _0x2184x2 = _0x2184x9[_0x4197[228]][_0x4197[205]]()[_0x4197[195]]()[_0x4197[200]](Math[_0x4197[234]](Math[_0x4197[284]]() - 0.5) * Math[_0x4197[170]] / 2)[_0x4197[192]](25 + 100 * Math[_0x4197[284]]());
                                0.25 < Math[_0x4197[284]]() && _0x2184x2[_0x4197[192]](0.1);
                                var _0x2184x3 = (_0x2184xe ? 3 : 1) * (1 + 0.5 * Math[_0x4197[284]]()),
                                    _0x2184xc = new _0x2184x42(_0x2184xd[_0x4197[341]][_0x4197[430]][_0x4197[406]][~~(Math[_0x4197[284]]() * _0x2184xd[_0x4197[341]][_0x4197[430]][_0x4197[406]][_0x4197[3]])], _0x2184x9[_0x4197[222]][_0x4197[205]](), _0x2184x2, 2 * Math[_0x4197[170]] * (1 + Math[_0x4197[284]]()) * Math[_0x4197[234]](Math[_0x4197[284]]() - 0.5 || 1), _0x2184x3, 0.9 * -_0x2184x3, 1e3);
                                _0x2184xf[_0x4197[406]][_0x4197[4]](_0x2184xc)
                            }
                        })
                    }
                }
            }, {
                key: _0x4197[431],
                value: function(_0x2184x9) {
                    var _0x2184x2 = this,
                        _0x2184xd = 1 / 0,
                        _0x2184xe = 0,
                        _0x2184xf = 1 / 0,
                        _0x2184x10 = 0;
                    this[_0x4197[397]][_0x4197[83]][_0x4197[259]][_0x4197[183]][_0x4197[180]](function(_0x2184x9) {
                        var _0x2184x2 = _0x2184x9[_0x4197[222]],
                            _0x2184x3 = _0x2184x2[_0x4197[184]],
                            _0x2184xc = _0x2184x2[_0x4197[185]];
                        _0x2184xd = Math[_0x4197[168]](_0x2184xd, _0x2184x3), _0x2184xe = Math[_0x4197[169]](_0x2184xe, _0x2184x3), _0x2184xf = Math[_0x4197[168]](_0x2184xf, _0x2184xc), _0x2184x10 = Math[_0x4197[169]](_0x2184x10, _0x2184xc)
                    });
                    var _0x2184x3 = _0x2184xe - _0x2184xd,
                        _0x2184xc = _0x2184x10 - _0x2184xf,
                        _0x2184x11 = Math[_0x4197[169]](_0x2184x3, _0x2184xc),
                        _0x2184x16 = new _0x2184x39(_0x2184xd + _0x2184x3 / 2, _0x2184xf + _0x2184xc / 2),
                        _0x2184x17 = 475 / _0x2184x11,
                        _0x2184x4 = document[_0x4197[93]](_0x4197[432]);
                    _0x2184x4[_0x4197[208]] = 500, _0x2184x4[_0x4197[209]] = 500;
                    var _0x2184x7 = _0x2184x4[_0x4197[434]](_0x4197[433]);
                    _0x2184x7[_0x4197[281]](_0x2184x17, _0x2184x17), _0x2184x7[_0x4197[286]](250 / _0x2184x17 - _0x2184x16[_0x4197[184]], 250 / _0x2184x17 - _0x2184x16[_0x4197[185]]), _0x2184x7[_0x4197[286]](0, 5 / _0x2184x17), _0x2184x44(_0x2184x7, this[_0x4197[397]][_0x4197[83]][_0x4197[259]][_0x4197[254]], this[_0x4197[397]][_0x4197[341]][_0x4197[430]][_0x4197[383]]), _0x2184x7[_0x4197[286]](0, -10 / _0x2184x17), _0x2184x44(_0x2184x7, this[_0x4197[397]][_0x4197[83]][_0x4197[259]][_0x4197[254]], this[_0x4197[397]][_0x4197[341]][_0x4197[435]] || this[_0x4197[397]][_0x4197[341]][_0x4197[430]][_0x4197[436]]);
                    var _0x2184x18 = _0x2184x4[_0x4197[438]](_0x4197[437]),
                        _0x2184x19 = { game: this, score: _0x2184x9 ? 100 : this[_0x4197[397]][_0x4197[83]][_0x4197[249]] / this[_0x4197[249]] * 100, best: this[_0x4197[439]], time: _0x2184x33() - this[_0x4197[428]], kills: this[_0x4197[397]][_0x4197[387]][_0x4197[440]], image: _0x2184x18, win: _0x2184x9 };
                    setTimeout(function() { _0x2184x9 && _0x2184x2[_0x4197[362]](_0x2184x2[_0x4197[397]], void(0), _0x2184x9), _0x2184x2[_0x4197[397]] = null, _0x2184x2[_0x4197[402]] && _0x2184x2[_0x4197[402]](_0x2184x19) }, 1e3)
                }
            }, {
                key: _0x4197[362],
                value: function(_0x2184x2, _0x2184x9, _0x2184x3) {
                    this[_0x4197[414]][_0x4197[440]]++, _0x2184x2[_0x4197[441]] = !0, this[_0x4197[394]] && this[_0x4197[394]][_0x4197[189]](_0x2184x2[_0x4197[341]]), this[_0x4197[384]][_0x4197[180]](function(_0x2184x9) { _0x2184x9 !== _0x2184x2 && _0x2184x9[_0x4197[355]] === _0x2184x2[_0x4197[83]] && (_0x2184x9[_0x4197[355]] = null) }), this[_0x4197[429]](_0x2184x2, _0x2184x2[_0x4197[356]][_0x4197[331]][_0x4197[183]]), this[_0x4197[429]](_0x2184x2, _0x2184x2[_0x4197[83]][_0x4197[259]][_0x4197[183]], !0), _0x2184x2[_0x4197[356]][_0x4197[142]](), _0x2184x2[_0x4197[83]][_0x4197[142]]();
                    var _0x2184xc = this[_0x4197[384]][_0x4197[239]](function(_0x2184x9) { return _0x2184x9 === _0x2184x2 });
                    this[_0x4197[384]][_0x4197[188]](_0x2184xc, 1), _0x2184x9 && (_0x2184x9[_0x4197[387]][_0x4197[440]]++, _0x2184x9 === this[_0x4197[397]] && this[_0x4197[400]][_0x4197[4]](new _0x2184x40(this[_0x4197[392]][_0x4197[442]], _0x2184x2[_0x4197[341]][_0x4197[430]][_0x4197[436]], _0x2184x9, new _0x2184x39(0, -35), new _0x2184x39(0, -10), 1e3, !0))), _0x2184x3 || _0x2184x2 !== this[_0x4197[397]] || this[_0x4197[431]]()
                }
            }, {
                key: _0x4197[443],
                value: function(_0x2184x9, _0x2184x2) {
                    var _0x2184x3 = this[_0x4197[391]][_0x4197[376]],
                        _0x2184xc = [],
                        _0x2184xd = _0x2184x2[_0x4197[388]]();
                    if (!_0x2184xd) { return _0x2184xc };
                    _0x2184xd[_0x4197[192]](_0x2184x3 * _0x2184x9 / 1e3);
                    var _0x2184xe = _0x2184x55(_0x2184x2[_0x4197[344]]),
                        _0x2184xf = Math[_0x4197[202]](_0x2184xe[_0x4197[184]] * _0x2184xd[_0x4197[185]] - _0x2184xd[_0x4197[184]] * _0x2184xe[_0x4197[185]], _0x2184xe[_0x4197[199]](_0x2184xd));
                    _0x2184xe[_0x4197[189]]();
                    var _0x2184x10 = _0x2184x52 * _0x2184x9 / 1e3;
                    Math[_0x4197[167]](_0x2184xf) > _0x2184x10 && (_0x2184xf = _0x2184x10 * Math[_0x4197[234]](_0x2184xf)), _0x2184x2[_0x4197[344]] += _0x2184xf;
                    var _0x2184x11 = _0x2184x55(_0x2184x2[_0x4197[344]])[_0x4197[192]](_0x2184x3 * _0x2184x9 / 1e3),
                        _0x2184x16 = new _0x2184x3c(_0x2184x2[_0x4197[264]], _0x2184x2[_0x4197[264]][_0x4197[205]]()[_0x4197[190]](_0x2184x11));
                    _0x2184x11[_0x4197[189]]();
                    for (var _0x2184x17 = this[_0x4197[372]][_0x4197[221]](_0x2184x16); _0x2184x17[_0x4197[3]];) {
                        var _0x2184x4 = void(0),
                            _0x2184x7 = _0x2184x16[_0x4197[228]];
                        if (2 === _0x2184x17[_0x4197[3]]) {
                            var _0x2184x18 = _0x2184x17[0][_0x4197[354]][_0x4197[228]];
                            _0x2184x4 = 0 < Math[_0x4197[202]](_0x2184x7[_0x4197[184]] * _0x2184x18[_0x4197[185]] - _0x2184x18[_0x4197[184]] * _0x2184x7[_0x4197[185]], _0x2184x7[_0x4197[199]](_0x2184x18)) ? _0x2184x17[0] : _0x2184x17[1]
                        } else { _0x2184x4 = _0x2184x17[0] };
                        var _0x2184x19 = _0x2184x4,
                            _0x2184x1a = _0x2184x19[_0x4197[354]],
                            _0x2184x1b = _0x2184x19[_0x4197[353]],
                            _0x2184x1c = _0x2184x1a[_0x4197[228]];
                        if (Math[_0x4197[202]](_0x2184x7[_0x4197[184]] * _0x2184x1c[_0x4197[185]] - _0x2184x1c[_0x4197[184]] * _0x2184x7[_0x4197[185]], _0x2184x7[_0x4197[199]](_0x2184x1c)) < 0) { break };
                        if (!_0x2184x2d(_0x2184x4[_0x4197[197]])) {
                            var _0x2184x1d = new _0x2184x3c(_0x2184x16[_0x4197[222]], _0x2184x1b);
                            _0x2184xc[_0x4197[4]](_0x2184x1d)
                        };
                        var _0x2184xa = (_0x2184x16 = new _0x2184x3c(_0x2184x1b, _0x2184x16[_0x4197[223]]))[_0x4197[228]],
                            _0x2184x20 = _0x2184x39[_0x4197[205]](_0x2184x1c)[_0x4197[195]]()[_0x4197[192]](_0x2184xa[_0x4197[199]](_0x2184x1c) / _0x2184x1c[_0x4197[193]]());
                        _0x2184x16 = new _0x2184x3c(_0x2184x1b, _0x2184x1b[_0x4197[205]]()[_0x4197[190]](_0x2184x20)), _0x2184x20[_0x4197[189]](), _0x2184x17 = this[_0x4197[372]][_0x4197[221]](_0x2184x16)
                    };
                    return _0x2184xc[_0x4197[4]](_0x2184x16), _0x2184xc
                }
            }, {
                key: _0x4197[269],
                value: function(_0x2184x3) {
                    var _0x2184x1d = this,
                        _0x2184x9 = this[_0x4197[391]],
                        _0x2184xa = _0x2184x9[_0x4197[336]],
                        _0x2184x20 = _0x2184x9[_0x4197[376]],
                        _0x2184x21 = _0x2184x9[_0x4197[342]],
                        _0x2184x2 = _0x2184x9[_0x4197[401]],
                        _0x2184xc = _0x2184x9[_0x4197[426]],
                        _0x2184xd = _0x2184x9[_0x4197[444]];
                    if (this[_0x4197[393]][_0x4197[317]]()) {
                        this[_0x4197[398]] = Object[_0x4197[358]]({}, this[_0x4197[393]][_0x4197[292]]);
                        var _0x2184xe = _0x2184x52 * _0x2184x3 / 1e3;
                        if (this[_0x4197[393]][_0x4197[295]][_0x4197[445]]) {
                            var _0x2184xf = 0;
                            this[_0x4197[393]][_0x4197[244]] && (_0x2184xf = -1), this[_0x4197[393]][_0x4197[245]] && (_0x2184xf = 1), _0x2184xf && this[_0x4197[344]][_0x4197[200]](_0x2184xf * _0x2184xe)
                        } else {
                            var _0x2184x10 = new _0x2184x39;
                            if (this[_0x4197[393]][_0x4197[289]] && _0x2184x10[_0x4197[190]](new _0x2184x39(0, -1)), this[_0x4197[393]][_0x4197[290]] && _0x2184x10[_0x4197[190]](new _0x2184x39(0, 1)), this[_0x4197[393]][_0x4197[244]] && _0x2184x10[_0x4197[190]](new _0x2184x39(-1, 0)), this[_0x4197[393]][_0x4197[245]] && _0x2184x10[_0x4197[190]](new _0x2184x39(1, 0)), _0x2184x10[_0x4197[193]]()) {
                                var _0x2184x11 = Math[_0x4197[202]](this[_0x4197[344]][_0x4197[184]] * _0x2184x10[_0x4197[185]] - _0x2184x10[_0x4197[184]] * this[_0x4197[344]][_0x4197[185]], this[_0x4197[344]][_0x4197[184]] * _0x2184x10[_0x4197[184]] + this[_0x4197[344]][_0x4197[185]] * _0x2184x10[_0x4197[185]]);
                                Math[_0x4197[167]](_0x2184x11) > _0x2184xe && (_0x2184x11 = Math[_0x4197[234]](_0x2184x11) * _0x2184xe), this[_0x4197[344]][_0x4197[200]](_0x2184x11)
                            }
                        }
                    } else { this[_0x4197[393]][_0x4197[292]] ? (!this[_0x4197[398]] || this[_0x4197[398]][_0x4197[184]] !== this[_0x4197[393]][_0x4197[292]][_0x4197[184]] && this[_0x4197[398]][_0x4197[185]] !== this[_0x4197[393]][_0x4197[292]][_0x4197[185]]) && (this[_0x4197[398]] = null, this[_0x4197[344]] = new _0x2184x39(this[_0x4197[393]][_0x4197[292]][_0x4197[184]], this[_0x4197[393]][_0x4197[292]][_0x4197[185]])[_0x4197[68]](new _0x2184x39(this[_0x4197[396]][_0x4197[208]] / 2, this[_0x4197[396]][_0x4197[209]] / 2))[_0x4197[195]]()) : !this[_0x4197[398]] && this[_0x4197[393]][_0x4197[293]] && (this[_0x4197[344]] = new _0x2184x39(this[_0x4197[393]][_0x4197[293]][_0x4197[184]], this[_0x4197[393]][_0x4197[293]][_0x4197[185]])[_0x4197[68]](new _0x2184x39(this[_0x4197[396]][_0x4197[208]] / 2, this[_0x4197[396]][_0x4197[209]] / 2))[_0x4197[195]]()) };
                    var _0x2184x16 = this[_0x4197[397]];
                    if (this[_0x4197[413]][_0x4197[446]] = _0x2184x33(), this[_0x4197[384]][_0x4197[180]](function(_0x2184x9) { return _0x2184x9[_0x4197[269]](_0x2184x1d) }), this[_0x4197[413]][_0x4197[447]] = _0x2184x33(), this[_0x4197[384]][_0x4197[96]]()[_0x4197[180]](function(_0x2184x1b) {
                            if (!_0x2184x1b[_0x4197[441]]) {
                                for (var _0x2184x1c = _0x2184x1d[_0x4197[443]](_0x2184x3, _0x2184x1b), _0x2184x9 = function() {
                                        if (_0x2184x1b[_0x4197[441]]) { return { v: void(0) } };
                                        var _0x2184x16 = _0x2184x1c[_0x4197[322]](),
                                            _0x2184x9 = _0x2184x1d[_0x4197[187]][_0x4197[221]](_0x2184x16),
                                            _0x2184x3 = [];
                                        _0x2184x9[_0x4197[180]](function(_0x2184x2) {
                                            var _0x2184x9 = _0x2184x3[_0x4197[239]](function(_0x2184x9) { return _0x2184x9[_0x4197[353]][_0x4197[204]](_0x2184x2[_0x4197[353]]) });
                                            if (-1 === _0x2184x9) { _0x2184x3[_0x4197[4]]({ point: _0x2184x2[_0x4197[353]], intersections: [_0x2184x2] }) } else {
                                                if (_0x2184x2[_0x4197[353]] !== _0x2184x3[_0x2184x9][_0x4197[353]]) {
                                                    if (_0x2184x2[_0x4197[353]][_0x4197[182]]) {
                                                        if (_0x2184x3[_0x2184x9][_0x4197[353]][_0x4197[182]]) { throw new Error(_0x4197[448]) };
                                                        _0x2184x3[_0x2184x9][_0x4197[353]] = _0x2184x2[_0x4197[353]], _0x2184x3[_0x2184x9][_0x4197[221]][_0x4197[180]](function(_0x2184x9) { _0x2184x9[_0x4197[353]] = _0x2184x2[_0x4197[353]] })
                                                    } else { _0x2184x2[_0x4197[353]] = _0x2184x3[_0x2184x9][_0x4197[353]] }
                                                };
                                                _0x2184x3[_0x2184x9][_0x4197[221]][_0x4197[4]](_0x2184x2)
                                            }
                                        }), _0x2184x9[_0x4197[180]](function(_0x2184x9) { _0x2184x9[_0x4197[197]] = _0x2184x16[_0x4197[222]][_0x4197[198]](_0x2184x9[_0x4197[353]]) }), _0x2184x9[_0x4197[24]](function(_0x2184x9, _0x2184x2) { return _0x2184x9[_0x4197[197]] - _0x2184x2[_0x4197[197]] });
                                        var _0x2184x2 = [],
                                            _0x2184xc = null,
                                            _0x2184xd = -1;
                                        if (_0x2184x9[_0x4197[180]](function(_0x2184x9) { _0x2184x2e(_0x2184x9[_0x4197[197]], _0x2184xd) || (_0x2184xc = [], _0x2184xd = _0x2184x9[_0x4197[197]], _0x2184x2[_0x4197[4]](_0x2184xc)), _0x2184xc[_0x4197[4]](_0x2184x9) }), _0x2184x2[_0x4197[180]](function(_0x2184x10) {
                                                var _0x2184x11 = [];
                                                _0x2184x10[_0x4197[180]](function(_0x2184x9) {
                                                    var _0x2184x2 = _0x2184x9[_0x4197[354]][_0x4197[226]];
                                                    _0x2184x2 && -1 === _0x2184x11[_0x4197[186]](_0x2184x2) && _0x2184x11[_0x4197[4]](_0x2184x2)
                                                });
                                                for (var _0x2184x9 = function() {
                                                        var _0x2184x9 = _0x2184x11[_0x4197[239]](function(_0x2184x9) { return _0x2184x9[_0x4197[236]] === _0x2184x1b[_0x4197[355]] });
                                                        if (0 < _0x2184x9) {
                                                            var _0x2184x2 = _0x2184x11[0];
                                                            _0x2184x11[0] = _0x2184x11[_0x2184x9], _0x2184x11[_0x2184x9] = _0x2184x2
                                                        };
                                                        var _0x2184x3 = _0x2184x11[_0x4197[239]](function(_0x2184x9) { return _0x2184x9[_0x4197[236]][_0x4197[361]] });
                                                        if (0 < _0x2184x3) {
                                                            var _0x2184xc = _0x2184x11[0];
                                                            _0x2184x11[0] = _0x2184x11[_0x2184x3], _0x2184x11[_0x2184x3] = _0x2184xc
                                                        };
                                                        var _0x2184xd = _0x2184x11[_0x4197[322]](),
                                                            _0x2184xe = [];
                                                        for (_0x2184x10[_0x4197[180]](function(_0x2184x9) { _0x2184x9[_0x4197[354]][_0x4197[226]] === _0x2184xd && _0x2184xe[_0x4197[4]](_0x2184x9) }); !_0x2184x1b[_0x4197[441]] && _0x2184xe[_0x4197[3]];) {
                                                            _0x2184xe[_0x4197[24]](function(_0x2184x9, _0x2184x2) { return _0x2184x1b[_0x4197[355]] ? _0x2184x2[_0x4197[233]] - _0x2184x9[_0x4197[233]] : _0x2184x9[_0x4197[233]] - _0x2184x2[_0x4197[233]] });
                                                            var _0x2184xf = _0x2184xe[_0x4197[322]]();
                                                            _0x2184xf[_0x4197[354]][_0x4197[226]] && !_0x2184xd[_0x4197[236]][_0x4197[263]][_0x4197[441]] && _0x2184xd[_0x4197[236]][_0x4197[350]](_0x2184xf, _0x2184x1b, _0x2184x16, _0x2184x1d)
                                                        }
                                                    }; _0x2184x11[_0x4197[3]];) { _0x2184x9() }
                                            }), _0x2184x1b[_0x4197[441]]) { return { v: void(0) } };
                                        var _0x2184xe = _0x2184x16[_0x4197[223]];
                                        if (_0x2184x1b[_0x4197[355]] !== _0x2184x1b[_0x4197[83]] && _0x2184x1b[_0x4197[356]][_0x4197[331]][_0x4197[190]](_0x2184xe), _0x2184x1b[_0x4197[264]] = _0x2184xe, _0x2184x1d[_0x4197[403]] && !_0x2184x1c[_0x4197[3]] && _0x2184x1b[_0x4197[355]] && _0x2184x1b[_0x4197[355]] !== _0x2184x1b[_0x4197[83]]) {
                                            var _0x2184xf = Math[_0x4197[234]](Math[_0x4197[284]]() - 0.5),
                                                _0x2184x10 = _0x2184x1b[_0x4197[341]][_0x4197[340]][_0x4197[281]] * _0x2184xa,
                                                _0x2184x11 = _0x2184x16[_0x4197[228]][_0x4197[205]]()[_0x4197[195]]()[_0x4197[200]](_0x2184xf * Math[_0x4197[284]]() * (Math[_0x4197[170]] / 30))[_0x4197[192]](_0x2184x20 * (1 + Math[_0x4197[284]]())),
                                                _0x2184x17 = _0x2184x16[_0x4197[228]][_0x4197[205]]()[_0x4197[200]](Math[_0x4197[170]] / 2)[_0x4197[195]]()[_0x4197[192]](_0x2184xf * Math[_0x4197[284]]() * _0x2184x10 / 2),
                                                _0x2184x4 = _0x2184x16[_0x4197[228]][_0x4197[205]]()[_0x4197[195]]()[_0x4197[192]](_0x2184x10 / 2),
                                                _0x2184x7 = _0x2184x16[_0x4197[228]][_0x4197[205]]()[_0x4197[195]]()[_0x4197[192]](-6 * _0x2184x20)[_0x4197[200]](_0x2184xf * Math[_0x4197[284]]() * (Math[_0x4197[170]] / 10)),
                                                _0x2184x18 = _0x2184x1b[_0x4197[355]][_0x4197[263]][_0x4197[341]][_0x4197[430]][_0x4197[406]],
                                                _0x2184x19 = 0.75 + 0.5 * Math[_0x4197[284]](),
                                                _0x2184x1a = new _0x2184x42(_0x2184x18[~~(Math[_0x4197[284]]() * _0x2184x18[_0x4197[3]])], _0x2184x16[_0x4197[222]][_0x4197[205]]()[_0x4197[190]](_0x2184x17)[_0x4197[190]](_0x2184x4)[_0x4197[190]](new _0x2184x39(0, -_0x2184x21)), _0x2184x11, Math[_0x4197[170]] + Math[_0x4197[284]]() * Math[_0x4197[170]], _0x2184x19, -2 * _0x2184x19, 300, _0x2184x7);
                                            _0x2184x1d[_0x4197[406]][_0x4197[4]](_0x2184x1a)
                                        }
                                    }; _0x2184x1c[_0x4197[3]];) { var _0x2184x2 = _0x2184x9(); if (_0x4197[157] === _0x2184x22(_0x2184x2)) { return _0x2184x2[_0x4197[175]] } }
                            }
                        }), _0x2184x16) {
                        var _0x2184x17 = (_0x2184x16[_0x4197[83]][_0x4197[249]] - _0x2184x16[_0x4197[385]]) / this[_0x4197[249]] * 100;
                        _0x2184x16[_0x4197[385]] = _0x2184x16[_0x4197[83]][_0x4197[249]], 0.01 <= _0x2184x17 && this[_0x4197[400]][_0x4197[4]](new _0x2184x40(_0x4197[451][_0x4197[178]](_0x2184x17[_0x4197[449]](2), _0x4197[450]), _0x2184x16[_0x4197[341]][_0x4197[430]][_0x4197[383]], _0x2184x16, new _0x2184x39(0, -35), new _0x2184x39(0, -10), 1e3, !0))
                    };
                    this[_0x4197[384]][_0x4197[24]](function(_0x2184x9, _0x2184x2) { return _0x2184x2[_0x4197[83]][_0x4197[249]] - _0x2184x9[_0x4197[83]][_0x4197[249]] }), this[_0x4197[400]] = this[_0x4197[400]][_0x4197[261]](function(_0x2184x9) { return _0x2184x9[_0x4197[269]](_0x2184x3), 0 < _0x2184x9[_0x4197[267]] }), this[_0x4197[406]][_0x4197[180]](function(_0x2184x9) { return _0x2184x9[_0x4197[269]](_0x2184x3) });
                    var _0x2184x4 = (_0x2184x16 ? _0x2184x2 - ~~(_0x2184x16[_0x4197[83]][_0x4197[249]] / this[_0x4197[249]] * 20) / 20 * (_0x2184x2 - _0x2184xc) : _0x2184xd) - this[_0x4197[281]];
                    this[_0x4197[281]] += _0x2184x4 * _0x2184x3 / 200, _0x2184x16 && 0.9999 < _0x2184x16[_0x4197[83]][_0x4197[249]] / this[_0x4197[249]] && this[_0x4197[431]](!0), this[_0x4197[413]][_0x4197[452]] = _0x2184x33(), this[_0x4197[419]](_0x4197[210]), this[_0x4197[419]](0.3 < Math[_0x4197[284]]() ? _0x4197[255] : _0x4197[284]), this[_0x4197[413]][_0x4197[453]] = _0x2184x33()
                }
            }, {
                key: _0x4197[65],
                value: function() {
                    var _0x2184x10 = this,
                        _0x2184x9 = this[_0x4197[396]];
                    if (_0x2184x9) {
                        var _0x2184x2 = this[_0x4197[391]],
                            _0x2184x3 = _0x2184x2[_0x4197[336]],
                            _0x2184xc = _0x2184x2[_0x4197[342]],
                            _0x2184x11 = _0x2184x2[_0x4197[273]],
                            _0x2184x16 = _0x2184x9[_0x4197[434]](_0x4197[433]),
                            _0x2184xd = _0x2184x9[_0x4197[454]],
                            _0x2184xe = _0x2184x9[_0x4197[455]];
                        _0x2184x9[_0x4197[208]] === _0x2184xd && _0x2184x9[_0x4197[209]] === _0x2184xe || (_0x2184x9[_0x4197[208]] = _0x2184xd, _0x2184x9[_0x4197[209]] = _0x2184xe);
                        var _0x2184xf = window[_0x4197[271]],
                            _0x2184x17 = _0x2184xd * _0x2184xf,
                            _0x2184x4 = _0x2184xe * _0x2184xf,
                            _0x2184x7 = Math[_0x4197[194]](_0x2184x17 * _0x2184x17 + _0x2184x4 * _0x2184x4) / Math[_0x4197[194]](2455780),
                            _0x2184x18 = this[_0x4197[281]] * _0x2184x7 / _0x2184xf,
                            _0x2184x19 = this[_0x4197[397]] ? this[_0x4197[397]][_0x4197[264]] : this[_0x4197[187]][_0x4197[210]],
                            _0x2184x1a = _0x2184x19[_0x4197[184]] * _0x2184x18 - _0x2184xd / 2,
                            _0x2184x1b = _0x2184x19[_0x4197[185]] * _0x2184x18 - _0x2184xe / 2,
                            _0x2184x1c = _0x2184x19[_0x4197[184]] - _0x2184xd / 2 / _0x2184x18,
                            _0x2184x1d = _0x2184x19[_0x4197[184]] + _0x2184xd / 2 / _0x2184x18,
                            _0x2184xa = _0x2184x19[_0x4197[185]] - _0x2184xe / 2 / _0x2184x18,
                            _0x2184x20 = _0x2184x19[_0x4197[185]] + _0x2184xe / 2 / _0x2184x18,
                            _0x2184x21 = function(_0x2184x9) { var _0x2184x2 = 1 < arguments[_0x4197[3]] && void(0) !== arguments[1] ? arguments[1] : 0; return _0x2184x30(_0x2184x1c - _0x2184x2, _0x2184x1d + _0x2184x2, _0x2184x9[_0x4197[184]]) && _0x2184x30(_0x2184xa - _0x2184x2, _0x2184x20 + _0x2184x2, _0x2184x9[_0x4197[185]]) },
                            _0x2184x22 = function(_0x2184x9) { var _0x2184x2 = 1 < arguments[_0x4197[3]] && void(0) !== arguments[1] ? arguments[1] : 0; return 0 < _0x2184x31(_0x2184x9[_0x4197[255]][_0x4197[244]] - _0x2184x2, _0x2184x9[_0x4197[255]][_0x4197[245]] + _0x2184x2, _0x2184x1c, _0x2184x1d) && 0 < _0x2184x31(_0x2184x9[_0x4197[255]][_0x4197[359]] - _0x2184x2, _0x2184x9[_0x4197[255]][_0x4197[360]] + _0x2184x2, _0x2184xa, _0x2184x20) };
                        _0x2184x16[_0x4197[456]](), _0x2184x16[_0x4197[457]](0, 0, _0x2184xd, _0x2184xe), _0x2184x16[_0x4197[286]](-_0x2184x1a, -_0x2184x1b), _0x2184x16[_0x4197[281]](_0x2184x18, _0x2184x18), _0x2184x16[_0x4197[286]](0, -_0x2184xc), this[_0x4197[384]][_0x4197[180]](function(_0x2184x9) { _0x2184x22(_0x2184x9[_0x4197[83]][_0x4197[259]], _0x2184x3) && _0x2184x44(_0x2184x16, _0x2184x9[_0x4197[83]][_0x4197[259]][_0x4197[254]], _0x2184x9[_0x4197[341]][_0x4197[435]] || _0x2184x9[_0x4197[341]][_0x4197[430]][_0x4197[436]]) }), _0x2184x16[_0x4197[458]] = _0x4197[176], _0x2184x16[_0x4197[459]] = _0x4197[460], this[_0x4197[384]][_0x4197[180]](function(_0x2184x9) { _0x2184x9[_0x4197[356]][_0x4197[331]][_0x4197[222]] && _0x2184x22(_0x2184x9[_0x4197[356]][_0x4197[331]], _0x2184x3) && (_0x2184x45(_0x2184x16, _0x2184x9[_0x4197[341]][_0x4197[430]][_0x4197[436]], _0x2184x9[_0x4197[356]], _0x2184x9[_0x4197[264]], _0x2184x3), _0x2184x16[_0x4197[285]](), _0x2184x16[_0x4197[459]] = _0x4197[461], _0x2184x16[_0x4197[462]](_0x2184x9[_0x4197[83]][_0x4197[259]][_0x4197[254]]), _0x2184x45(_0x2184x16, _0x2184x9[_0x4197[341]][_0x4197[435]] || _0x2184x9[_0x4197[341]][_0x4197[430]][_0x4197[436]], _0x2184x9[_0x4197[356]], _0x2184x9[_0x4197[264]], _0x2184x3 + 2), _0x2184x16[_0x4197[288]]()) }), _0x2184x16[_0x4197[459]] = _0x4197[463], _0x2184x16[_0x4197[286]](0, _0x2184xc), this[_0x4197[384]][_0x4197[180]](function(_0x2184x2) { _0x2184x21(_0x2184x2[_0x4197[264]], 4 * _0x2184x3) && (_0x2184x16[_0x4197[285]](), _0x2184x2[_0x4197[341]][_0x4197[340]][_0x4197[464]][_0x4197[180]](function(_0x2184x9) { return _0x2184x48(_0x2184x16, _0x2184x2, _0x2184x9, _0x2184x10[_0x4197[391]]) }), _0x2184x16[_0x4197[288]]()) }), this[_0x4197[384]][_0x4197[180]](function(_0x2184x9) {
                            ! function(_0x2184x9, _0x2184x2, _0x2184x3, _0x2184xc, _0x2184xd) {
                                var _0x2184xe = 24 * _0x2184xc / window[_0x4197[271]];
                                _0x2184x9[_0x4197[285]](), _0x2184x9[_0x4197[286]](_0x2184x2[_0x4197[264]][_0x4197[184]], _0x2184x2[_0x4197[264]][_0x4197[185]]), _0x2184x9[_0x4197[281]](1.001 / _0x2184x3, 1.001 / _0x2184x3), _0x2184x9[_0x4197[273]] = _0x4197[36][_0x4197[178]](_0x2184xe, _0x4197[274])[_0x4197[178]](_0x2184xd), _0x2184x9[_0x4197[276]] = _0x4197[210], _0x2184x9[_0x4197[277]] = _0x4197[360], _0x2184x9[_0x4197[272]] = _0x2184x2[_0x4197[341]][_0x4197[430]][_0x4197[465]], _0x2184x9[_0x4197[279]](_0x2184x2[_0x4197[98]], 0, -10 * _0x2184x3), _0x2184x9[_0x4197[288]]()
                            }(_0x2184x16, _0x2184x9, _0x2184x18, _0x2184x7, _0x2184x11)
                        }), _0x2184x16[_0x4197[459]] = _0x4197[461], this[_0x4197[384]][_0x4197[180]](function(_0x2184x2) { _0x2184x21(_0x2184x2[_0x4197[264]], 4 * _0x2184x3) && (_0x2184x16[_0x4197[285]](), _0x2184x2[_0x4197[341]][_0x4197[340]][_0x4197[466]][_0x4197[180]](function(_0x2184x9) { return _0x2184x48(_0x2184x16, _0x2184x2, _0x2184x9, _0x2184x10[_0x4197[391]]) }), _0x2184x16[_0x4197[288]]()) }), _0x2184x16[_0x4197[467]] = 0.6, this[_0x4197[384]][_0x4197[180]](function(_0x2184x9) { _0x2184x9[_0x4197[355]] !== _0x2184x9[_0x4197[83]] && _0x2184x22(_0x2184x9[_0x4197[356]][_0x4197[331]], _0x2184x3) && _0x2184x45(_0x2184x16, _0x2184x9[_0x4197[341]][_0x4197[430]][_0x4197[436]], _0x2184x9[_0x4197[356]], _0x2184x9[_0x4197[264]], _0x2184x3) }), _0x2184x16[_0x4197[467]] = 1, this[_0x4197[384]][_0x4197[180]](function(_0x2184x9) { _0x2184x22(_0x2184x9[_0x4197[83]][_0x4197[259]], _0x2184x3) && _0x2184x44(_0x2184x16, _0x2184x9[_0x4197[83]][_0x4197[259]][_0x4197[254]], _0x2184x9[_0x4197[341]][_0x4197[430]][_0x4197[383]]) }), _0x2184x44(_0x2184x16, this[_0x4197[372]][_0x4197[259]][_0x4197[254]], _0x4197[468]), _0x2184x16[_0x4197[286]](0, 3 * _0x2184xc), _0x2184x44(_0x2184x16, this[_0x4197[372]][_0x4197[259]][_0x4197[254]], _0x4197[469]), _0x2184x16[_0x4197[286]](0, -3 * _0x2184xc), _0x2184x16[_0x4197[272]] = function(_0x2184x9, _0x2184x2) { return _0x2184x28 || ((_0x2184x28 = _0x2184x9[_0x4197[472]](_0x2184x2[_0x4197[208]] / 2, 0, _0x2184x2[_0x4197[208]] / 2, _0x2184x2[_0x4197[209]]))[_0x4197[471]](0, _0x4197[470]), _0x2184x28[_0x4197[471]](0.5, _0x4197[473]), _0x2184x28[_0x4197[471]](1, _0x4197[474])), _0x2184x28 }(_0x2184x16, this[_0x4197[187]]), _0x2184x16[_0x4197[475]](_0x2184x17 / -2, _0x2184x4 / -2, this[_0x4197[187]][_0x4197[208]] + _0x2184x17, this[_0x4197[187]][_0x4197[209]] + _0x2184x4), _0x2184x16[_0x4197[476]] = _0x4197[176], _0x2184x16[_0x4197[459]] = _0x4197[463], _0x2184x16[_0x4197[476]] = _0x4197[477], _0x2184x16[_0x4197[458]] = _0x4197[477], this[_0x4197[406]][_0x4197[180]](function(_0x2184x9) { return 0 < _0x2184x9[_0x4197[267]] && _0x2184x21(_0x2184x9[_0x4197[264]], _0x2184x3) && _0x2184x9[_0x4197[270]](_0x2184x16) }), _0x2184x16[_0x4197[281]](1 / _0x2184x18, 1 / _0x2184x18), this[_0x4197[400]][_0x4197[180]](function(_0x2184x9) { return _0x2184x9[_0x4197[270]](_0x2184x16, _0x2184x11, _0x2184x18, _0x2184x7) }), _0x2184x16[_0x4197[281]](_0x2184x18, _0x2184x18);
                        var _0x2184xb = this[_0x4197[384]][0];
                        _0x2184xb && function(_0x2184x9, _0x2184x2, _0x2184x3, _0x2184xc) {
                            var _0x2184xd = window[_0x4197[271]],
                                _0x2184xe = 24 * _0x2184xc / _0x2184xd;
                            _0x2184x9[_0x4197[285]](), _0x2184x9[_0x4197[286]](_0x2184x2[_0x4197[264]][_0x4197[184]], _0x2184x2[_0x4197[264]][_0x4197[185]]), _0x2184x9[_0x4197[281]](1 / (_0x2184x3 * _0x2184xd), 1 / (_0x2184x3 * _0x2184xd)), _0x2184x9[_0x4197[272]] = _0x4197[478], _0x2184x9[_0x4197[333]] = _0x4197[479], _0x2184x9[_0x4197[476]] = _0x4197[176], _0x2184x9[_0x4197[332]] = 1, _0x2184x9[_0x4197[286]](0, -10 * _0x2184x3 * _0x2184xd), _0x2184x9[_0x4197[286]](0, -_0x2184xe * _0x2184xd), _0x2184x9[_0x4197[281]](_0x2184xc, _0x2184xc), _0x2184x9[_0x4197[286]](0, -4), _0x2184x9[_0x4197[286]](0, -12), _0x2184x9[_0x4197[287]](_0x2184x46), _0x2184x9[_0x4197[334]](_0x2184x46), _0x2184x9[_0x4197[288]]()
                        }(_0x2184x16, _0x2184xb, _0x2184x18, _0x2184x7);
                        var _0x2184x1 = _0x2184xb && _0x2184xb[_0x4197[83]][_0x4197[249]] / this[_0x4197[249]];
                        _0x2184x16[_0x4197[456]]();
                        var _0x2184x5 = function(_0x2184x9, _0x2184x2, _0x2184x3, _0x2184xc, _0x2184xd, _0x2184xe) {
                            var _0x2184xf = _0x2184x27(_0x2184xe, 4),
                                _0x2184x10 = _0x2184xf[0],
                                _0x2184x11 = _0x2184xf[1],
                                _0x2184x16 = _0x2184xf[2],
                                _0x2184x17 = _0x2184xf[3];
                            _0x2184x9[_0x4197[480]](), _0x2184x9[_0x4197[251]](_0x2184x2 + _0x2184x10, _0x2184x3), _0x2184x9[_0x4197[252]](_0x2184x2 + _0x2184xc - _0x2184x11, _0x2184x3), _0x2184x9[_0x4197[481]](_0x2184x2 + _0x2184xc, _0x2184x3, _0x2184x2 + _0x2184xc, _0x2184x3 + _0x2184x11), _0x2184x9[_0x4197[252]](_0x2184x2 + _0x2184xc, _0x2184x3 + _0x2184xd - _0x2184x16), _0x2184x9[_0x4197[481]](_0x2184x2 + _0x2184xc, _0x2184x3 + _0x2184xd, _0x2184x2 + _0x2184xc - _0x2184x16, _0x2184x3 + _0x2184xd), _0x2184x9[_0x4197[252]](_0x2184x2 + _0x2184x17, _0x2184x3 + _0x2184xd), _0x2184x9[_0x4197[481]](_0x2184x2, _0x2184x3 + _0x2184xd, _0x2184x2, _0x2184x3 + _0x2184xd - _0x2184x17), _0x2184x9[_0x4197[252]](_0x2184x2, _0x2184x3 + _0x2184x10), _0x2184x9[_0x4197[481]](_0x2184x2, _0x2184x3, _0x2184x2 + _0x2184x10, _0x2184x3), _0x2184x9[_0x4197[253]](), _0x2184x9[_0x4197[287]]()
                        };
                        _0x2184x16[_0x4197[281]](1 / _0x2184xf, 1 / _0x2184xf);
                        var _0x2184x6, _0x2184x8, _0x2184x12, _0x2184x13, _0x2184x14 = -(-(16 / 9 * (_0x2184x8 = (_0x2184x6 = 4) - 2.25) + (_0x2184x12 = 9 / 16 - 16 / 9) * _0x2184x6) + _0x2184x8 * function(_0x2184x9, _0x2184x2, _0x2184x3) { return _0x2184x3 < _0x2184x9 ? _0x2184x9 : _0x2184x2 < _0x2184x3 ? _0x2184x2 : _0x2184x3 }(9 / 16, 16 / 9, _0x2184x17 / _0x2184x4)) / _0x2184x12,
                            _0x2184x15 = _0x2184x17 / _0x2184x14,
                            _0x2184x1e = 16 * _0x2184x7,
                            _0x2184x1f = _0x2184x15 / 2,
                            _0x2184x23 = 20 * _0x2184x7,
                            _0x2184x24 = 1.5 * _0x2184x23,
                            _0x2184x25 = _0x2184x24 / 2,
                            _0x2184x26 = 10 * _0x2184x7,
                            _0x2184x29 = 4 * _0x2184x7,
                            _0x2184x2a = function(_0x2184x9, _0x2184x2, _0x2184x3, _0x2184xc) {
                                var _0x2184xd = _0x2184x1e + _0x2184x3 * (_0x2184x24 + _0x2184x26),
                                    _0x2184xe = _0x2184x9[_0x4197[83]][_0x4197[249]] / _0x2184x10[_0x4197[249]] / _0x2184xc * _0x2184x1f;
                                _0x2184x13 && _0x2184x13 - 0.05 * _0x2184x1f < _0x2184xe && (_0x2184xe = _0x2184x13 - 0.05 * _0x2184x1f);
                                var _0x2184xf = _0x2184x17 - (_0x2184x1f + (_0x2184x13 = _0x2184xe));
                                _0x2184x16[_0x4197[272]] = _0x4197[482], _0x2184x5(_0x2184x16, _0x2184xf, _0x2184xd + 4 * _0x2184x29, _0x2184x15, _0x2184x24, [_0x2184x25, 0, 0, _0x2184x25]), _0x2184x16[_0x4197[272]] = _0x2184x9[_0x4197[341]][_0x4197[430]][_0x4197[383]], _0x2184x5(_0x2184x16, _0x2184xf, _0x2184xd + _0x2184x29, _0x2184x15, _0x2184x24, [_0x2184x25, 0, 0, _0x2184x25]), _0x2184x16[_0x4197[272]] = _0x2184x9[_0x4197[341]][_0x4197[430]][_0x4197[436]], _0x2184x5(_0x2184x16, _0x2184xf, _0x2184xd, _0x2184x15, _0x2184x24, [_0x2184x25, 0, 0, _0x2184x25]), _0x2184x16[_0x4197[272]] = _0x2184x9[_0x4197[341]][_0x4197[430]][_0x4197[483]], _0x2184x16[_0x4197[273]] = _0x4197[36][_0x4197[178]](_0x2184x23, _0x4197[274])[_0x4197[178]](_0x2184x11), _0x2184x16[_0x4197[276]] = _0x4197[244], _0x2184x16[_0x4197[277]] = _0x4197[278], _0x2184x16[_0x4197[279]](_0x4197[36][_0x4197[178]](_0x2184x2, ". ")[_0x4197[178]]((_0x2184x9[_0x4197[83]][_0x4197[249]] / _0x2184x10[_0x4197[249]] * 100)[_0x4197[449]](2), _0x4197[484])[_0x4197[178]](_0x2184x9[_0x4197[98]]), _0x2184xf + _0x2184x25, _0x2184xd + _0x2184x25 + 2)
                            };
                        if (this[_0x4197[397]]) {
                            for (var _0x2184x2b = !1, _0x2184x2c = 0; _0x2184x2c < 5; _0x2184x2c++) {
                                var _0x2184x2d = this[_0x4197[384]][_0x2184x2c];
                                _0x2184x2d && (_0x2184x2d === this[_0x4197[397]] && (_0x2184x2b = !0), _0x2184x2a(_0x2184x2d, _0x2184x2c + 1, _0x2184x2c, _0x2184x1))
                            };
                            if (!_0x2184x2b && this[_0x4197[397]] && !this[_0x4197[397]][_0x4197[441]]) {
                                var _0x2184x2e = this[_0x4197[384]][_0x4197[239]](function(_0x2184x9) { return _0x2184x9 === _0x2184x10[_0x4197[397]] });
                                _0x2184x2a(this[_0x4197[397]], _0x2184x2e + 1, 6, _0x2184x1)
                            };
                            _0x2184x16[_0x4197[272]] = _0x4197[482], _0x2184x5(_0x2184x16, 0, _0x2184x1e, _0x2184x15, _0x2184x24 + _0x2184x29, [0, (_0x2184x24 + _0x2184x29) / 2, (_0x2184x24 + _0x2184x29) / 2, 0]);
                            var _0x2184x2f = 0.25 * _0x2184x15 + this[_0x4197[397]][_0x4197[83]][_0x4197[249]] / this[_0x4197[249]] * _0x2184x15 * 0.75;
                            _0x2184x16[_0x4197[272]] = this[_0x4197[397]][_0x4197[341]][_0x4197[430]][_0x4197[383]], _0x2184x5(_0x2184x16, 0, _0x2184x1e + _0x2184x29, _0x2184x2f, _0x2184x24, [0, _0x2184x25, _0x2184x25, 0]), _0x2184x16[_0x4197[272]] = this[_0x4197[397]][_0x4197[341]][_0x4197[430]][_0x4197[436]], _0x2184x5(_0x2184x16, 0, _0x2184x1e, _0x2184x2f, _0x2184x24, [0, _0x2184x25, _0x2184x25, 0]), _0x2184x16[_0x4197[272]] = this[_0x4197[397]][_0x4197[341]][_0x4197[430]][_0x4197[465]], _0x2184x16[_0x4197[273]] = _0x4197[36][_0x4197[178]](_0x2184x23, _0x4197[274])[_0x4197[178]](_0x2184x11), _0x2184x16[_0x4197[276]] = _0x4197[244], _0x2184x16[_0x4197[277]] = _0x4197[278], _0x2184x16[_0x4197[279]](_0x4197[36][_0x4197[178]]((this[_0x4197[397]][_0x4197[83]][_0x4197[249]] / this[_0x4197[249]] * 100)[_0x4197[449]](2), _0x4197[450]), _0x2184x25, _0x2184x1e + _0x2184x25 + 2), _0x2184x16[_0x4197[272]] = _0x4197[486], _0x2184x16[_0x4197[277]] = _0x4197[359], _0x2184x16[_0x4197[279]](_0x4197[36][_0x4197[178]](this[_0x4197[392]][_0x4197[487]], _0x4197[488])[_0x4197[178]](this[_0x4197[439]][_0x4197[449]](2), _0x4197[450]), _0x2184x1e / 2, _0x2184x1e + _0x2184x24 + _0x2184x29 + _0x2184x1e / 2);
                            var _0x2184x32 = _0x2184x1e + _0x2184x24 + _0x2184x29 + _0x2184x23 + _0x2184x1e / 2 + 4;
                            _0x2184x16[_0x4197[272]] = _0x4197[489], _0x2184x5(_0x2184x16, 0, _0x2184x32, 1.5 * _0x2184x24, _0x2184x24, [0, _0x2184x25, _0x2184x25, 0]),
                                function(_0x2184x9, _0x2184x2, _0x2184x3, _0x2184xc) { _0x2184x9[_0x4197[285]](), _0x2184x9[_0x4197[272]] = _0x4197[490], _0x2184x9[_0x4197[286]](_0x2184x2, _0x2184x3), _0x2184x9[_0x4197[281]](_0x2184xc, _0x2184xc), _0x2184x9[_0x4197[287]](_0x2184x47), _0x2184x9[_0x4197[288]]() }(_0x2184x16, 1.4 * _0x2184x24 / 2, _0x2184x32 + _0x2184x24 / 2, _0x2184x7), _0x2184x16[_0x4197[273]] = _0x4197[36][_0x4197[178]](_0x2184x23, _0x4197[274])[_0x4197[178]](_0x2184x11), _0x2184x16[_0x4197[277]] = _0x4197[278], _0x2184x16[_0x4197[279]](_0x4197[184][_0x4197[178]](this[_0x4197[397]][_0x4197[387]][_0x4197[440]]), 1.5 * _0x2184x24 + 8, _0x2184x32 + _0x2184x25)
                        }
                    }
                }
            }, {
                key: _0x4197[491],
                value: function(_0x2184x9) {
                    var _0x2184x2 = this[_0x4197[412]],
                        _0x2184x3 = this[_0x4197[413]],
                        _0x2184xc = { updateTime: _0x2184x3[_0x4197[492]] - _0x2184x3[_0x4197[493]], renderTime: _0x2184x3[_0x4197[494]] - _0x2184x3[_0x4197[495]], frameTime: _0x2184x9, events: this[_0x4197[414]] };
                    this[_0x4197[407]][_0x4197[4]](_0x2184xc), 240 < this[_0x4197[407]][_0x4197[3]] && this[_0x4197[407]][_0x4197[322]]();
                    var _0x2184xd = function(_0x2184x9, _0x2184x2) { return 0.95 * _0x2184x9 + 0.05 * _0x2184x2 };
                    _0x2184x2[_0x4197[496]] = _0x2184xd(_0x2184x2[_0x4197[496]], 1e3 / _0x2184x9), _0x2184x2[_0x4197[497]] = _0x2184xd(_0x2184x2[_0x4197[497]], _0x2184x3[_0x4197[492]] - _0x2184x3[_0x4197[493]]), _0x2184x2[_0x4197[498]] = _0x2184xd(_0x2184x2[_0x4197[498]], _0x2184x3[_0x4197[447]] - _0x2184x3[_0x4197[446]]), _0x2184x2[_0x4197[499]] = _0x2184xd(_0x2184x2[_0x4197[499]], _0x2184x3[_0x4197[453]] - _0x2184x3[_0x4197[452]]), _0x2184x2[_0x4197[500]] = _0x2184xd(_0x2184x2[_0x4197[500]], _0x2184x3[_0x4197[494]] - _0x2184x3[_0x4197[495]]), this[_0x4197[414]] = { returns: 0, kills: 0 }
                }
            }, { key: _0x4197[501], value: function() {} }, {
                key: _0x4197[502],
                value: function(_0x2184x9) {
                    this[_0x4197[384]][_0x4197[180]](function(_0x2184x9) { _0x2184x9[_0x4197[83]][_0x4197[259]][_0x4197[183]][_0x4197[3]], _0x2184x9[_0x4197[356]][_0x4197[331]][_0x4197[183]][_0x4197[3]] });
                    var _0x2184x2 = this[_0x4197[187]][_0x4197[219]]();
                    Object[_0x4197[103]](_0x2184x2)[_0x4197[3]]
                }
            }, {
                key: _0x4197[357],
                value: function(_0x2184x1d) {
                    var _0x2184xa = this;
                    if (!_0x2184x1d[_0x4197[441]]) {
                        this[_0x4197[414]][_0x4197[503]]++;
                        var _0x2184x2 = _0x2184x1d[_0x4197[356]][_0x4197[331]][_0x4197[205]](),
                            _0x2184x9 = _0x2184x1d[_0x4197[83]],
                            _0x2184x3 = _0x2184x9[_0x4197[259]][_0x4197[183]][_0x4197[239]](function(_0x2184x9) { return _0x2184x9[_0x4197[222]] === _0x2184x2[_0x4197[222]] }),
                            _0x2184xc = _0x2184x9[_0x4197[259]][_0x4197[183]][_0x4197[239]](function(_0x2184x9) { return _0x2184x9[_0x4197[222]] === _0x2184x2[_0x4197[223]] }),
                            _0x2184xd = Math[_0x4197[168]](_0x2184xc, _0x2184x3),
                            _0x2184xe = Math[_0x4197[169]](_0x2184xc, _0x2184x3);
                        _0x2184xd !== _0x2184x3 && _0x2184x2[_0x4197[232]]();
                        var _0x2184xf = _0x2184x2[_0x4197[207]](),
                            _0x2184x10 = _0x2184x9[_0x4197[259]][_0x4197[207]](),
                            _0x2184x11 = _0x2184x10[_0x4197[188]][_0x4197[141]](_0x2184x10, [_0x2184xd, _0x2184xe - _0x2184xd + 1][_0x4197[178]](_0x2184x20(_0x2184xf)));
                        _0x2184x11[_0x4197[322]](), _0x2184x11[_0x4197[25]](), _0x2184x11[_0x4197[232]](), _0x2184x11[_0x4197[4]][_0x4197[141]](_0x2184x11, _0x2184x20(_0x2184xf));
                        var _0x2184x16, _0x2184x17 = new _0x2184x3e(_0x2184x11);
                        _0x2184x17[_0x4197[248]]() < 0 ? (_0x2184x16 = new _0x2184x3e(_0x2184x10[_0x4197[232]]()), _0x2184x9[_0x4197[259]][_0x4197[243]](_0x2184x2, _0x2184xd, _0x2184xe)) : (_0x2184x16 = _0x2184x17, _0x2184x9[_0x4197[259]][_0x4197[188]](_0x2184x2, _0x2184xd, _0x2184xe)), _0x2184x9[_0x4197[249]] += _0x2184x16[_0x4197[249]](), _0x2184x9[_0x4197[259]][_0x4197[250]](), this[_0x4197[384]][_0x4197[261]](function(_0x2184x9) { return _0x2184x9 !== _0x2184x1d })[_0x4197[180]](function(_0x2184x9) { _0x2184x9[_0x4197[441]] || (_0x2184x9[_0x4197[355]] === _0x2184x9[_0x4197[83]] && _0x2184x16[_0x4197[247]](_0x2184x9[_0x4197[264]]) && _0x2184xa[_0x4197[362]](_0x2184x9, _0x2184x1d), _0x2184x9[_0x4197[356]][_0x4197[331]][_0x4197[222]] && _0x2184x16[_0x4197[247]](_0x2184x9[_0x4197[356]][_0x4197[331]][_0x4197[222]]) && _0x2184xa[_0x4197[362]](_0x2184x9, _0x2184x1d)) });
                        for (var _0x2184x4 = [], _0x2184x7 = _0x2184x1d[_0x4197[356]][_0x4197[331]][_0x4197[183]], _0x2184x18 = _0x2184x7[_0x4197[3]], _0x2184x19 = function(_0x2184x2) {
                                var _0x2184x3 = _0x2184x2 === _0x2184x18 ? _0x2184x7[_0x2184x2 - 1][_0x4197[223]] : _0x2184x7[_0x2184x2][_0x4197[222]],
                                    _0x2184x9 = _0x2184x3[_0x4197[183]][_0x4197[261]](function(_0x2184x9) { return _0x2184x9[_0x4197[226]][_0x4197[236]] !== _0x2184x1d[_0x4197[356]] && _0x2184x9[_0x4197[226]][_0x4197[236]] !== _0x2184x1d[_0x4197[83]] && _0x2184x9[_0x4197[222]] === _0x2184x3 });
                                if (_0x2184x9[_0x4197[3]]) {
                                    var _0x2184xc = _0x2184x9[_0x4197[246]](function(_0x2184x9) { return { owner: _0x2184x9[_0x4197[226]][_0x4197[236]], point: _0x2184x3, segment: _0x2184x9, index: _0x2184x2 } });
                                    if (_0x2184x4[_0x4197[3]]) {
                                        var _0x2184xd = _0x2184x4[_0x4197[261]](function(_0x2184x2) { return _0x2184xc[_0x4197[241]](function(_0x2184x9) { return _0x2184x9[_0x4197[236]] === _0x2184x2[_0x4197[236]] }) });
                                        if (_0x2184xd[_0x4197[3]]) {
                                            var _0x2184xe = _0x2184xd[0],
                                                _0x2184xf = _0x2184xc[_0x4197[218]](function(_0x2184x9) { return _0x2184x9[_0x4197[236]] === _0x2184xe[_0x4197[236]] });
                                            ! function(_0x2184x9) {
                                                var _0x2184x2 = _0x2184x9[_0x4197[236]],
                                                    _0x2184x3 = _0x2184x9[_0x4197[505]],
                                                    _0x2184xc = _0x2184x9[_0x4197[506]],
                                                    _0x2184xd = _0x2184x9[_0x4197[507]],
                                                    _0x2184xe = _0x2184x9[_0x4197[508]],
                                                    _0x2184xf = _0x2184x9[_0x4197[367]],
                                                    _0x2184x10 = _0x2184x9[_0x4197[366]];
                                                if (_0x2184xf[_0x4197[226]] !== _0x2184x2[_0x4197[259]] && (_0x2184xf = _0x2184x2[_0x4197[259]][_0x4197[183]][_0x4197[218]](function(_0x2184x9) { return _0x2184x9[_0x4197[222]] === _0x2184xd })), _0x2184x10[_0x4197[226]] !== _0x2184x2[_0x4197[259]] && (_0x2184x10 = _0x2184x2[_0x4197[259]][_0x4197[183]][_0x4197[218]](function(_0x2184x9) { return _0x2184x9[_0x4197[222]] === _0x2184xe })), _0x2184xf !== _0x2184x10) {
                                                    var _0x2184x11 = _0x2184x1d[_0x4197[356]][_0x4197[331]][_0x4197[207]]()[_0x4197[188]](_0x2184x3, _0x2184xc - _0x2184x3 + 1),
                                                        _0x2184x16 = _0x2184x2[_0x4197[259]][_0x4197[183]][_0x4197[239]](function(_0x2184x9) { return _0x2184x9 === _0x2184xf }),
                                                        _0x2184x17 = _0x2184x2[_0x4197[259]][_0x4197[183]][_0x4197[239]](function(_0x2184x9) { return _0x2184x9 === _0x2184x10 }),
                                                        _0x2184x4 = Math[_0x4197[168]](_0x2184x17, _0x2184x16),
                                                        _0x2184x7 = Math[_0x4197[169]](_0x2184x17, _0x2184x16);
                                                    _0x2184x4 !== _0x2184x16 && _0x2184x11[_0x4197[232]]();
                                                    var _0x2184x18 = _0x2184x2[_0x4197[259]][_0x4197[207]](),
                                                        _0x2184x19 = _0x2184x18[_0x4197[188]][_0x4197[141]](_0x2184x18, [_0x2184x4, _0x2184x7 - _0x2184x4 + 1][_0x4197[178]](_0x2184x20(_0x2184x11)));
                                                    _0x2184x19[_0x4197[322]](), _0x2184x19[_0x4197[25]](), _0x2184x19[_0x4197[4]][_0x4197[141]](_0x2184x19, _0x2184x20(_0x2184x11[_0x4197[96]]()[_0x4197[232]]()));
                                                    var _0x2184x1a, _0x2184x1b = new _0x2184x3e(_0x2184x19),
                                                        _0x2184x1c = new _0x2184x3e(_0x2184x18);
                                                    _0x2184x1a = _0x2184x2[_0x4197[263]][_0x4197[355]] === _0x2184x2[_0x4197[263]][_0x4197[83]] && _0x2184x1b[_0x4197[247]](_0x2184x2[_0x4197[263]][_0x4197[264]]) || _0x2184x2[_0x4197[263]][_0x4197[355]] !== _0x2184x2[_0x4197[263]][_0x4197[83]] && _0x2184x1b[_0x4197[247]](_0x2184x2[_0x4197[263]][_0x4197[356]][_0x4197[331]][_0x4197[222]]) ? (_0x2184x2[_0x4197[259]][_0x4197[245]](_0x2184x11, _0x2184x4, _0x2184x7), _0x2184x1c) : (_0x2184x2[_0x4197[259]][_0x4197[244]](_0x2184x11, _0x2184x4, _0x2184x7), _0x2184x1b), _0x2184x2[_0x4197[249]] -= _0x2184x1a[_0x4197[249]](), _0x2184x2[_0x4197[259]][_0x4197[250]](), _0x2184xa[_0x4197[384]][_0x4197[180]](function(_0x2184x9) { _0x2184x2[_0x4197[263]] !== _0x2184x9 && _0x2184x9[_0x4197[355]] === _0x2184x2 && _0x2184x1a[_0x4197[247]](_0x2184x9[_0x4197[264]]) && (_0x2184x9[_0x4197[355]] = null) })
                                                }
                                            }({ owner: _0x2184xe[_0x4197[236]], enter: _0x2184xe[_0x4197[354]], startPoint: _0x2184xe[_0x4197[353]], startT: _0x2184xe[_0x4197[504]], leave: _0x2184xf[_0x4197[354]], endPoint: _0x2184xf[_0x4197[353]], endT: _0x2184xf[_0x4197[504]] });
                                            var _0x2184x10 = _0x2184x1d[_0x4197[356]][_0x4197[221]][_0x4197[218]](function(_0x2184x9) { return _0x2184x9[_0x4197[353]][_0x4197[204]](_0x2184x3) })[_0x4197[221]][_0x4197[261]](function(_0x2184x9) { return _0x2184x9[_0x4197[83]] === _0x2184xe[_0x4197[236]] });
                                            1 !== _0x2184x10[_0x4197[3]] && !1 !== _0x2184x10[_0x2184x10[_0x4197[3]] - 1][_0x4197[367]] || (_0x2184xc = _0x2184xc[_0x4197[261]](function(_0x2184x9) { return _0x2184x9[_0x4197[236]] !== _0x2184xe[_0x4197[236]] }))
                                        };
                                        _0x2184x4 = _0x2184xc
                                    } else {
                                        var _0x2184x11 = _0x2184x1d[_0x4197[356]][_0x4197[221]][_0x4197[218]](function(_0x2184x9) { return _0x2184x9[_0x4197[353]][_0x4197[204]](_0x2184x3) });
                                        if (!_0x2184x11) { return { v: !1 } };
                                        _0x2184x4 = _0x2184xc[_0x4197[261]](function(_0x2184x2) { var _0x2184x9 = _0x2184x11[_0x4197[221]][_0x4197[261]](function(_0x2184x9) { return _0x2184x9[_0x4197[83]] === _0x2184x2[_0x4197[236]] }); return !!_0x2184x9[_0x4197[3]] && _0x2184x9[_0x2184x9[_0x4197[3]] - 1][_0x4197[367]] })
                                    }
                                }
                            }, _0x2184x1a = 0; _0x2184x1a <= _0x2184x18; _0x2184x1a++) { var _0x2184x1b = _0x2184x19(_0x2184x1a); if (_0x4197[157] === _0x2184x22(_0x2184x1b)) { return _0x2184x1b[_0x4197[175]] } };
                        this[_0x4197[384]][_0x4197[180]](function(_0x2184x9) { _0x2184x1d !== _0x2184x9 && _0x2184x16[_0x4197[247]](_0x2184x9[_0x4197[264]]) && (_0x2184x9[_0x4197[355]] = _0x2184x1d[_0x4197[83]]) })
                    }
                }
            }, {
                key: _0x4197[509],
                value: function() {
                    var _0x2184x9 = this;
                    this[_0x4197[410]] = !0;
                    var _0x2184x2 = _0x2184x33(),
                        _0x2184x3 = 1e3 / 60;
                    this[_0x4197[409]] = this[_0x4197[409]] || (_0x2184x2 < _0x2184x3 ? 0 : _0x2184x2 - _0x2184x3);
                    var _0x2184xc = _0x2184x2 - this[_0x4197[409]];
                    _0x2184xc < 1 && (_0x2184xc = 1), this[_0x4197[491]](_0x2184xc), 1e4 < _0x2184xc && (_0x2184xc = 1e4 + Math[_0x4197[284]]());
                    var _0x2184xd = 2 * _0x2184x3;
                    for (this[_0x4197[413]][_0x4197[493]] = _0x2184x2; 0 < _0x2184xc;) {
                        var _0x2184xe = _0x2184xc <= _0x2184xd ? _0x2184xc : _0x2184xc < 2 * _0x2184xd ? _0x2184xc / 2 + Math[_0x4197[284]]() : _0x2184xd + Math[_0x4197[284]]();
                        this[_0x4197[269]](_0x2184xe), _0x2184xc -= _0x2184xe
                    };
                    this[_0x4197[413]][_0x4197[492]] = _0x2184x33(), this[_0x4197[413]][_0x4197[495]] = _0x2184x33(), this[_0x4197[403]] && (this[_0x4197[65]](), this[_0x4197[501]]()), this[_0x4197[413]][_0x4197[494]] = _0x2184x33(), this[_0x4197[409]] = _0x2184x2, requestAnimationFrame(function() { return _0x2184x9[_0x4197[509]]() })
                }
            }]), _0x2184x4
        }(),
        _0x2184x57 = { level: 0, scale: 1, x: 0, y: 0, pivot: { x: 0.5, y: 0.5 }, direction: _0x4197[36], rotation: 0, image: null },
        _0x2184x58 = { scale: 1, x: 0, y: 0, layers: [] },
        _0x2184x59 = { main: _0x4197[510], back: _0x4197[510], nick: _0x4197[510], plate: _0x4197[510], particles: [_0x4197[510]] },
        _0x2184x5a = { name: _0x4197[36], colors: _0x2184x59, pattern: null, avatar: null },
        _0x2184x5b = document[_0x4197[92]](_0x4197[91], _0x4197[87]),
        _0x2184x5c = function _0x2184x9(_0x2184x2, _0x2184xf, _0x2184x10, _0x2184x3) {
            var _0x2184x11 = this;
            _0x2184x19(this, _0x2184x9), Object[_0x4197[358]](this, _0x2184x5a, _0x2184x10), this[_0x4197[430]] = Object[_0x4197[358]]({}, _0x2184x59, _0x2184x10[_0x4197[430]]), this[_0x4197[435]] = null;
            var _0x2184xc = _0x2184x2[_0x4197[336]],
                _0x2184x16 = _0x2184x2[_0x4197[401]],
                _0x2184x17 = _0x2184xc * _0x2184x16;
            if (_0x2184x10[_0x4197[435]]) {
                var _0x2184x4 = new Image;
                _0x2184x4[_0x4197[511]] = function() {
                    var _0x2184x9 = _0x2184x4[_0x4197[208]],
                        _0x2184x2 = _0x2184x4[_0x4197[209]],
                        _0x2184x3 = 100 / _0x2184x9 * _0x2184x16 * (_0x2184x10[_0x4197[435]][_0x4197[281]] || 1),
                        _0x2184xc = document[_0x4197[93]](_0x4197[432]);
                    _0x2184xc[_0x4197[208]] = ~~(_0x2184x9 * _0x2184x3), _0x2184xc[_0x4197[209]] = ~~(_0x2184x2 * _0x2184x3), _0x2184xc[_0x4197[434]](_0x4197[433])[_0x4197[347]](_0x2184x4, 0, 0, _0x2184xc[_0x4197[208]], _0x2184xc[_0x4197[209]]), _0x2184x11[_0x4197[435]] = _0x2184xf[_0x4197[434]](_0x4197[433])[_0x4197[513]](_0x2184xc, _0x4197[512]);
                    var _0x2184xd = 1 / _0x2184x16,
                        _0x2184xe = _0x2184x5b[_0x4197[514]]()[_0x4197[281]](_0x2184xd, _0x2184xd);
                    _0x2184x11[_0x4197[435]][_0x4197[515]] && _0x2184x11[_0x4197[435]][_0x4197[515]](_0x2184xe)
                }, _0x2184x4[_0x4197[516]] = _0x2184x3 + _0x2184x10[_0x4197[435]][_0x4197[517]]
            };
            var _0x2184xd = function(_0x2184x9, _0x2184x2) {
                var _0x2184x3 = document[_0x4197[93]](_0x4197[432]);
                _0x2184x3[_0x4197[208]] = _0x2184x17, _0x2184x3[_0x4197[209]] = _0x2184x17;
                var _0x2184xc = _0x2184x3[_0x4197[434]](_0x4197[433]);
                return _0x2184xc[_0x4197[272]] = _0x2184x2, _0x2184xc[_0x4197[475]](0, 0, _0x2184x17, _0x2184x17), _0x2184xc[_0x4197[272]] = _0x2184x9, _0x2184xc[_0x4197[475]](_0x2184x17 / 6, _0x2184x17 / 6, 2 / 3 * _0x2184x17, 2 / 3 * _0x2184x17), _0x2184x3
            };
            _0x2184x10[_0x4197[340]] ? (this[_0x4197[340]] = Object[_0x4197[358]]({}, _0x2184x58, _0x2184x10[_0x4197[340]]), this[_0x4197[340]][_0x4197[518]] = (_0x2184x10[_0x4197[340]][_0x4197[518]] || [])[_0x4197[246]](function(_0x2184x9) {
                var _0x2184xf = Object[_0x4197[358]]({}, _0x2184x57, _0x2184x9);
                _0x2184xf[_0x4197[346]] = Object[_0x4197[358]]({ x: 0.5, y: 0.5 }, _0x2184x9[_0x4197[346]]);
                var _0x2184x10 = new Image;
                return _0x2184x10[_0x4197[516]] = _0x2184x3 + _0x2184xf[_0x4197[517]], _0x2184x10[_0x4197[511]] = function() {
                    var _0x2184x9 = _0x2184x10[_0x4197[338]] || _0x2184x10[_0x4197[208]],
                        _0x2184x2 = _0x2184x10[_0x4197[339]] || _0x2184x10[_0x4197[209]],
                        _0x2184x3 = _0x2184x17 * _0x2184x11[_0x4197[340]][_0x4197[281]] * _0x2184xf[_0x4197[281]] / _0x2184x9,
                        _0x2184xc = ~~(_0x2184x9 * _0x2184x3),
                        _0x2184xd = ~~(_0x2184x2 * _0x2184x3),
                        _0x2184xe = document[_0x4197[93]](_0x4197[432]);
                    _0x2184xe[_0x4197[208]] = _0x2184xc, _0x2184xe[_0x4197[209]] = _0x2184xd, _0x2184xe[_0x4197[434]](_0x4197[433])[_0x4197[347]](_0x2184x10, 0, 0, _0x2184xc, _0x2184xd), _0x2184xf[_0x4197[337]] = _0x2184xe
                }, _0x2184xf
            })) : this[_0x4197[340]] = Object[_0x4197[358]]({}, _0x2184x58, { layers: [Object[_0x4197[358]]({}, _0x2184x57, { image: _0x2184xd(this[_0x4197[430]][_0x4197[383]], this[_0x4197[430]][_0x4197[383]]) }), Object[_0x4197[358]]({}, _0x2184x57, { level: 1, image: _0x2184xd(this[_0x4197[430]][_0x4197[436]], this[_0x4197[430]][_0x4197[383]]) })] }), this[_0x4197[340]][_0x4197[464]] = this[_0x4197[340]][_0x4197[518]][_0x4197[261]](function(_0x2184x9) { return 1 <= _0x2184x9[_0x4197[343]] })[_0x4197[24]](function(_0x2184x9, _0x2184x2) { return _0x2184x9[_0x4197[343]] - _0x2184x2[_0x4197[343]] }), this[_0x4197[340]][_0x4197[466]] = this[_0x4197[340]][_0x4197[518]][_0x4197[261]](function(_0x2184x9) { return _0x2184x9[_0x4197[343]] < 1 })[_0x4197[24]](function(_0x2184x9, _0x2184x2) { return _0x2184x2[_0x4197[343]] - _0x2184x9[_0x4197[343]] })
        },
        _0x2184x5d = function() {
            function _0x2184x9(_0x2184xe, _0x2184xf) {
                var _0x2184x10 = this;
                _0x2184x19(this, _0x2184x9), this[_0x4197[391]] = _0x2184xe, this[_0x4197[396]] = _0x2184xf, this[_0x4197[519]] = [], this[_0x4197[520]] = [];
                [0, 20, 40, 60, 80, 140, 160, 180, 200, 220, 260, 280, 300, 320, 340][_0x4197[180]](function(_0x2184x9) {
                    var _0x2184x2 = _0x2184x36(_0x2184x9, 60, 100),
                        _0x2184x3 = _0x2184x36(_0x2184x9, 90, 100),
                        _0x2184xc = _0x2184x36(_0x2184x9, 90, 75),
                        _0x2184xd = _0x2184x36(_0x2184x9, 90, 55);
                    _0x2184x10[_0x4197[519]][_0x4197[4]](new _0x2184x5c(_0x2184xe, _0x2184xf, { colors: { main: _0x2184x3, back: _0x2184xc, nick: _0x2184xd, plate: _0x2184xd, particles: [_0x2184x2, _0x2184x3, _0x2184xc, _0x2184xd] } }))
                })
            }
            return _0x2184x16(_0x2184x9, [{
                key: _0x4197[190],
                value: function(_0x2184x9, _0x2184x2) {
                    var _0x2184x3 = this;
                    _0x2184x9[_0x4197[180]](function(_0x2184x9) { return _0x2184x3[_0x4197[519]][_0x4197[4]](new _0x2184x5c(_0x2184x3[_0x4197[391]], _0x2184x3[_0x4197[396]], _0x2184x9, _0x2184x2)) })
                }
            }, {
                key: _0x4197[138],
                value: function(_0x2184x2, _0x2184x9) {
                    _0x4197[521] === _0x2184x2 && (_0x2184x2 = _0x4197[36]);
                    var _0x2184x3, _0x2184xc = this[_0x4197[519]][_0x4197[3]];
                    if (!_0x2184xc) { throw new Error(_0x4197[522]) };
                    if (_0x2184x2) { _0x2184x3 = this[_0x4197[519]][_0x4197[239]](function(_0x2184x9) { return _0x2184x9[_0x4197[98]] === _0x2184x2 }) } else {
                        if (_0x2184x9) {
                            var _0x2184xd = this[_0x4197[519]][_0x4197[261]](function(_0x2184x9) { return _0x2184x9[_0x4197[98]] === _0x2184x2 }),
                                _0x2184xe = _0x2184xd[~~(Math[_0x4197[284]]() * _0x2184xd[_0x4197[3]])];
                            _0x2184x3 = this[_0x4197[519]][_0x4197[186]](_0x2184xe)
                        } else { _0x2184x3 = ~~(Math[_0x4197[284]]() * _0x2184xc) }
                    };
                    if (0 <= _0x2184x3) { var _0x2184xf = this[_0x4197[519]][_0x4197[188]](_0x2184x3, 1)[0]; return this[_0x4197[520]][_0x4197[4]](_0x2184xf), _0x2184xf }
                }
            }, { key: _0x4197[189], value: function(_0x2184x9) { var _0x2184x2 = this[_0x4197[520]][_0x4197[186]](_0x2184x9); - 1 !== _0x2184x2 && this[_0x4197[520]][_0x4197[188]](_0x2184x2, 1), this[_0x4197[519]][_0x4197[4]](_0x2184x9) } }]), _0x2184x9
        }(),
        _0x2184x5e = function() {
            function _0x2184x9() { _0x2184x19(this, _0x2184x9), this[_0x4197[445]] = !1 }
            return _0x2184x16(_0x2184x9, [{ key: _0x4197[138], value: function() { return _0x4197[119] != typeof Cookies && void(0) !== Cookies[_0x4197[138]](_0x4197[523]) && (this[_0x4197[445]] = _0x4197[524] === Cookies[_0x4197[138]](_0x4197[523])), this[_0x4197[445]] } }, { key: _0x4197[320], value: function() { this[_0x4197[445]] = !this[_0x4197[445]], _0x4197[119] != typeof Cookies && Cookies[_0x4197[139]](_0x4197[523], this[_0x4197[445]]) } }]), _0x2184x9
        }(),
        _0x2184x5f = _0x4197[526][_0x4197[131]](_0x4197[525]),
        _0x2184x60 = { yourScore: _0x4197[527], bestScore: _0x4197[528], newText: _0x4197[529], timePlayed: _0x4197[530], playersKilled: _0x4197[531], playAgain: _0x4197[532], menu: _0x4197[533], messages: [_0x4197[534], _0x4197[535], _0x4197[536], _0x4197[537]], nosupport: _0x4197[538], btnPlay: _0x4197[539], placeholderText: _0x4197[540], defaultPlayerName: window.location.host, bestTxt: _0x4197[542], killText: _0x4197[543] },
        _0x2184x61 = new(function() {
            function _0x2184x9() { _0x2184x19(this, _0x2184x9), this[_0x4197[423]] = _0x2184x5f }
            return _0x2184x16(_0x2184x9, [{ key: _0x4197[138], value: function() { return this[_0x4197[423]][~~(Math[_0x4197[284]]() * this[_0x4197[423]][_0x4197[3]])] } }, { key: _0x4197[424], value: function() {} }]), _0x2184x9
        }()),
        _0x2184x62 = {};
    if (Path2D) {
        _0x2184x62[_0x4197[152]] = function(_0x2184x9) {
            var _0x2184x2 = new _0x2184x3b(2e3, 2e3, 50);
            _0x2184x39[_0x4197[187]] = _0x2184x2;
            var _0x2184x3 = new _0x2184x39(1e3, 1e3),
                _0x2184xc = 0.95 * Math[_0x4197[168]](_0x2184x3[_0x4197[184]], _0x2184x3[_0x4197[185]]),
                _0x2184xd = new _0x2184x3f(_0x2184x35(_0x2184x3[_0x4197[184]], _0x2184x3[_0x4197[185]], 300, _0x2184xc), _0x2184xc),
                _0x2184xe = new _0x2184x5d(_0x2184x4d, _0x2184x9),
                _0x2184xf = new _0x2184x5e;
            _0x2184x62[_0x4197[371]] = new _0x2184x56(_0x2184x4d, _0x2184x9, _0x2184x2, _0x2184xd, _0x2184xe, null, _0x2184x61, _0x2184xf, _0x2184x60)
        }, _0x2184x62[_0x4197[544]] = !0;
        var _0x2184x63, _0x2184x64 = 0,
            _0x2184x65 = function(_0x2184x9) { for (; _0x2184x9--;) { _0x2184x62[_0x4197[371]][_0x4197[269]](50 + Math[_0x4197[284]]()), _0x2184x64++ } };
        _0x2184x62[_0x4197[545]] = function(_0x2184x9) {
            var _0x2184x2 = _0x2184x62[_0x4197[371]];
            _0x2184x63 = setInterval(function() { _0x2184x61[_0x4197[423]][_0x4197[3]] && (_0x2184x65(5), _0x2184x4d[_0x4197[546]] < _0x2184x64 && (clearInterval(_0x2184x63), _0x2184x62[_0x4197[544]] = !1, _0x2184x2[_0x4197[403]] = !0, !_0x2184x2[_0x4197[410]] && _0x2184x2[_0x4197[509]](), _0x2184x9 && _0x2184x9())) }, 0)
        }, _0x2184x62[_0x4197[222]] = function(_0x2184x9, _0x2184x2, _0x2184x3) {
            var _0x2184xc = _0x2184x62[_0x4197[371]];
            if (_0x2184x62[_0x4197[544]]) { clearInterval(_0x2184x63); for (var _0x2184xd = _0x2184x33(); _0x2184x64 < _0x2184x4d[_0x4197[546]] && (_0x2184x65(5), !(500 < _0x2184x33() - _0x2184xd));) {; } };
            _0x2184xc[_0x4197[439]] = _0x2184x2, _0x2184xc[_0x4197[425]](_0x2184x9), _0x2184x3 && (_0x2184xc[_0x4197[402]] = _0x2184x3), _0x2184x62[_0x4197[544]] = !1, _0x2184xc[_0x4197[403]] = !0, !_0x2184xc[_0x4197[410]] && _0x2184xc[_0x4197[509]]()
        }
    } else { _0x2184x62 = null };
    var _0x2184x66, _0x2184x67, _0x2184x68 = _0x2184x62,
        _0x2184x69 = [],
        _0x2184x6a = _0x2184x1[_0x4197[65]];
    _0x2184x1[_0x4197[65]] = function(_0x2184x9) { _0x2184x6a && _0x2184x6a(_0x2184x9), _0x2184x66 = 0, (_0x2184x67 = _0x2184x9[_0x4197[16]])[_0x4197[547]] && (_0x2184x67[_0x4197[547]][_0x4197[548]] = _0x2184x73(_0x2184x67[_0x4197[547]][_0x4197[548]])) };
    var _0x2184x6b = _0x2184x1[_0x4197[105]];
    _0x2184x1[_0x4197[105]] = function(_0x2184x9) {
        _0x2184x6b && _0x2184x6b(_0x2184x9);
        var _0x2184x2 = _0x2184x9[_0x4197[16]];
        if (_0x2184x2) {
            var _0x2184x3 = _0x2184x2[_0x4197[547]];
            _0x2184x3 && (_0x2184x3[_0x4197[49]] = _0x2184x73(_0x2184x3[_0x4197[49]]))
        }
    };
    var _0x2184x6c = _0x2184x1[_0x4197[108]];

    function _0x2184x6d(_0x2184x9) { _0x2184x1[_0x4197[549]] && _0x2184x1[_0x4197[549]](_0x2184x67); var _0x2184x2 = _0x2184x67[_0x4197[547]] || (_0x2184x67[_0x4197[547]] = { i: [], t: [], u: [] }); return _0x2184x9 >= _0x2184x2[_0x4197[550]][_0x4197[3]] && _0x2184x2[_0x4197[550]][_0x4197[4]]({}), _0x2184x2[_0x4197[550]][_0x2184x9] }

    function _0x2184x6e(_0x2184x9) {
        return function(_0x2184x3, _0x2184x9, _0x2184x2) {
            var _0x2184xc = _0x2184x6d(_0x2184x66++);
            return null == _0x2184xc[_0x4197[16]] && (_0x2184xc[_0x4197[16]] = _0x2184x67, _0x2184xc[_0x4197[43]] = [null == _0x2184x2 ? _0x2184x76(null, _0x2184x9) : _0x2184x2(_0x2184x9), function(_0x2184x9) {
                var _0x2184x2 = _0x2184x3(_0x2184xc[_0x4197[43]][0], _0x2184x9);
                _0x2184xc[_0x4197[43]][0] !== _0x2184x2 && (_0x2184xc[_0x4197[43]][0] = _0x2184x2, _0x2184xc[_0x4197[16]][_0x4197[111]]({}))
            }]), _0x2184xc[_0x4197[43]]
        }(_0x2184x76, _0x2184x9)
    }

    function _0x2184x6f(_0x2184x9, _0x2184x2) {
        var _0x2184x3 = _0x2184x6d(_0x2184x66++);
        (function(_0x2184x3, _0x2184x9) { return null == _0x2184x3 || _0x2184x9[_0x4197[241]](function(_0x2184x9, _0x2184x2) { return _0x2184x9 !== _0x2184x3[_0x2184x2] }) })(_0x2184x3[_0x4197[175]], _0x2184x2) && (_0x2184x3[_0x4197[43]] = _0x2184x9, _0x2184x3[_0x4197[175]] = _0x2184x2, _0x2184x67[_0x4197[547]][_0x4197[548]][_0x4197[4]](_0x2184x3), _0x2184x70(_0x2184x67))
    }
    _0x2184x1[_0x4197[108]] = function(_0x2184x9) {
        _0x2184x6c && _0x2184x6c(_0x2184x9);
        var _0x2184x2 = _0x2184x9[_0x4197[16]];
        if (_0x2184x2) {
            var _0x2184x3 = _0x2184x2[_0x4197[547]];
            _0x2184x3 && _0x2184x3[_0x4197[550]][_0x4197[180]](function(_0x2184x9) { return _0x2184x9[_0x4197[551]] && _0x2184x9[_0x4197[551]]() })
        }
    };
    var _0x2184x70 = function() {};

    function _0x2184x71() { _0x2184x69[_0x4197[180]](function(_0x2184x9) { _0x2184x9[_0x4197[552]] = !1, _0x2184x9[_0x4197[84]] && (_0x2184x9[_0x4197[547]][_0x4197[548]] = _0x2184x73(_0x2184x9[_0x4197[547]][_0x4197[548]])) }), _0x2184x69 = [] }

    function _0x2184x72() { setTimeout(_0x2184x71, 0) }

    function _0x2184x73(_0x2184x9) { return _0x2184x9[_0x4197[180]](_0x2184x74), _0x2184x9[_0x4197[180]](_0x2184x75), [] }

    function _0x2184x74(_0x2184x9) { _0x2184x9[_0x4197[551]] && _0x2184x9[_0x4197[551]]() }

    function _0x2184x75(_0x2184x9) {
        var _0x2184x2 = _0x2184x9[_0x4197[43]]();
        _0x4197[55] == typeof _0x2184x2 && (_0x2184x9[_0x4197[551]] = _0x2184x2)
    }

    function _0x2184x76(_0x2184x9, _0x2184x2) { return _0x4197[55] == typeof _0x2184x2 ? _0x2184x2(_0x2184x9) : _0x2184x2 }
    _0x4197[119] != typeof window && (_0x2184x70 = function(_0x2184x9) {!_0x2184x9[_0x4197[552]] && (_0x2184x9[_0x4197[552]] = !0) && 1 === _0x2184x69[_0x4197[4]](_0x2184x9) && (_0x2184x1[_0x4197[553]] ? _0x2184x1[_0x4197[553]](_0x2184x71) : requestAnimationFrame(_0x2184x72)) });
    var _0x2184x77, _0x2184x78, _0x2184x79, _0x2184x7a, _0x2184x7b, _0x2184x7c = function(_0x2184x9) {
            var _0x2184x2 = _0x2184x9[_0x4197[554]],
                _0x2184x3 = _0x2184x27(_0x2184x6e(0), 2),
                _0x2184xc = _0x2184x3[0],
                _0x2184xd = _0x2184x3[1];
            return _0x2184x6f(function() { var _0x2184x9 = setInterval(function() { return _0x2184xd(function(_0x2184x9) { return (_0x2184x9 + 1) % _0x2184x2[_0x4197[3]] }) }, 3e3); return function() { return clearInterval(_0x2184x9) } }, []), _0x2184xb(_0x4197[555], { class: _0x4197[556] }, _0x2184xb(_0x4197[555], { class: _0x4197[557], key: _0x2184xc }, _0x2184x2[_0x2184xc]))
        },
        _0x2184x7d = function(_0x2184x9) {
            var _0x2184x2 = _0x2184x9[_0x4197[558]],
                _0x2184x3 = _0x2184x9[_0x4197[559]],
                _0x2184xc = _0x2184x9[_0x4197[560]],
                _0x2184xd = (_0x2184x9[_0x4197[544]], _0x2184x9[_0x4197[222]]),
                _0x2184xe = (_0x2184x9[_0x4197[561]], _0x2184xc);
            return _0x2184xb(_0x4197[555], { class: _0x4197[562] }, _0x2184xb(_0x4197[555], { class: _0x4197[563] }, _0x2184xb(_0x4197[564], { src: _0x4197[565], alt: "logo", width: "600" })), _0x2184xb(_0x2184x7c, { messages: _0x2184x60[_0x4197[554]] }), _0x2184xb(_0x4197[566], { class: _0x4197[567] + " play_con", onSubmit: function(_0x2184x9) { playNow(_0x2184x9, _0x2184xe, () => _0x2184xd()) } }, _0x2184xb(_0x4197[568], { type: _0x4197[19], id: _0x4197[465], name: _0x4197[465], value: _0x2184x2, autocomplete: _0x4197[569], placeholder: _0x2184x60[_0x4197[570]], maxlength: _0x4197[571], onchange: function(_0x2184x9) { _0x2184x3(_0x2184x9[_0x4197[318]][_0x4197[61]]) } }), _0x2184xb(_0x4197[330], { id: _0x4197[567], name: _0x4197[567], class: _0x4197[572] + (_0x2184xe ? _0x4197[36] : _0x4197[573]) }, _0x2184x60[_0x4197[574]])), !_0x2184xc && _0x2184xb(_0x4197[551], { class: _0x4197[575] }, _0x2184x60[_0x4197[576]]), _0x2184xb(_0x4197[555], { class: "ads-play-con" }, _0x2184xb(_0x4197[555], { id: "paper-io-org_300x250" }, _0x2184xb('script', { innerText: " aiptag.cmd.display.push(function() { aipDisplayTag.display('paper-io-org_300x250');});" }))))
        },
        _0x2184x7e = function(_0x2184x9) {
            var _0x2184x2 = _0x2184x9[_0x4197[558]],
                _0x2184x3 = _0x2184x9[_0x4197[577]],
                _0x2184xc = _0x2184x9[_0x4197[578]],
                _0x2184xd = _0x2184x9[_0x4197[579]],
                _0x2184xe = _0x2184x9[_0x4197[580]],
                _0x2184xf = _0x2184x9[_0x4197[581]],
                _0x2184x10 = _0x2184x9[_0x4197[561]];
            return _0x2184xf[_0x4197[222]](_0x2184x2, _0x2184x3, function(_0x2184x9) { _0x2184x9[_0x4197[582]] > _0x2184x3 && (_0x2184xc(_0x2184x9[_0x4197[582]]), _0x2184x9[_0x4197[583]] = !0), _0x2184xd(_0x2184x9), _0x2184x10(_0x4197[584]) }), _0x2184xe(!1), null
        },
        _0x2184x7f = function(_0x2184x9) {
            var _0x2184x2 = _0x2184x9[_0x4197[577]],
                _0x2184x3 = _0x2184x9[_0x4197[584]],
                _0x2184xc = _0x2184x9[_0x4197[222]],
                _0x2184xd = _0x2184x9[_0x4197[561]];
            return _0x2184xb(_0x4197[555], { class: _0x4197[562] }, _0x2184xb(_0x4197[555], { class: _0x4197[563] }, _0x2184xb(_0x4197[564], { src: _0x4197[565] })), _0x2184xb(_0x4197[555], { class: _0x4197[585] }, _0x2184xb(_0x4197[330], { class: _0x4197[572], id: _0x4197[586], onClick: _0x2184xc }, _0x2184x60[_0x4197[587]]), _0x2184xb(_0x4197[330], { class: _0x4197[588], id: _0x4197[589], onClick: function() { refReshAds(); return _0x2184xd(_0x4197[589]) } }, _0x2184x60[_0x4197[589]])), _0x2184xb(_0x4197[555], { class: _0x4197[590], style: "margin-top:150px" }, _0x2184xb(_0x4197[555], { class: "ads-970-250" }, _0x2184xb(_0x4197[555], { id: "paper-io-org_970x250" }, _0x2184xb('script', { innerText: "aiptag.cmd.display.push(function() {aipDisplayTag.display('paper-io-org_970x250');});" }))), _0x2184xb(_0x4197[555], { class: _0x4197[584] }, _0x2184xb(_0x4197[555], { class: _0x4197[244] }, _0x2184xb(_0x4197[555], null, _0x2184x60[_0x4197[592]], _0x4197[593]), _0x2184xb(_0x4197[555], null, _0x2184x3[_0x4197[583]] && _0x2184xb(_0x4197[594], { class: _0x4197[595] }, _0x2184x60[_0x4197[596]], _0x4197[488]), _0x2184x60[_0x4197[577]], _0x4197[593]), _0x2184xb(_0x4197[555], null, _0x2184x60[_0x4197[597]], _0x4197[593]), _0x2184xb(_0x4197[555], null, _0x2184x60[_0x4197[598]], _0x4197[593])), _0x2184xb(_0x4197[555], { class: _0x4197[245] }, _0x2184xb(_0x4197[555], null, _0x4197[36][_0x4197[178]](_0x2184x3[_0x4197[582]][_0x4197[449]](2), _0x4197[450])), _0x2184xb(_0x4197[555], null, _0x2184x2[_0x4197[449]](2) + _0x4197[450]), _0x2184xb(_0x4197[555], null, new Date(_0x2184x3[_0x4197[267]])[_0x4197[599]]()[_0x4197[96]](14, -5)), _0x2184xb(_0x4197[555], null, _0x2184x3[_0x4197[440]])))))
        },
        _0x2184x80 = { intervals: [0, 12e4, 3e4], current: 0, last: Date[_0x4197[117]](), started: !1, show: function() { Date[_0x4197[117]]() - _0x2184x80[_0x4197[409]] >= _0x2184x80[_0x4197[600]][_0x2184x80[_0x4197[107]]] ? _0x2184x80[_0x4197[601]]() : _0x2184x80[_0x4197[222]] && _0x2184x80[_0x4197[222]]() }, run: function() { _0x2184x80[_0x4197[222]] && _0x2184x80[_0x4197[222]]() }, onOpen: function() { _0x2184x80[_0x4197[602]] = !0, _0x2184x80[_0x4197[603]] && _0x2184x80[_0x4197[603]]() }, onClose: function() { _0x2184x80[_0x4197[602]] && (_0x2184x80[_0x4197[409]] = Date[_0x4197[117]](), _0x2184x80[_0x4197[107]] < _0x2184x80[_0x4197[600]][_0x4197[3]] - 1 && _0x2184x80[_0x4197[107]]++), _0x2184x80[_0x4197[604]] && _0x2184x80[_0x4197[222]] && _0x2184x80[_0x4197[222]]() } };
    _0x2184x77 = _0x2184xb(function(_0x2184x9) {
        var _0x2184x2 = _0x2184x9[_0x4197[581]],
            _0x2184x3 = _0x2184x9[_0x4197[605]],
            _0x2184xc = _0x2184x9[_0x4197[606]],
            _0x2184xd = !!_0x2184x2,
            _0x2184xe = function(_0x2184x9) { var _0x2184x2 = _0x2184x6d(_0x2184x66++); return null == _0x2184x2[_0x4197[43]] && (_0x2184x2[_0x4197[43]] = { current: _0x2184x9 }), _0x2184x2[_0x4197[43]] }(null),
            _0x2184xf = _0x2184x27(_0x2184x6e(_0x4197[589]), 2),
            _0x2184x10 = _0x2184xf[0],
            _0x2184x11 = _0x2184xf[1],
            _0x2184x16 = _0x2184x27(_0x2184x6e(!0), 2),
            _0x2184x17 = _0x2184x16[0],
            _0x2184x4 = _0x2184x16[1],
            _0x2184x7 = _0x2184x3[_0x4197[140]](_0x4197[607]) || { nickName: _0x4197[36], bestScore: 0 },
            _0x2184x18 = _0x2184x27(_0x2184x6e(_0x2184x7[_0x4197[558]]), 2),
            _0x2184x19 = _0x2184x18[0],
            _0x2184x1a = _0x2184x18[1],
            _0x2184x1b = _0x2184x27(_0x2184x6e(_0x2184x7[_0x4197[577]]), 2),
            _0x2184x1c = _0x2184x1b[0],
            _0x2184x1d = _0x2184x1b[1];
        _0x2184x3[_0x4197[139]](_0x4197[607], { nickName: _0x2184x19, bestScore: _0x2184x1c }), _0x2184x6f(function() { _0x2184x2 && (_0x2184x2[_0x4197[152]](_0x2184xe[_0x4197[107]]), _0x2184x2[_0x4197[545]](function() { return _0x2184x4(!1) })) }, []), _0x2184xc[_0x4197[222]] = function() { _0x2184x2[_0x4197[371]][_0x4197[403]] = !0, _0x2184x11(_0x4197[371]) }, _0x2184xc[_0x4197[603]] = function() { _0x2184x2[_0x4197[371]][_0x4197[403]] = !1 };
        var _0x2184xa = _0x2184xc[_0x4197[608]],
            _0x2184x20 = _0x2184x27(_0x2184x6e(null), 2),
            _0x2184x21 = _0x2184x20[0],
            _0x2184x22 = _0x2184x20[1];
        return _0x2184xb(_0x2184x12, null, _0x2184xb(_0x4197[432], { class: _0x4197[371] === _0x2184x10 || _0x2184x17 ? _0x4197[36] : _0x4197[609], id: _0x4197[396], ref: _0x2184xe }), _0x2184xb(_0x4197[555], { id: _0x4197[610], class: _0x4197[371] === _0x2184x10 ? _0x4197[611] : _0x4197[36] }, _0x4197[589] === _0x2184x10 && _0x2184xb(_0x2184x7d, { nickName: _0x2184x19, setNickName: _0x2184x1a, playable: _0x2184xd, preparing: _0x2184x17, start: _0x2184xa, route: _0x2184x11 }), _0x4197[371] === _0x2184x10 && _0x2184xb(_0x2184x7e, { nickName: _0x2184x19, bestScore: _0x2184x1c, setBestScore: _0x2184x1d, setResults: _0x2184x22, setPreparing: _0x2184x4, api: _0x2184x2, route: _0x2184x11 }), _0x4197[584] === _0x2184x10 && _0x2184xb(_0x2184x7f, { bestScore: _0x2184x1c, results: _0x2184x21, start: _0x2184xa, route: _0x2184x11 })))
    }, { api: _0x2184x68, storage: _0x2184xf, ads: _0x2184x80 }), _0x2184x78 = document[_0x4197[612]](_0x4197[371]), _0x2184x1[_0x4197[613]] && _0x2184x1[_0x4197[613]](_0x2184x77, _0x2184x78), _0x2184x7a = _0x2184x78[_0x4197[80]], _0x2184x77 = _0x2184xb(_0x2184x12, null, [_0x2184x77]), _0x2184x7b = [], _0x2184x15(_0x2184x78, _0x2184x79 ? _0x2184x77 : _0x2184x78[_0x4197[80]] = _0x2184x77, _0x2184x79 ? void(0) : _0x2184x7a, _0x2184x5, void(0) !== _0x2184x78[_0x4197[113]], _0x2184x79 ? [_0x2184x79] : _0x2184x7a ? null : _0x2184x6[_0x4197[96]][_0x4197[85]](_0x2184x78[_0x4197[95]]), _0x2184x7b, _0x2184x77, _0x2184x79 || _0x2184x5), _0x2184xe(_0x2184x7b, _0x2184x77)
}()