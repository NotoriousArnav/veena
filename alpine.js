import axios from 'axios';

var nw=function(a)
{
  a=a.split("");
  mw.p7(a,34);mw.qM(a,13);
  mw.UX(a,3);mw.p7(a,44);
  mw.qM(a,69);mw.UX(a,2);   
  mw.qM(a,58);mw.p7(a,24);
  mw.UX(a,1);
  return a.join("")
};

var mw=
{
    p7:function(a)
    {
      a.reverse()
    },
    UX:function(a,b)
    {
      a.splice(0,b)
    },
    qM:function(a,b)
    {
      var c=a[0];
      a[0]=a[b%a.length];
      a[b%a.length]=c
    }
};

export function Player() {
    return {
        init () {
            console.log('Init')
        },
        data: {
            Id: '5qZQEq_C3vc',
            track: {
                artist: 'Linkin Park',
                name: 'Numb'
            },
            lyrics: []
        },

        getLyrics() {
            console.log('Eat 5 star')
        },
        async getStream(Id) {
            
        }
    }
}