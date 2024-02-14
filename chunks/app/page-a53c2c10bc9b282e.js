(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[931], {
    5286: function(e, t, s) {
        Promise.resolve().then(s.bind(s, 8836))
    },
    8836: function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, {
            default: function() {
                return l
            }
        });
        var r = s(3827)
          , n = s(4090);
        function l() {
            let[e,t] = (0,
            n.useState)(0)
              , [s,l] = (0,
            n.useState)(!1);
            return (0,
            r.jsx)("div", {
                className: "flex flex-col items-center justify-center h-screen -mt-16",
                children: s ? (0,
                r.jsxs)(r.Fragment, {
                    children: [(0,
                    r.jsx)("img", {
                        src: "https://i.pinimg.com/originals/95/08/6d/95086ddda91cbaa7b414d8b457247049.gif"
                    }), (0,
                    r.jsx)("div", {
                        className: "text-4xl font-bold my-4 text-center",
                        children: "รักค้าบจุ๊บๆ!!!"
                    })]
                }) : (0,
                r.jsxs)(r.Fragment, {
                    children: [(0,
                    r.jsx)("img", {
                        className: "h-[200px]",
                        src: "https://github.com/Foxfy/Valentine/blob/main/img/gifimg.gif?raw=true"
                    }), (0,
                    r.jsx)("h1", {
                        className: "text-4xl my-4 text-center",
                        children: "จะเป็นวันวาเลนไทน์ให้เค้ามั้ยครับ?"
                    }), (0,
                    r.jsxs)("div", {
                        className: "flex flex-wrap flex-col md:flex-row gap-4 items-center justify-center",
                        children: [(0,
                        r.jsx)("button", {
                            className: "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded",
                            style: {
                                fontSize: 20 * e + 16
                            },
                            onClick: ()=>l(!0),
                            children: "ช่ายย"
                        }), (0,
                        r.jsx)("button", {
                            onClick: ()=>{
                                t(e + 1)
                            }
                            ,
                            className: " bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
                            children: 0 === e ? "ไม่" : (()=>{
                                let t = ["ไม่", "แน่ใจแล้วเหรอ?", "แน่ใจจริงๆใช่มั้ย?", "แน่ใจของแน่ใจแล้วใช่มั้ย???", "ขอร้องนะค้าบ", "มาเป็นวาเลนไทน์ให้เค้า", "ถ้าเธอยังบอกไม่อยู่ เค้าจะเสียใจมากๆ", "เค้าเสียใจ", "เค้าเสียใจมากๆ", "เค้าเสียใจมากกๆๆๆๆ", "โอเค ชั่งมัน", "ล้อเล่น กดตกลงเดี๋ยวนี้", "เสียใจจจ โคตรเสียใจจ", "ใช่สิไม่รักกันแล้ว ;("];
                                return t[e % t.length]
                            }
                            )()
                        })]
                    })]
                })
            })
        }
    }
}, function(e) {
    e.O(0, [971, 69, 744], function() {
        return e(e.s = 5286)
    }),
    _N_E = e.O()
}
]);
