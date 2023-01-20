var Vo = Object.defineProperty;
var Jo = (e, t, n) => t in e ? Vo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var p = (e, t, n) => (Jo(e, typeof t != "symbol" ? t + "" : t, n), n);
import { defineComponent as Un, ref as Y, inject as Qo, reactive as Zo, computed as se, watch as U, onBeforeUnmount as Kn, onMounted as Vn, openBlock as qt, createElementBlock as le, normalizeClass as hn, unref as Yt, normalizeStyle as Jn, renderSlot as Oe, createCommentVNode as ti, provide as ei, nextTick as mt, onBeforeMount as ni, createElementVNode as oi, withDirectives as ii, createVNode as ri, mergeProps as gn, vShow as si, Fragment as ai, renderList as ci, createBlock as li, withCtx as ui } from "vue";
const Qn = (e) => !!(e && e.Window) && e instanceof e.Window;
let Zn, St;
function to(e) {
  Zn = e;
  const t = e.document.createTextNode("");
  t.ownerDocument !== e.document && typeof e.wrap == "function" && e.wrap(t) === t && (e = e.wrap(e)), St = e;
}
typeof window < "u" && window && to(window);
function gt(e) {
  return Qn(e) ? e : (e.ownerDocument || e).defaultView || St.window;
}
const fi = (e) => e === St || Qn(e), di = (e) => xe(e) && e.nodeType === 11, xe = (e) => !!e && typeof e == "object", eo = (e) => typeof e == "function", pi = (e) => typeof e == "number", hi = (e) => typeof e == "boolean", gi = (e) => typeof e == "string", mi = (e) => {
  if (!e || typeof e != "object")
    return !1;
  const t = gt(e) || St;
  return /object|function/.test(typeof Element) ? e instanceof Element || e instanceof t.Element : e.nodeType === 1 && typeof e.nodeName == "string";
}, vi = (e) => xe(e) && !!e.constructor && /function Object\b/.test(e.constructor.toString()), yi = (e) => xe(e) && typeof e.length < "u" && eo(e.splice), h = {
  window: fi,
  docFrag: di,
  object: xe,
  func: eo,
  number: pi,
  bool: hi,
  string: gi,
  element: mi,
  plainObject: vi,
  array: yi
};
function xi(e) {
  const {
    actions: t,
    Interactable: n,
    defaults: o
  } = e;
  n.prototype.draggable = ae.draggable, t.map.drag = ae, t.methodDict.drag = "draggable", o.actions.drag = ae.defaults;
}
function ze({
  interaction: e
}) {
  if (e.prepared.name !== "drag")
    return;
  const t = e.prepared.axis;
  t === "x" ? (e.coords.cur.page.y = e.coords.start.page.y, e.coords.cur.client.y = e.coords.start.client.y, e.coords.velocity.client.y = 0, e.coords.velocity.page.y = 0) : t === "y" && (e.coords.cur.page.x = e.coords.start.page.x, e.coords.cur.client.x = e.coords.start.client.x, e.coords.velocity.client.x = 0, e.coords.velocity.page.x = 0);
}
function mn({
  iEvent: e,
  interaction: t
}) {
  if (t.prepared.name !== "drag")
    return;
  const n = t.prepared.axis;
  if (n === "x" || n === "y") {
    const o = n === "x" ? "y" : "x";
    e.page[o] = t.coords.start.page[o], e.client[o] = t.coords.start.client[o], e.delta[o] = 0;
  }
}
const bi = function(t) {
  return h.object(t) ? (this.options.drag.enabled = t.enabled !== !1, this.setPerAction("drag", t), this.setOnEvents("drag", t), /^(xy|x|y|start)$/.test(t.lockAxis) && (this.options.drag.lockAxis = t.lockAxis), /^(xy|x|y)$/.test(t.startAxis) && (this.options.drag.startAxis = t.startAxis), this) : h.bool(t) ? (this.options.drag.enabled = t, this) : this.options.drag;
}, ae = {
  id: "actions/drag",
  install: xi,
  listeners: {
    "interactions:before-action-move": ze,
    "interactions:action-resume": ze,
    // dragmove
    "interactions:action-move": mn,
    "auto-start:check": (e) => {
      const {
        interaction: t,
        interactable: n,
        buttons: o
      } = e, i = n.options.drag;
      if (!(!(i && i.enabled) || // check mouseButton setting if the pointer is down
      t.pointerIsDown && /mouse|pointer/.test(t.pointerType) && !(o & n.options.drag.mouseButtons)))
        return e.action = {
          name: "drag",
          axis: i.lockAxis === "start" ? i.startAxis : i.lockAxis
        }, !1;
    }
  },
  draggable: bi,
  beforeMove: ze,
  move: mn,
  defaults: {
    startAxis: "xy",
    lockAxis: "xy"
  },
  getCursor() {
    return "move";
  }
}, no = ae, ot = {
  init: wi,
  document: null,
  DocumentFragment: null,
  SVGElement: null,
  SVGSVGElement: null,
  SVGElementInstance: null,
  Element: null,
  HTMLElement: null,
  Event: null,
  Touch: null,
  PointerEvent: null
};
function Nt() {
}
const Q = ot;
function wi(e) {
  const t = e;
  ot.document = t.document, ot.DocumentFragment = t.DocumentFragment || Nt, ot.SVGElement = t.SVGElement || Nt, ot.SVGSVGElement = t.SVGSVGElement || Nt, ot.SVGElementInstance = t.SVGElementInstance || Nt, ot.Element = t.Element || Nt, ot.HTMLElement = t.HTMLElement || ot.Element, ot.Event = t.Event, ot.Touch = t.Touch || Nt, ot.PointerEvent = t.PointerEvent || t.MSPointerEvent;
}
const it = {
  init: Si,
  supportsTouch: null,
  supportsPointerEvent: null,
  isIOS7: null,
  isIOS: null,
  isIe9: null,
  isOperaMobile: null,
  prefixedMatchesSelector: null,
  pEventTypes: null,
  wheelEvent: null
};
function Si(e) {
  const t = Q.Element, n = e.navigator || {};
  it.supportsTouch = "ontouchstart" in e || h.func(e.DocumentTouch) && Q.document instanceof e.DocumentTouch, it.supportsPointerEvent = n.pointerEnabled !== !1 && !!Q.PointerEvent, it.isIOS = /iP(hone|od|ad)/.test(n.platform), it.isIOS7 = /iP(hone|od|ad)/.test(n.platform) && /OS 7[^\d]/.test(n.appVersion), it.isIe9 = /MSIE 9/.test(n.userAgent), it.isOperaMobile = n.appName === "Opera" && it.supportsTouch && /Presto/.test(n.userAgent), it.prefixedMatchesSelector = "matches" in t.prototype ? "matches" : "webkitMatchesSelector" in t.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in t.prototype ? "mozMatchesSelector" : "oMatchesSelector" in t.prototype ? "oMatchesSelector" : "msMatchesSelector", it.pEventTypes = it.supportsPointerEvent ? Q.PointerEvent === e.MSPointerEvent ? {
    up: "MSPointerUp",
    down: "MSPointerDown",
    over: "mouseover",
    out: "mouseout",
    move: "MSPointerMove",
    cancel: "MSPointerCancel"
  } : {
    up: "pointerup",
    down: "pointerdown",
    over: "pointerover",
    out: "pointerout",
    move: "pointermove",
    cancel: "pointercancel"
  } : null, it.wheelEvent = Q.document && "onmousewheel" in Q.document ? "mousewheel" : "wheel";
}
const st = it;
function Ct(e, t) {
  if (e.contains)
    return e.contains(t);
  for (; t; ) {
    if (t === e)
      return !0;
    t = t.parentNode;
  }
  return !1;
}
function oo(e, t) {
  for (; h.element(e); ) {
    if (wt(e, t))
      return e;
    e = ct(e);
  }
  return null;
}
function ct(e) {
  let t = e.parentNode;
  if (h.docFrag(t)) {
    for (; (t = t.host) && h.docFrag(t); )
      ;
    return t;
  }
  return t;
}
function wt(e, t) {
  return St !== Zn && (t = t.replace(/\/deep\//g, " ")), e[st.prefixedMatchesSelector](t);
}
const Me = (e) => e.parentNode || e.host;
function Ei(e) {
  let t = [], n;
  for (let o = 0; o < e.length; o++) {
    const i = e[o], r = e[n];
    if (!i || o === n)
      continue;
    if (!r) {
      n = o;
      continue;
    }
    const s = Me(i), a = Me(r);
    if (s === i.ownerDocument)
      continue;
    if (a === i.ownerDocument) {
      n = o;
      continue;
    }
    if (s === a) {
      Ii(i, r) && (n = o);
      continue;
    }
    t = t.length ? t : vn(r);
    let l;
    if (r instanceof Q.HTMLElement && i instanceof Q.SVGElement && !(i instanceof Q.SVGSVGElement)) {
      if (i === a)
        continue;
      l = i.ownerSVGElement;
    } else
      l = i;
    const c = vn(l, r.ownerDocument);
    let u = 0;
    for (; c[u] && c[u] === t[u]; )
      u++;
    const f = [c[u - 1], c[u], t[u]];
    if (f[0]) {
      let g = f[0].lastChild;
      for (; g; ) {
        if (g === f[1]) {
          n = o, t = c;
          break;
        } else if (g === f[2])
          break;
        g = g.previousSibling;
      }
    }
  }
  return n;
}
function vn(e, t) {
  const n = [];
  let o = e, i;
  for (; (i = Me(o)) && o !== t && i !== o.ownerDocument; )
    n.unshift(o), o = i;
  return n;
}
function Ii(e, t) {
  const n = parseInt(gt(e).getComputedStyle(e).zIndex, 10) || 0, o = parseInt(gt(t).getComputedStyle(t).zIndex, 10) || 0;
  return n >= o;
}
function ke(e, t, n) {
  for (; h.element(e); ) {
    if (wt(e, t))
      return !0;
    if (e = ct(e), e === n)
      return wt(e, t);
  }
  return !1;
}
function yn(e) {
  return e.correspondingUseElement || e;
}
function zi(e) {
  return e = e || St, {
    x: e.scrollX || e.document.documentElement.scrollLeft,
    y: e.scrollY || e.document.documentElement.scrollTop
  };
}
function Qe(e) {
  const t = e instanceof Q.SVGElement ? e.getBoundingClientRect() : e.getClientRects()[0];
  return t && {
    left: t.left,
    right: t.right,
    top: t.top,
    bottom: t.bottom,
    width: t.width || t.right - t.left,
    height: t.height || t.bottom - t.top
  };
}
function Ze(e) {
  const t = Qe(e);
  if (!st.isIOS7 && t) {
    const n = zi(gt(e));
    t.left += n.x, t.right += n.x, t.top += n.y, t.bottom += n.y;
  }
  return t;
}
function io(e) {
  const t = [];
  for (; e; )
    t.push(e), e = ct(e);
  return t;
}
function xn(e) {
  return h.string(e) ? (Q.document.querySelector(e), !0) : !1;
}
function z(e, t) {
  for (const o in t)
    e[o] = t[o];
  return e;
}
function ro(e, t, n) {
  return e === "parent" ? ct(n) : e === "self" ? t.getRect(n) : oo(n, e);
}
function Kt(e, t, n, o) {
  let i = e;
  return h.string(i) ? i = ro(i, t, n) : h.func(i) && (i = i(...o)), h.element(i) && (i = Ze(i)), i;
}
function be(e) {
  return e && {
    x: "x" in e ? e.x : e.left,
    y: "y" in e ? e.y : e.top
  };
}
function Pi(e) {
  return e && !("left" in e && "top" in e) && (e = z({}, e), e.left = e.x || 0, e.top = e.y || 0, e.right = e.right || e.left + e.width, e.bottom = e.bottom || e.top + e.height), e;
}
function Ae(e) {
  return e && !("x" in e && "y" in e) && (e = z({}, e), e.x = e.left || 0, e.y = e.top || 0, e.width = e.width || (e.right || 0) - e.x, e.height = e.height || (e.bottom || 0) - e.y), e;
}
function we(e, t, n) {
  e.left && (t.left += n.x), e.right && (t.right += n.x), e.top && (t.top += n.y), e.bottom && (t.bottom += n.y), t.width = t.right - t.left, t.height = t.bottom - t.top;
}
function Qt(e, t, n) {
  const o = e.options[n], r = o && o.origin || e.options.origin, s = Kt(r, e, t, [e && t]);
  return be(s) || {
    x: 0,
    y: 0
  };
}
function Ot(e, t, n) {
  if (n = n || {}, h.string(e) && e.search(" ") !== -1 && (e = bn(e)), h.array(e))
    return e.reduce((o, i) => z(o, Ot(i, t, n)), n);
  if (h.object(e) && (t = e, e = ""), h.func(t))
    n[e] = n[e] || [], n[e].push(t);
  else if (h.array(t))
    for (const o of t)
      Ot(e, o, n);
  else if (h.object(t))
    for (const o in t) {
      const i = bn(o).map((r) => `${e}${r}`);
      Ot(i, t[o], n);
    }
  return n;
}
function bn(e) {
  return e.trim().split(/ +/);
}
const Zt = (e, t) => Math.sqrt(e * e + t * t);
function ue(e, t) {
  e.__set || (e.__set = {});
  for (const n in t)
    typeof e[n] != "function" && n !== "__set" && Object.defineProperty(e, n, {
      get() {
        return n in e.__set ? e.__set[n] : e.__set[n] = t[n];
      },
      set(o) {
        e.__set[n] = o;
      },
      configurable: !0
    });
  return e;
}
function ce(e, t) {
  e.page = e.page || {}, e.page.x = t.page.x, e.page.y = t.page.y, e.client = e.client || {}, e.client.x = t.client.x, e.client.y = t.client.y, e.timeStamp = t.timeStamp;
}
function Ti(e, t, n) {
  e.page.x = n.page.x - t.page.x, e.page.y = n.page.y - t.page.y, e.client.x = n.client.x - t.client.x, e.client.y = n.client.y - t.client.y, e.timeStamp = n.timeStamp - t.timeStamp;
}
function Di(e, t) {
  const n = Math.max(t.timeStamp / 1e3, 1e-3);
  e.page.x = t.page.x / n, e.page.y = t.page.y / n, e.client.x = t.client.x / n, e.client.y = t.client.y / n, e.timeStamp = n;
}
function so(e) {
  e.page.x = 0, e.page.y = 0, e.client.x = 0, e.client.y = 0;
}
function ao(e) {
  return e instanceof Q.Event || e instanceof Q.Touch;
}
function fe(e, t, n) {
  return n = n || {}, e = e || "page", n.x = t[e + "X"], n.y = t[e + "Y"], n;
}
function co(e, t) {
  return t = t || {
    x: 0,
    y: 0
  }, st.isOperaMobile && ao(e) ? (fe("screen", e, t), t.x += window.scrollX, t.y += window.scrollY) : fe("page", e, t), t;
}
function _i(e, t) {
  return t = t || {}, st.isOperaMobile && ao(e) ? fe("screen", e, t) : fe("client", e, t), t;
}
function Vt(e) {
  return h.number(e.pointerId) ? e.pointerId : e.identifier;
}
function Ci(e, t, n) {
  const o = t.length > 1 ? lo(t) : t[0];
  co(o, e.page), _i(o, e.client), e.timeStamp = n;
}
function tn(e) {
  const t = [];
  return h.array(e) ? (t[0] = e[0], t[1] = e[1]) : e.type === "touchend" ? e.touches.length === 1 ? (t[0] = e.touches[0], t[1] = e.changedTouches[0]) : e.touches.length === 0 && (t[0] = e.changedTouches[0], t[1] = e.changedTouches[1]) : (t[0] = e.touches[0], t[1] = e.touches[1]), t;
}
function lo(e) {
  const t = {
    pageX: 0,
    pageY: 0,
    clientX: 0,
    clientY: 0,
    screenX: 0,
    screenY: 0
  };
  for (const n of e)
    for (const o in t)
      t[o] += n[o];
  for (const n in t)
    t[n] /= e.length;
  return t;
}
function Re(e) {
  if (!e.length)
    return null;
  const t = tn(e), n = Math.min(t[0].pageX, t[1].pageX), o = Math.min(t[0].pageY, t[1].pageY), i = Math.max(t[0].pageX, t[1].pageX), r = Math.max(t[0].pageY, t[1].pageY);
  return {
    x: n,
    y: o,
    left: n,
    top: o,
    right: i,
    bottom: r,
    width: i - n,
    height: r - o
  };
}
function $e(e, t) {
  const n = t + "X", o = t + "Y", i = tn(e), r = i[0][n] - i[1][n], s = i[0][o] - i[1][o];
  return Zt(r, s);
}
function Ne(e, t) {
  const n = t + "X", o = t + "Y", i = tn(e), r = i[1][n] - i[0][n], s = i[1][o] - i[0][o];
  return 180 * Math.atan2(s, r) / Math.PI;
}
function uo(e) {
  return h.string(e.pointerType) ? e.pointerType : h.number(e.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][e.pointerType] : (
    // if the PointerEvent API isn't available, then the "pointer" must
    // be either a MouseEvent, TouchEvent, or Touch object
    /touch/.test(e.type || "") || e instanceof Q.Touch ? "touch" : "mouse"
  );
}
function fo(e) {
  const t = h.func(e.composedPath) ? e.composedPath() : e.path;
  return [yn(t ? t[0] : e.target), yn(e.currentTarget)];
}
function jt() {
  return {
    page: {
      x: 0,
      y: 0
    },
    client: {
      x: 0,
      y: 0
    },
    timeStamp: 0
  };
}
function Oi(e) {
  return {
    coords: e,
    get page() {
      return this.coords.page;
    },
    get client() {
      return this.coords.client;
    },
    get timeStamp() {
      return this.coords.timeStamp;
    },
    get pageX() {
      return this.coords.page.x;
    },
    get pageY() {
      return this.coords.page.y;
    },
    get clientX() {
      return this.coords.client.x;
    },
    get clientY() {
      return this.coords.client.y;
    },
    get pointerId() {
      return this.coords.pointerId;
    },
    get target() {
      return this.coords.target;
    },
    get type() {
      return this.coords.type;
    },
    get pointerType() {
      return this.coords.pointerType;
    },
    get buttons() {
      return this.coords.buttons;
    },
    preventDefault() {
    }
  };
}
class Se {
  constructor(t) {
    p(this, "immediatePropagationStopped", !1);
    p(this, "propagationStopped", !1);
    this._interaction = t;
  }
  preventDefault() {
  }
  /**
   * Don't call any other listeners (even on the current target)
   */
  stopPropagation() {
    this.propagationStopped = !0;
  }
  /**
   * Don't call listeners on the remaining targets
   */
  stopImmediatePropagation() {
    this.immediatePropagationStopped = this.propagationStopped = !0;
  }
}
Object.defineProperty(Se.prototype, "interaction", {
  get() {
    return this._interaction._proxy;
  },
  set() {
  }
});
const Mi = (e, t) => e.indexOf(t) !== -1, ki = (e, t) => e.splice(e.indexOf(t), 1), po = (e, t) => {
  for (const n of t)
    e.push(n);
  return e;
}, en = (e) => po([], e), te = (e, t) => {
  for (let n = 0; n < e.length; n++)
    if (t(e[n], n, e))
      return n;
  return -1;
}, de = (e, t) => e[te(e, t)];
class pt extends Se {
  /**
   * Class of events fired on dropzones during drags with acceptable targets.
   */
  constructor(n, o, i) {
    super(o._interaction);
    p(this, "dropzone");
    p(this, "dragEvent");
    p(this, "relatedTarget");
    p(this, "draggable");
    p(this, "propagationStopped", !1);
    p(this, "immediatePropagationStopped", !1);
    const {
      element: r,
      dropzone: s
    } = i === "dragleave" ? n.prev : n.cur;
    this.type = i, this.target = r, this.currentTarget = r, this.dropzone = s, this.dragEvent = o, this.relatedTarget = o.target, this.draggable = o.interactable, this.timeStamp = o.timeStamp;
  }
  /**
   * If this is a `dropactivate` event, the dropzone element will be
   * deactivated.
   *
   * If this is a `dragmove` or `dragenter`, a `dragleave` will be fired on the
   * dropzone element and more.
   */
  reject() {
    const {
      dropState: n
    } = this._interaction;
    if (!(this.type !== "dropactivate" && (!this.dropzone || n.cur.dropzone !== this.dropzone || n.cur.element !== this.target)))
      if (n.prev.dropzone = this.dropzone, n.prev.element = this.target, n.rejected = !0, n.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
        const o = n.activeDrops, i = te(o, ({
          dropzone: s,
          element: a
        }) => s === this.dropzone && a === this.target);
        n.activeDrops.splice(i, 1);
        const r = new pt(n, this.dragEvent, "dropdeactivate");
        r.dropzone = this.dropzone, r.target = this.target, this.dropzone.fire(r);
      } else
        this.dropzone.fire(new pt(n, this.dragEvent, "dragleave"));
  }
  preventDefault() {
  }
  stopPropagation() {
    this.propagationStopped = !0;
  }
  stopImmediatePropagation() {
    this.immediatePropagationStopped = this.propagationStopped = !0;
  }
}
function Ai(e) {
  const {
    actions: t,
    /** @lends module:interact */
    interactStatic: n,
    /** @lends Interactable */
    Interactable: o,
    defaults: i
  } = e;
  e.usePlugin(no), o.prototype.dropzone = function(r) {
    return $i(this, r);
  }, o.prototype.dropCheck = function(r, s, a, l, c, u) {
    return Ni(this, r, s, a, l, c, u);
  }, n.dynamicDrop = function(r) {
    return h.bool(r) ? (e.dynamicDrop = r, n) : e.dynamicDrop;
  }, z(t.phaselessTypes, {
    dragenter: !0,
    dragleave: !0,
    dropactivate: !0,
    dropdeactivate: !0,
    dropmove: !0,
    drop: !0
  }), t.methodDict.drop = "dropzone", e.dynamicDrop = !1, i.actions.drop = mo.defaults;
}
function Ri({
  interactables: e
}, t) {
  const n = [];
  for (const o of e.list) {
    if (!o.options.drop.enabled)
      continue;
    const i = o.options.drop.accept;
    if (h.element(i) && i !== t || h.string(i) && !wt(t, i) || h.func(i) && !i({
      dropzone: o,
      draggableElement: t
    }))
      continue;
    const r = h.string(o.target) ? o._context.querySelectorAll(o.target) : h.array(o.target) ? o.target : [o.target];
    for (const s of r)
      s !== t && n.push({
        dropzone: o,
        element: s,
        rect: o.getRect(s)
      });
  }
  return n;
}
function ho(e, t) {
  for (const {
    dropzone: n,
    element: o
  } of e.slice())
    t.dropzone = n, t.target = o, n.fire(t), t.propagationStopped = t.immediatePropagationStopped = !1;
}
function Le(e, t) {
  const n = Ri(e, t);
  for (const o of n)
    o.rect = o.dropzone.getRect(o.element);
  return n;
}
function go({
  dropState: e,
  interactable: t,
  element: n
}, o, i) {
  const r = [];
  for (const {
    dropzone: a,
    element: l,
    rect: c
  } of e.activeDrops)
    r.push(a.dropCheck(o, i, t, n, l, c) ? l : null);
  const s = Ei(r);
  return e.activeDrops[s] || null;
}
function He(e, t, n) {
  const {
    dropState: o
  } = e, i = {
    enter: null,
    leave: null,
    activate: null,
    deactivate: null,
    move: null,
    drop: null
  };
  return n.type === "dragstart" && (i.activate = new pt(o, n, "dropactivate"), i.activate.target = null, i.activate.dropzone = null), n.type === "dragend" && (i.deactivate = new pt(o, n, "dropdeactivate"), i.deactivate.target = null, i.deactivate.dropzone = null), o.rejected || (o.cur.element !== o.prev.element && (o.prev.dropzone && (i.leave = new pt(o, n, "dragleave"), n.dragLeave = i.leave.target = o.prev.element, n.prevDropzone = i.leave.dropzone = o.prev.dropzone), o.cur.dropzone && (i.enter = new pt(o, n, "dragenter"), n.dragEnter = o.cur.element, n.dropzone = o.cur.dropzone)), n.type === "dragend" && o.cur.dropzone && (i.drop = new pt(o, n, "drop"), n.dropzone = o.cur.dropzone, n.relatedTarget = o.cur.element), n.type === "dragmove" && o.cur.dropzone && (i.move = new pt(o, n, "dropmove"), i.move.dragmove = n, n.dropzone = o.cur.dropzone)), i;
}
function Pe(e, t) {
  const {
    dropState: n
  } = e, {
    activeDrops: o,
    cur: i,
    prev: r
  } = n;
  t.leave && r.dropzone.fire(t.leave), t.enter && i.dropzone.fire(t.enter), t.move && i.dropzone.fire(t.move), t.drop && i.dropzone.fire(t.drop), t.deactivate && ho(o, t.deactivate), n.prev.dropzone = i.dropzone, n.prev.element = i.element;
}
function wn({
  interaction: e,
  iEvent: t,
  event: n
}, o) {
  if (t.type !== "dragmove" && t.type !== "dragend")
    return;
  const {
    dropState: i
  } = e;
  o.dynamicDrop && (i.activeDrops = Le(o, e.element));
  const r = t, s = go(e, r, n);
  i.rejected = i.rejected && !!s && s.dropzone === i.cur.dropzone && s.element === i.cur.element, i.cur.dropzone = s && s.dropzone, i.cur.element = s && s.element, i.events = He(e, n, r);
}
function $i(e, t) {
  if (h.object(t)) {
    if (e.options.drop.enabled = t.enabled !== !1, t.listeners) {
      const n = Ot(t.listeners), o = Object.keys(n).reduce((i, r) => {
        const s = /^(enter|leave)/.test(r) ? `drag${r}` : /^(activate|deactivate|move)/.test(r) ? `drop${r}` : r;
        return i[s] = n[r], i;
      }, {});
      e.off(e.options.drop.listeners), e.on(o), e.options.drop.listeners = o;
    }
    return h.func(t.ondrop) && e.on("drop", t.ondrop), h.func(t.ondropactivate) && e.on("dropactivate", t.ondropactivate), h.func(t.ondropdeactivate) && e.on("dropdeactivate", t.ondropdeactivate), h.func(t.ondragenter) && e.on("dragenter", t.ondragenter), h.func(t.ondragleave) && e.on("dragleave", t.ondragleave), h.func(t.ondropmove) && e.on("dropmove", t.ondropmove), /^(pointer|center)$/.test(t.overlap) ? e.options.drop.overlap = t.overlap : h.number(t.overlap) && (e.options.drop.overlap = Math.max(Math.min(1, t.overlap), 0)), "accept" in t && (e.options.drop.accept = t.accept), "checker" in t && (e.options.drop.checker = t.checker), e;
  }
  return h.bool(t) ? (e.options.drop.enabled = t, e) : e.options.drop;
}
function Ni(e, t, n, o, i, r, s) {
  let a = !1;
  if (!(s = s || e.getRect(r)))
    return e.options.drop.checker ? e.options.drop.checker(t, n, a, e, r, o, i) : !1;
  const l = e.options.drop.overlap;
  if (l === "pointer") {
    const u = Qt(o, i, "drag"), f = co(t);
    f.x += u.x, f.y += u.y;
    const g = f.x > s.left && f.x < s.right, m = f.y > s.top && f.y < s.bottom;
    a = g && m;
  }
  const c = o.getRect(i);
  if (c && l === "center") {
    const u = c.left + c.width / 2, f = c.top + c.height / 2;
    a = u >= s.left && u <= s.right && f >= s.top && f <= s.bottom;
  }
  return c && h.number(l) && (a = Math.max(0, Math.min(s.right, c.right) - Math.max(s.left, c.left)) * Math.max(0, Math.min(s.bottom, c.bottom) - Math.max(s.top, c.top)) / (c.width * c.height) >= l), e.options.drop.checker && (a = e.options.drop.checker(t, n, a, e, r, o, i)), a;
}
const mo = {
  id: "actions/drop",
  install: Ai,
  listeners: {
    "interactions:before-action-start": ({
      interaction: e
    }) => {
      e.prepared.name === "drag" && (e.dropState = {
        cur: {
          dropzone: null,
          element: null
        },
        prev: {
          dropzone: null,
          element: null
        },
        rejected: null,
        events: null,
        activeDrops: []
      });
    },
    "interactions:after-action-start": ({
      interaction: e,
      event: t,
      iEvent: n
    }, o) => {
      if (e.prepared.name !== "drag")
        return;
      const {
        dropState: i
      } = e;
      i.activeDrops = null, i.events = null, i.activeDrops = Le(o, e.element), i.events = He(e, t, n), i.events.activate && (ho(i.activeDrops, i.events.activate), o.fire("actions/drop:start", {
        interaction: e,
        dragEvent: n
      }));
    },
    "interactions:action-move": wn,
    "interactions:after-action-move": ({
      interaction: e,
      iEvent: t
    }, n) => {
      e.prepared.name === "drag" && (Pe(e, e.dropState.events), n.fire("actions/drop:move", {
        interaction: e,
        dragEvent: t
      }), e.dropState.events = {});
    },
    "interactions:action-end": (e, t) => {
      if (e.interaction.prepared.name !== "drag")
        return;
      const {
        interaction: n,
        iEvent: o
      } = e;
      wn(e, t), Pe(n, n.dropState.events), t.fire("actions/drop:end", {
        interaction: n,
        dragEvent: o
      });
    },
    "interactions:stop": ({
      interaction: e
    }) => {
      if (e.prepared.name !== "drag")
        return;
      const {
        dropState: t
      } = e;
      t && (t.activeDrops = null, t.events = null, t.cur.dropzone = null, t.cur.element = null, t.prev.dropzone = null, t.prev.element = null, t.rejected = !1);
    }
  },
  getActiveDrops: Le,
  getDrop: go,
  getDropEvents: He,
  fireDropEvents: Pe,
  defaults: {
    enabled: !1,
    accept: null,
    overlap: "pointer"
  }
}, Li = mo;
function Hi(e) {
  const {
    actions: t,
    Interactable: n,
    defaults: o
  } = e;
  n.prototype.gesturable = function(i) {
    return h.object(i) ? (this.options.gesture.enabled = i.enabled !== !1, this.setPerAction("gesture", i), this.setOnEvents("gesture", i), this) : h.bool(i) ? (this.options.gesture.enabled = i, this) : this.options.gesture;
  }, t.map.gesture = je, t.methodDict.gesture = "gesturable", o.actions.gesture = je.defaults;
}
function Te({
  interaction: e,
  iEvent: t,
  phase: n
}) {
  if (e.prepared.name !== "gesture")
    return;
  const o = e.pointers.map((a) => a.pointer), i = n === "start", r = n === "end", s = e.interactable.options.deltaSource;
  if (t.touches = [o[0], o[1]], i)
    t.distance = $e(o, s), t.box = Re(o), t.scale = 1, t.ds = 0, t.angle = Ne(o, s), t.da = 0, e.gesture.startDistance = t.distance, e.gesture.startAngle = t.angle;
  else if (r) {
    const a = e.prevEvent;
    t.distance = a.distance, t.box = a.box, t.scale = a.scale, t.ds = 0, t.angle = a.angle, t.da = 0;
  } else
    t.distance = $e(o, s), t.box = Re(o), t.scale = t.distance / e.gesture.startDistance, t.angle = Ne(o, s), t.ds = t.scale - e.gesture.scale, t.da = t.angle - e.gesture.angle;
  e.gesture.distance = t.distance, e.gesture.angle = t.angle, h.number(t.scale) && t.scale !== 1 / 0 && !isNaN(t.scale) && (e.gesture.scale = t.scale);
}
const je = {
  id: "actions/gesture",
  before: ["actions/drag", "actions/resize"],
  install: Hi,
  listeners: {
    "interactions:action-start": Te,
    "interactions:action-move": Te,
    "interactions:action-end": Te,
    "interactions:new": ({
      interaction: e
    }) => {
      e.gesture = {
        angle: 0,
        distance: 0,
        scale: 1,
        startAngle: 0,
        startDistance: 0
      };
    },
    "auto-start:check": (e) => {
      if (e.interaction.pointers.length < 2)
        return;
      const t = e.interactable.options.gesture;
      if (t && t.enabled)
        return e.action = {
          name: "gesture"
        }, !1;
    }
  },
  defaults: {},
  getCursor() {
    return "";
  }
}, ji = je;
function Fi(e) {
  const {
    actions: t,
    browser: n,
    /** @lends Interactable */
    Interactable: o,
    // tslint:disable-line no-shadowed-variable
    defaults: i
  } = e;
  ht.cursors = Yi(n), ht.defaultMargin = n.supportsTouch || n.supportsPointerEvent ? 20 : 10, o.prototype.resizable = function(r) {
    return Wi(this, r, e);
  }, t.map.resize = ht, t.methodDict.resize = "resizable", i.actions.resize = ht.defaults;
}
function Bi(e) {
  const {
    interaction: t,
    interactable: n,
    element: o,
    rect: i,
    buttons: r
  } = e;
  if (!i)
    return;
  const s = z({}, t.coords.cur.page), a = n.options.resize;
  if (!(!(a && a.enabled) || // check mouseButton setting if the pointer is down
  t.pointerIsDown && /mouse|pointer/.test(t.pointerType) && !(r & a.mouseButtons))) {
    if (h.object(a.edges)) {
      const l = {
        left: !1,
        right: !1,
        top: !1,
        bottom: !1
      };
      for (const c in l)
        l[c] = qi(c, a.edges[c], s, t._latestPointer.eventTarget, o, i, a.margin || ht.defaultMargin);
      l.left = l.left && !l.right, l.top = l.top && !l.bottom, (l.left || l.right || l.top || l.bottom) && (e.action = {
        name: "resize",
        edges: l
      });
    } else {
      const l = a.axis !== "y" && s.x > i.right - ht.defaultMargin, c = a.axis !== "x" && s.y > i.bottom - ht.defaultMargin;
      (l || c) && (e.action = {
        name: "resize",
        axes: (l ? "x" : "") + (c ? "y" : "")
      });
    }
    return e.action ? !1 : void 0;
  }
}
function Wi(e, t, n) {
  return h.object(t) ? (e.options.resize.enabled = t.enabled !== !1, e.setPerAction("resize", t), e.setOnEvents("resize", t), h.string(t.axis) && /^x$|^y$|^xy$/.test(t.axis) ? e.options.resize.axis = t.axis : t.axis === null && (e.options.resize.axis = n.defaults.actions.resize.axis), h.bool(t.preserveAspectRatio) ? e.options.resize.preserveAspectRatio = t.preserveAspectRatio : h.bool(t.square) && (e.options.resize.square = t.square), e) : h.bool(t) ? (e.options.resize.enabled = t, e) : e.options.resize;
}
function qi(e, t, n, o, i, r, s) {
  if (!t)
    return !1;
  if (t === !0) {
    const a = h.number(r.width) ? r.width : r.right - r.left, l = h.number(r.height) ? r.height : r.bottom - r.top;
    if (s = Math.min(s, Math.abs((e === "left" || e === "right" ? a : l) / 2)), a < 0 && (e === "left" ? e = "right" : e === "right" && (e = "left")), l < 0 && (e === "top" ? e = "bottom" : e === "bottom" && (e = "top")), e === "left") {
      const c = a >= 0 ? r.left : r.right;
      return n.x < c + s;
    }
    if (e === "top") {
      const c = l >= 0 ? r.top : r.bottom;
      return n.y < c + s;
    }
    if (e === "right")
      return n.x > (a >= 0 ? r.right : r.left) - s;
    if (e === "bottom")
      return n.y > (l >= 0 ? r.bottom : r.top) - s;
  }
  return h.element(o) ? h.element(t) ? (
    // the value is an element to use as a resize handle
    t === o
  ) : (
    // otherwise check if element matches value as selector
    ke(o, t, i)
  ) : !1;
}
function Yi(e) {
  return e.isIe9 ? {
    x: "e-resize",
    y: "s-resize",
    xy: "se-resize",
    top: "n-resize",
    left: "w-resize",
    bottom: "s-resize",
    right: "e-resize",
    topleft: "se-resize",
    bottomright: "se-resize",
    topright: "ne-resize",
    bottomleft: "ne-resize"
  } : {
    x: "ew-resize",
    y: "ns-resize",
    xy: "nwse-resize",
    top: "ns-resize",
    left: "ew-resize",
    bottom: "ns-resize",
    right: "ew-resize",
    topleft: "nwse-resize",
    bottomright: "nwse-resize",
    topright: "nesw-resize",
    bottomleft: "nesw-resize"
  };
}
function Xi({
  iEvent: e,
  interaction: t
}) {
  if (t.prepared.name !== "resize" || !t.prepared.edges)
    return;
  const n = e, o = t.rect;
  t._rects = {
    start: z({}, o),
    corrected: z({}, o),
    previous: z({}, o),
    delta: {
      left: 0,
      right: 0,
      width: 0,
      top: 0,
      bottom: 0,
      height: 0
    }
  }, n.edges = t.prepared.edges, n.rect = t._rects.corrected, n.deltaRect = t._rects.delta;
}
function Gi({
  iEvent: e,
  interaction: t
}) {
  if (t.prepared.name !== "resize" || !t.prepared.edges)
    return;
  const n = e, i = t.interactable.options.resize.invert, r = i === "reposition" || i === "negate", s = t.rect, {
    start: a,
    corrected: l,
    delta: c,
    previous: u
  } = t._rects;
  if (z(u, l), r) {
    if (z(l, s), i === "reposition") {
      if (l.top > l.bottom) {
        const f = l.top;
        l.top = l.bottom, l.bottom = f;
      }
      if (l.left > l.right) {
        const f = l.left;
        l.left = l.right, l.right = f;
      }
    }
  } else
    l.top = Math.min(s.top, a.bottom), l.bottom = Math.max(s.bottom, a.top), l.left = Math.min(s.left, a.right), l.right = Math.max(s.right, a.left);
  l.width = l.right - l.left, l.height = l.bottom - l.top;
  for (const f in l)
    c[f] = l[f] - u[f];
  n.edges = t.prepared.edges, n.rect = l, n.deltaRect = c;
}
function Ui({
  iEvent: e,
  interaction: t
}) {
  if (t.prepared.name !== "resize" || !t.prepared.edges)
    return;
  const n = e;
  n.edges = t.prepared.edges, n.rect = t._rects.corrected, n.deltaRect = t._rects.delta;
}
function Sn({
  iEvent: e,
  interaction: t
}) {
  if (t.prepared.name !== "resize" || !t.resizeAxes)
    return;
  const n = t.interactable.options, o = e;
  n.resize.square ? (t.resizeAxes === "y" ? o.delta.x = o.delta.y : o.delta.y = o.delta.x, o.axes = "xy") : (o.axes = t.resizeAxes, t.resizeAxes === "x" ? o.delta.y = 0 : t.resizeAxes === "y" && (o.delta.x = 0));
}
const ht = {
  id: "actions/resize",
  before: ["actions/drag"],
  install: Fi,
  listeners: {
    "interactions:new": ({
      interaction: e
    }) => {
      e.resizeAxes = "xy";
    },
    "interactions:action-start": (e) => {
      Xi(e), Sn(e);
    },
    "interactions:action-move": (e) => {
      Gi(e), Sn(e);
    },
    "interactions:action-end": Ui,
    "auto-start:check": Bi
  },
  defaults: {
    square: !1,
    preserveAspectRatio: !1,
    axis: "xy",
    // use default margin
    margin: NaN,
    // object with props left, right, top, bottom which are
    // true/false values to resize when the pointer is over that edge,
    // CSS selectors to match the handles for each direction
    // or the Elements for each handle
    edges: null,
    // a value of 'none' will limit the resize rect to a minimum of 0x0
    // 'negate' will alow the rect to have negative width/height
    // 'reposition' will keep the width/height positive by swapping
    // the top and bottom edges and/or swapping the left and right edges
    invert: "none"
  },
  cursors: null,
  getCursor({
    edges: e,
    axis: t,
    name: n
  }) {
    const o = ht.cursors;
    let i = null;
    if (t)
      i = o[n + t];
    else if (e) {
      let r = "";
      for (const s of ["top", "bottom", "left", "right"])
        e[s] && (r += s);
      i = o[r];
    }
    return i;
  },
  defaultMargin: null
}, Ki = ht, Vi = {
  id: "actions",
  install(e) {
    e.usePlugin(ji), e.usePlugin(Ki), e.usePlugin(no), e.usePlugin(Li);
  }
};
let En = 0, dt, Tt;
function Ji(e) {
  if (dt = e.requestAnimationFrame, Tt = e.cancelAnimationFrame, !dt) {
    const t = ["ms", "moz", "webkit", "o"];
    for (const n of t)
      dt = e[`${n}RequestAnimationFrame`], Tt = e[`${n}CancelAnimationFrame`] || e[`${n}CancelRequestAnimationFrame`];
  }
  dt = dt && dt.bind(e), Tt = Tt && Tt.bind(e), dt || (dt = (t) => {
    const n = Date.now(), o = Math.max(0, 16 - (n - En)), i = e.setTimeout(() => {
      t(n + o);
    }, o);
    return En = n + o, i;
  }, Tt = (t) => clearTimeout(t));
}
const xt = {
  request: (e) => dt(e),
  cancel: (e) => Tt(e),
  init: Ji
};
function Qi(e) {
  const {
    defaults: t,
    actions: n
  } = e;
  e.autoScroll = D, D.now = () => e.now(), n.phaselessTypes.autoscroll = !0, t.perAction.autoScroll = D.defaults;
}
const D = {
  defaults: {
    enabled: !1,
    margin: 60,
    // the item that is scrolled (Window or HTMLElement)
    container: null,
    // the scroll speed in pixels per second
    speed: 300
  },
  now: Date.now,
  interaction: null,
  i: 0,
  // the handle returned by window.setInterval
  // Direction each pulse is to scroll in
  x: 0,
  y: 0,
  isScrolling: !1,
  prevTime: 0,
  margin: 0,
  speed: 0,
  start(e) {
    D.isScrolling = !0, xt.cancel(D.i), e.autoScroll = D, D.interaction = e, D.prevTime = D.now(), D.i = xt.request(D.scroll);
  },
  stop() {
    D.isScrolling = !1, D.interaction && (D.interaction.autoScroll = null), xt.cancel(D.i);
  },
  // scroll the window by the values in scroll.x/y
  scroll() {
    const {
      interaction: e
    } = D, {
      interactable: t,
      element: n
    } = e, o = e.prepared.name, i = t.options[o].autoScroll, r = In(i.container, t, n), s = D.now(), a = (s - D.prevTime) / 1e3, l = i.speed * a;
    if (l >= 1) {
      const c = {
        x: D.x * l,
        y: D.y * l
      };
      if (c.x || c.y) {
        const u = zn(r);
        h.window(r) ? r.scrollBy(c.x, c.y) : r && (r.scrollLeft += c.x, r.scrollTop += c.y);
        const f = zn(r), g = {
          x: f.x - u.x,
          y: f.y - u.y
        };
        (g.x || g.y) && t.fire({
          type: "autoscroll",
          target: n,
          interactable: t,
          delta: g,
          interaction: e,
          container: r
        });
      }
      D.prevTime = s;
    }
    D.isScrolling && (xt.cancel(D.i), D.i = xt.request(D.scroll));
  },
  check(e, t) {
    var n;
    return (n = e.options[t].autoScroll) == null ? void 0 : n.enabled;
  },
  onInteractionMove({
    interaction: e,
    pointer: t
  }) {
    if (!(e.interacting() && D.check(e.interactable, e.prepared.name)))
      return;
    if (e.simulation) {
      D.x = D.y = 0;
      return;
    }
    let n, o, i, r;
    const {
      interactable: s,
      element: a
    } = e, l = e.prepared.name, c = s.options[l].autoScroll, u = In(c.container, s, a);
    if (h.window(u))
      r = t.clientX < D.margin, n = t.clientY < D.margin, o = t.clientX > u.innerWidth - D.margin, i = t.clientY > u.innerHeight - D.margin;
    else {
      const f = Qe(u);
      r = t.clientX < f.left + D.margin, n = t.clientY < f.top + D.margin, o = t.clientX > f.right - D.margin, i = t.clientY > f.bottom - D.margin;
    }
    D.x = o ? 1 : r ? -1 : 0, D.y = i ? 1 : n ? -1 : 0, D.isScrolling || (D.margin = c.margin, D.speed = c.speed, D.start(e));
  }
};
function In(e, t, n) {
  return (h.string(e) ? ro(e, t, n) : e) || gt(n);
}
function zn(e) {
  return h.window(e) && (e = window.document.body), {
    x: e.scrollLeft,
    y: e.scrollTop
  };
}
const Zi = {
  id: "auto-scroll",
  install: Qi,
  listeners: {
    "interactions:new": ({
      interaction: e
    }) => {
      e.autoScroll = null;
    },
    "interactions:destroy": ({
      interaction: e
    }) => {
      e.autoScroll = null, D.stop(), D.interaction && (D.interaction = null);
    },
    "interactions:stop": D.stop,
    "interactions:action-move": (e) => D.onInteractionMove(e)
  }
}, tr = Zi;
function Jt(e, t) {
  let n = !1;
  return function() {
    return n || (St.console.warn(t), n = !0), e.apply(this, arguments);
  };
}
function nn(e, t) {
  return e.name = t.name, e.axis = t.axis, e.edges = t.edges, e;
}
function er(e) {
  const {
    /** @lends Interactable */
    Interactable: t
    // tslint:disable-line no-shadowed-variable
  } = e;
  t.prototype.getAction = function(o, i, r, s) {
    const a = nr(this, i, r, s, e);
    return this.options.actionChecker ? this.options.actionChecker(o, i, a, this, s, r) : a;
  }, t.prototype.ignoreFrom = Jt(function(n) {
    return this._backCompatOption("ignoreFrom", n);
  }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), t.prototype.allowFrom = Jt(function(n) {
    return this._backCompatOption("allowFrom", n);
  }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), t.prototype.actionChecker = ir, t.prototype.styleCursor = or;
}
function nr(e, t, n, o, i) {
  const r = e.getRect(o), s = t.buttons || {
    0: 1,
    1: 4,
    3: 8,
    4: 16
  }[t.button], a = {
    action: null,
    interactable: e,
    interaction: n,
    element: o,
    rect: r,
    buttons: s
  };
  return i.fire("auto-start:check", a), a.action;
}
function or(e) {
  return h.bool(e) ? (this.options.styleCursor = e, this) : e === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
}
function ir(e) {
  return h.func(e) ? (this.options.actionChecker = e, this) : e === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
}
const rr = {
  id: "auto-start/interactableMethods",
  install: er
};
function sr(e) {
  const {
    interactStatic: t,
    defaults: n
  } = e;
  e.usePlugin(rr), n.base.actionChecker = null, n.base.styleCursor = !0, z(n.perAction, {
    manualStart: !1,
    max: 1 / 0,
    maxPerElement: 1,
    allowFrom: null,
    ignoreFrom: null,
    // only allow left button by default
    // see https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons#Return_value
    mouseButtons: 1
  }), t.maxInteractions = (o) => bo(o, e), e.autoStart = {
    // Allow this many interactions to happen simultaneously
    maxInteractions: 1 / 0,
    withinInteractionLimit: Ee,
    cursorElement: null
  };
}
function ar({
  interaction: e,
  pointer: t,
  event: n,
  eventTarget: o
}, i) {
  if (e.interacting())
    return;
  const r = yo(e, t, n, o, i);
  xo(e, r, i);
}
function cr({
  interaction: e,
  pointer: t,
  event: n,
  eventTarget: o
}, i) {
  if (e.pointerType !== "mouse" || e.pointerIsDown || e.interacting())
    return;
  const r = yo(e, t, n, o, i);
  xo(e, r, i);
}
function lr(e, t) {
  const {
    interaction: n
  } = e;
  if (!n.pointerIsDown || n.interacting() || !n.pointerWasMoved || !n.prepared.name)
    return;
  t.fire("autoStart:before-start", e);
  const {
    interactable: o
  } = n, i = n.prepared.name;
  i && o && (o.options[i].manualStart || !Ee(o, n.element, n.prepared, t) ? n.stop() : (n.start(n.prepared, o, n.element), wo(n, t)));
}
function ur({
  interaction: e
}, t) {
  const {
    interactable: n
  } = e;
  n && n.options.styleCursor && Fe(e.element, "", t);
}
function vo(e, t, n, o, i) {
  return t.testIgnoreAllow(t.options[e.name], n, o) && t.options[e.name].enabled && Ee(t, n, e, i) ? e : null;
}
function fr(e, t, n, o, i, r, s) {
  for (let a = 0, l = o.length; a < l; a++) {
    const c = o[a], u = i[a], f = c.getAction(t, n, e, u);
    if (!f)
      continue;
    const g = vo(f, c, u, r, s);
    if (g)
      return {
        action: g,
        interactable: c,
        element: u
      };
  }
  return {
    action: null,
    interactable: null,
    element: null
  };
}
function yo(e, t, n, o, i) {
  let r = [], s = [], a = o;
  function l(c) {
    r.push(c), s.push(a);
  }
  for (; h.element(a); ) {
    r = [], s = [], i.interactables.forEachMatch(a, l);
    const c = fr(e, t, n, r, s, o, i);
    if (c.action && !c.interactable.options[c.action.name].manualStart)
      return c;
    a = ct(a);
  }
  return {
    action: null,
    interactable: null,
    element: null
  };
}
function xo(e, {
  action: t,
  interactable: n,
  element: o
}, i) {
  t = t || {
    name: null
  }, e.interactable = n, e.element = o, nn(e.prepared, t), e.rect = n && t.name ? n.getRect(o) : null, wo(e, i), i.fire("autoStart:prepared", {
    interaction: e
  });
}
function Ee(e, t, n, o) {
  const i = e.options, r = i[n.name].max, s = i[n.name].maxPerElement, a = o.autoStart.maxInteractions;
  let l = 0, c = 0, u = 0;
  if (!(r && s && a))
    return !1;
  for (const f of o.interactions.list) {
    const g = f.prepared.name;
    if (f.interacting()) {
      if (l++, l >= a)
        return !1;
      if (f.interactable === e && (c += g === n.name ? 1 : 0, c >= r || f.element === t && (u++, g === n.name && u >= s)))
        return !1;
    }
  }
  return a > 0;
}
function bo(e, t) {
  return h.number(e) ? (t.autoStart.maxInteractions = e, this) : t.autoStart.maxInteractions;
}
function Fe(e, t, n) {
  const {
    cursorElement: o
  } = n.autoStart;
  o && o !== e && (o.style.cursor = ""), e.ownerDocument.documentElement.style.cursor = t, e.style.cursor = t, n.autoStart.cursorElement = t ? e : null;
}
function wo(e, t) {
  const {
    interactable: n,
    element: o,
    prepared: i
  } = e;
  if (!(e.pointerType === "mouse" && n && n.options.styleCursor)) {
    t.autoStart.cursorElement && Fe(t.autoStart.cursorElement, "", t);
    return;
  }
  let r = "";
  if (i.name) {
    const s = n.options[i.name].cursorChecker;
    h.func(s) ? r = s(i, n, o, e._interacting) : r = t.actions.map[i.name].getCursor(i);
  }
  Fe(e.element, r || "", t);
}
const dr = {
  id: "auto-start/base",
  before: ["actions"],
  install: sr,
  listeners: {
    "interactions:down": ar,
    "interactions:move": (e, t) => {
      cr(e, t), lr(e, t);
    },
    "interactions:stop": ur
  },
  maxInteractions: bo,
  withinInteractionLimit: Ee,
  validateAction: vo
}, on = dr;
function pr({
  interaction: e,
  eventTarget: t,
  dx: n,
  dy: o
}, i) {
  if (e.prepared.name !== "drag")
    return;
  const r = Math.abs(n), s = Math.abs(o), a = e.interactable.options.drag, l = a.startAxis, c = r > s ? "x" : r < s ? "y" : "xy";
  if (e.prepared.axis = a.lockAxis === "start" ? c[0] : a.lockAxis, c !== "xy" && l !== "xy" && l !== c) {
    e.prepared.name = null;
    let u = t;
    const f = function(g) {
      if (g === e.interactable)
        return;
      const m = e.interactable.options.drag;
      if (!m.manualStart && g.testIgnoreAllow(m, u, t)) {
        const v = g.getAction(e.downPointer, e.downEvent, e, u);
        if (v && v.name === "drag" && hr(c, g) && on.validateAction(v, g, u, t, i))
          return g;
      }
    };
    for (; h.element(u); ) {
      const g = i.interactables.forEachMatch(u, f);
      if (g) {
        e.prepared.name = "drag", e.interactable = g, e.element = u;
        break;
      }
      u = ct(u);
    }
  }
}
function hr(e, t) {
  if (!t)
    return !1;
  const n = t.options.drag.startAxis;
  return e === "xy" || n === "xy" || n === e;
}
const gr = {
  id: "auto-start/dragAxis",
  listeners: {
    "autoStart:before-start": pr
  }
};
function mr(e) {
  const {
    defaults: t
  } = e;
  e.usePlugin(on), t.perAction.hold = 0, t.perAction.delay = 0;
}
function De(e) {
  const t = e.prepared && e.prepared.name;
  if (!t)
    return null;
  const n = e.interactable.options;
  return n[t].hold || n[t].delay;
}
const vr = {
  id: "auto-start/hold",
  install: mr,
  listeners: {
    "interactions:new": ({
      interaction: e
    }) => {
      e.autoStartHoldTimer = null;
    },
    "autoStart:prepared": ({
      interaction: e
    }) => {
      const t = De(e);
      t > 0 && (e.autoStartHoldTimer = setTimeout(() => {
        e.start(e.prepared, e.interactable, e.element);
      }, t));
    },
    "interactions:move": ({
      interaction: e,
      duplicate: t
    }) => {
      e.autoStartHoldTimer && e.pointerWasMoved && !t && (clearTimeout(e.autoStartHoldTimer), e.autoStartHoldTimer = null);
    },
    // prevent regular down->move autoStart
    "autoStart:before-start": ({
      interaction: e
    }) => {
      De(e) > 0 && (e.prepared.name = null);
    }
  },
  getHoldDuration: De
}, yr = vr, xr = {
  id: "auto-start",
  install(e) {
    e.usePlugin(on), e.usePlugin(yr), e.usePlugin(gr);
  }
};
function br(e) {
  return /^(always|never|auto)$/.test(e) ? (this.options.preventDefault = e, this) : h.bool(e) ? (this.options.preventDefault = e ? "always" : "never", this) : this.options.preventDefault;
}
function wr(e, t, n) {
  const o = e.options.preventDefault;
  if (o !== "never") {
    if (o === "always") {
      n.preventDefault();
      return;
    }
    if (t.events.supportsPassive && /^touch(start|move)$/.test(n.type)) {
      const i = gt(n.target).document, r = t.getDocOptions(i);
      if (!(r && r.events) || r.events.passive !== !1)
        return;
    }
    /^(mouse|pointer|touch)*(down|start)/i.test(n.type) || h.element(n.target) && wt(n.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || n.preventDefault();
  }
}
function Sr({
  interaction: e,
  event: t
}) {
  e.interactable && e.interactable.checkAndPreventDefault(t);
}
function Er(e) {
  const {
    Interactable: t
  } = e;
  t.prototype.preventDefault = br, t.prototype.checkAndPreventDefault = function(n) {
    return wr(this, e, n);
  }, e.interactions.docEvents.push({
    type: "dragstart",
    listener(n) {
      for (const o of e.interactions.list)
        if (o.element && (o.element === n.target || Ct(o.element, n.target))) {
          o.interactable.checkAndPreventDefault(n);
          return;
        }
    }
  });
}
const So = {
  id: "core/interactablePreventDefault",
  install: Er,
  listeners: ["down", "move", "up", "cancel"].reduce((e, t) => (e[`interactions:${t}`] = Sr, e), {})
}, Ir = {};
var Lt;
(function(e) {
  e.touchAction = "touchAction", e.boxSizing = "boxSizing", e.noListeners = "noListeners";
})(Lt || (Lt = {}));
const Pn = "[interact.js] ", Be = {
  touchAction: "https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action",
  boxSizing: "https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"
}, zr = !1;
function Pr(e, {
  logger: t
} = {}) {
  const {
    Interactable: n,
    defaults: o
  } = e;
  e.logger = t || console, o.base.devTools = {
    ignore: {}
  }, n.prototype.devTools = function(i) {
    return i ? (z(this.options.devTools, i), this) : this.options.devTools;
  }, e.usePlugin(Ir);
}
const Tn = [{
  name: Lt.touchAction,
  perform({
    element: e
  }) {
    return !Tr(e, "touchAction", /pan-|pinch|none/);
  },
  getInfo({
    element: e
  }) {
    return [e, Be.touchAction];
  },
  text: `Consider adding CSS "touch-action: none" to this element
`
}, {
  name: Lt.boxSizing,
  perform(e) {
    const {
      element: t
    } = e;
    return e.prepared.name === "resize" && t instanceof Q.HTMLElement && !Eo(t, "boxSizing", /border-box/);
  },
  text: 'Consider adding CSS "box-sizing: border-box" to this resizable element',
  getInfo({
    element: e
  }) {
    return [e, Be.boxSizing];
  }
}, {
  name: Lt.noListeners,
  perform(e) {
    const t = e.prepared.name;
    return !(e.interactable.events.types[`${t}move`] || []).length;
  },
  getInfo(e) {
    return [e.prepared.name, e.interactable];
  },
  text: "There are no listeners set for this action"
}];
function Eo(e, t, n) {
  const o = e.style[t] || St.getComputedStyle(e)[t];
  return n.test((o || "").toString());
}
function Tr(e, t, n) {
  let o = e;
  for (; h.element(o); ) {
    if (Eo(o, t, n))
      return !0;
    o = ct(o);
  }
  return !1;
}
const Dn = "dev-tools", Dr = zr ? {
  id: Dn,
  install: () => {
  }
} : {
  id: Dn,
  install: Pr,
  listeners: {
    "interactions:action-start": ({
      interaction: e
    }, t) => {
      for (const n of Tn) {
        const o = e.interactable && e.interactable.options;
        !(o && o.devTools && o.devTools.ignore[n.name]) && n.perform(e) && t.logger.warn(Pn + n.text, ...n.getInfo(e));
      }
    }
  },
  checks: Tn,
  CheckName: Lt,
  links: Be,
  prefix: Pn
}, _r = Dr;
function Ht(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    h.plainObject(o) ? t[n] = Ht(o) : h.array(o) ? t[n] = en(o) : t[n] = o;
  }
  return t;
}
class rn {
  constructor(t) {
    p(this, "states", []);
    p(this, "startOffset", {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    });
    p(this, "startDelta");
    p(this, "result");
    p(this, "endResult");
    p(this, "edges");
    p(this, "interaction");
    this.interaction = t, this.result = oe();
  }
  start({
    phase: t
  }, n) {
    const {
      interaction: o
    } = this, i = Cr(o);
    this.prepareStates(i), this.edges = z({}, o.edges), this.startOffset = Or(o.rect, n), this.startDelta = {
      x: 0,
      y: 0
    };
    const r = this.fillArg({
      phase: t,
      pageCoords: n,
      preEnd: !1
    });
    return this.result = oe(), this.startAll(r), this.result = this.setAll(r);
  }
  fillArg(t) {
    const {
      interaction: n
    } = this;
    return t.interaction = n, t.interactable = n.interactable, t.element = n.element, t.rect = t.rect || n.rect, t.edges = this.edges, t.startOffset = this.startOffset, t;
  }
  startAll(t) {
    for (const n of this.states)
      n.methods.start && (t.state = n, n.methods.start(t));
  }
  setAll(t) {
    const {
      phase: n,
      preEnd: o,
      skipModifiers: i,
      rect: r
    } = t;
    t.coords = z({}, t.pageCoords), t.rect = z({}, r);
    const s = i ? this.states.slice(i) : this.states, a = oe(t.coords, t.rect);
    for (const f of s) {
      var l;
      const {
        options: g
      } = f, m = z({}, t.coords);
      let v = null;
      (l = f.methods) != null && l.set && this.shouldDo(g, o, n) && (t.state = f, v = f.methods.set(t), we(this.interaction.edges, t.rect, {
        x: t.coords.x - m.x,
        y: t.coords.y - m.y
      })), a.eventProps.push(v);
    }
    a.delta.x = t.coords.x - t.pageCoords.x, a.delta.y = t.coords.y - t.pageCoords.y, a.rectDelta.left = t.rect.left - r.left, a.rectDelta.right = t.rect.right - r.right, a.rectDelta.top = t.rect.top - r.top, a.rectDelta.bottom = t.rect.bottom - r.bottom;
    const c = this.result.coords, u = this.result.rect;
    if (c && u) {
      const f = a.rect.left !== u.left || a.rect.right !== u.right || a.rect.top !== u.top || a.rect.bottom !== u.bottom;
      a.changed = f || c.x !== a.coords.x || c.y !== a.coords.y;
    }
    return a;
  }
  applyToInteraction(t) {
    const {
      interaction: n
    } = this, {
      phase: o
    } = t, i = n.coords.cur, r = n.coords.start, {
      result: s,
      startDelta: a
    } = this, l = s.delta;
    o === "start" && z(this.startDelta, s.delta);
    for (const [f, g] of [[r, a], [i, l]])
      f.page.x += g.x, f.page.y += g.y, f.client.x += g.x, f.client.y += g.y;
    const {
      rectDelta: c
    } = this.result, u = t.rect || n.rect;
    u.left += c.left, u.right += c.right, u.top += c.top, u.bottom += c.bottom, u.width = u.right - u.left, u.height = u.bottom - u.top;
  }
  setAndApply(t) {
    const {
      interaction: n
    } = this, {
      phase: o,
      preEnd: i,
      skipModifiers: r
    } = t, s = this.setAll(this.fillArg({
      preEnd: i,
      phase: o,
      pageCoords: t.modifiedCoords || n.coords.cur.page
    }));
    if (this.result = s, !s.changed && (!r || r < this.states.length) && n.interacting())
      return !1;
    if (t.modifiedCoords) {
      const {
        page: a
      } = n.coords.cur, l = {
        x: t.modifiedCoords.x - a.x,
        y: t.modifiedCoords.y - a.y
      };
      s.coords.x += l.x, s.coords.y += l.y, s.delta.x += l.x, s.delta.y += l.y;
    }
    this.applyToInteraction(t);
  }
  beforeEnd(t) {
    const {
      interaction: n,
      event: o
    } = t, i = this.states;
    if (!i || !i.length)
      return;
    let r = !1;
    for (const s of i) {
      t.state = s;
      const {
        options: a,
        methods: l
      } = s, c = l.beforeEnd && l.beforeEnd(t);
      if (c)
        return this.endResult = c, !1;
      r = r || !r && this.shouldDo(a, !0, t.phase, !0);
    }
    r && n.move({
      event: o,
      preEnd: !0
    });
  }
  stop(t) {
    const {
      interaction: n
    } = t;
    if (!this.states || !this.states.length)
      return;
    const o = z({
      states: this.states,
      interactable: n.interactable,
      element: n.element,
      rect: null
    }, t);
    this.fillArg(o);
    for (const i of this.states)
      o.state = i, i.methods.stop && i.methods.stop(o);
    this.states = null, this.endResult = null;
  }
  prepareStates(t) {
    this.states = [];
    for (let n = 0; n < t.length; n++) {
      const {
        options: o,
        methods: i,
        name: r
      } = t[n];
      this.states.push({
        options: o,
        methods: i,
        index: n,
        name: r
      });
    }
    return this.states;
  }
  restoreInteractionCoords({
    interaction: {
      coords: t,
      rect: n,
      modification: o
    }
  }) {
    if (!o.result)
      return;
    const {
      startDelta: i
    } = o, {
      delta: r,
      rectDelta: s
    } = o.result, a = [[t.start, i], [t.cur, r]];
    for (const [l, c] of a)
      l.page.x -= c.x, l.page.y -= c.y, l.client.x -= c.x, l.client.y -= c.y;
    n.left -= s.left, n.right -= s.right, n.top -= s.top, n.bottom -= s.bottom;
  }
  shouldDo(t, n, o, i) {
    return (
      // ignore disabled modifiers
      !(!t || t.enabled === !1 || // check if we require endOnly option to fire move before end
      i && !t.endOnly || // don't apply endOnly modifiers when not ending
      t.endOnly && !n || // check if modifier should run be applied on start
      o === "start" && !t.setStart)
    );
  }
  copyFrom(t) {
    this.startOffset = t.startOffset, this.startDelta = t.startDelta, this.edges = t.edges, this.states = t.states.map((n) => Ht(n)), this.result = oe(z({}, t.result.coords), z({}, t.result.rect));
  }
  destroy() {
    for (const t in this)
      this[t] = null;
  }
}
function oe(e, t) {
  return {
    rect: t,
    coords: e,
    delta: {
      x: 0,
      y: 0
    },
    rectDelta: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventProps: [],
    changed: !0
  };
}
function Cr(e) {
  const t = e.interactable.options[e.prepared.name], n = t.modifiers;
  return n && n.length ? n : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map((o) => {
    const i = t[o];
    return i && i.enabled && {
      options: i,
      methods: i._methods
    };
  }).filter((o) => !!o);
}
function Or(e, t) {
  return e ? {
    left: t.x - e.left,
    top: t.y - e.top,
    right: e.right - t.x,
    bottom: e.bottom - t.y
  } : {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  };
}
function Et(e, t) {
  const {
    defaults: n
  } = e, o = {
    start: e.start,
    set: e.set,
    beforeEnd: e.beforeEnd,
    stop: e.stop
  }, i = (r) => {
    const s = r || {};
    s.enabled = s.enabled !== !1;
    for (const l in n)
      l in s || (s[l] = n[l]);
    const a = {
      options: s,
      methods: o,
      name: t,
      enable: () => (s.enabled = !0, a),
      disable: () => (s.enabled = !1, a)
    };
    return a;
  };
  return t && typeof t == "string" && (i._defaults = n, i._methods = o), i;
}
function Xt({
  iEvent: e,
  interaction: t
}) {
  const n = t.modification.result;
  n && (e.modifiers = n.eventProps);
}
const Mr = {
  id: "modifiers/base",
  before: ["actions"],
  install: (e) => {
    e.defaults.perAction.modifiers = [];
  },
  listeners: {
    "interactions:new": ({
      interaction: e
    }) => {
      e.modification = new rn(e);
    },
    "interactions:before-action-start": (e) => {
      const t = e.interaction.modification;
      t.start(e, e.interaction.coords.start.page), e.interaction.edges = t.edges, t.applyToInteraction(e);
    },
    "interactions:before-action-move": (e) => e.interaction.modification.setAndApply(e),
    "interactions:before-action-end": (e) => e.interaction.modification.beforeEnd(e),
    "interactions:action-start": Xt,
    "interactions:action-move": Xt,
    "interactions:action-end": Xt,
    "interactions:after-action-start": (e) => e.interaction.modification.restoreInteractionCoords(e),
    "interactions:after-action-move": (e) => e.interaction.modification.restoreInteractionCoords(e),
    "interactions:stop": (e) => e.interaction.modification.stop(e)
  }
}, Io = Mr, zo = {
  base: {
    preventDefault: "auto",
    deltaSource: "page"
  },
  perAction: {
    enabled: !1,
    origin: {
      x: 0,
      y: 0
    }
  },
  actions: {}
};
class sn extends Se {
  /** */
  constructor(n, o, i, r, s, a, l) {
    super(n);
    p(this, "relatedTarget", null);
    p(this, "screenX");
    p(this, "screenY");
    p(this, "button");
    p(this, "buttons");
    p(this, "ctrlKey");
    p(this, "shiftKey");
    p(this, "altKey");
    p(this, "metaKey");
    p(this, "page");
    p(this, "client");
    p(this, "delta");
    p(this, "rect");
    p(this, "x0");
    p(this, "y0");
    p(this, "t0");
    p(this, "dt");
    p(this, "duration");
    p(this, "clientX0");
    p(this, "clientY0");
    p(this, "velocity");
    p(this, "speed");
    p(this, "swipe");
    // resize
    p(this, "axes");
    p(this, "preEnd");
    s = s || n.element;
    const c = n.interactable, u = (c && c.options || zo).deltaSource, f = Qt(c, s, i), g = r === "start", m = r === "end", v = g ? this : n.prevEvent, P = g ? n.coords.start : m ? {
      page: v.page,
      client: v.client,
      timeStamp: n.coords.cur.timeStamp
    } : n.coords.cur;
    this.page = z({}, P.page), this.client = z({}, P.client), this.rect = z({}, n.rect), this.timeStamp = P.timeStamp, m || (this.page.x -= f.x, this.page.y -= f.y, this.client.x -= f.x, this.client.y -= f.y), this.ctrlKey = o.ctrlKey, this.altKey = o.altKey, this.shiftKey = o.shiftKey, this.metaKey = o.metaKey, this.button = o.button, this.buttons = o.buttons, this.target = s, this.currentTarget = s, this.preEnd = a, this.type = l || i + (r || ""), this.interactable = c, this.t0 = g ? n.pointers[n.pointers.length - 1].downTime : v.t0, this.x0 = n.coords.start.page.x - f.x, this.y0 = n.coords.start.page.y - f.y, this.clientX0 = n.coords.start.client.x - f.x, this.clientY0 = n.coords.start.client.y - f.y, g || m ? this.delta = {
      x: 0,
      y: 0
    } : this.delta = {
      x: this[u].x - v[u].x,
      y: this[u].y - v[u].y
    }, this.dt = n.coords.delta.timeStamp, this.duration = this.timeStamp - this.t0, this.velocity = z({}, n.coords.velocity[u]), this.speed = Zt(this.velocity.x, this.velocity.y), this.swipe = m || r === "inertiastart" ? this.getSwipe() : null;
  }
  getSwipe() {
    const n = this._interaction;
    if (n.prevEvent.speed < 600 || this.timeStamp - n.prevEvent.timeStamp > 150)
      return null;
    let o = 180 * Math.atan2(n.prevEvent.velocityY, n.prevEvent.velocityX) / Math.PI;
    const i = 22.5;
    o < 0 && (o += 360);
    const r = 135 - i <= o && o < 225 + i, s = 225 - i <= o && o < 315 + i, a = !r && (315 - i <= o || o < 45 + i), l = !s && 45 - i <= o && o < 135 + i;
    return {
      up: s,
      down: l,
      left: r,
      right: a,
      angle: o,
      speed: n.prevEvent.speed,
      velocity: {
        x: n.prevEvent.velocityX,
        y: n.prevEvent.velocityY
      }
    };
  }
  preventDefault() {
  }
  /**
   * Don't call listeners on the remaining targets
   */
  stopImmediatePropagation() {
    this.immediatePropagationStopped = this.propagationStopped = !0;
  }
  /**
   * Don't call any other listeners (even on the current target)
   */
  stopPropagation() {
    this.propagationStopped = !0;
  }
}
Object.defineProperties(sn.prototype, {
  pageX: {
    get() {
      return this.page.x;
    },
    set(e) {
      this.page.x = e;
    }
  },
  pageY: {
    get() {
      return this.page.y;
    },
    set(e) {
      this.page.y = e;
    }
  },
  clientX: {
    get() {
      return this.client.x;
    },
    set(e) {
      this.client.x = e;
    }
  },
  clientY: {
    get() {
      return this.client.y;
    },
    set(e) {
      this.client.y = e;
    }
  },
  dx: {
    get() {
      return this.delta.x;
    },
    set(e) {
      this.delta.x = e;
    }
  },
  dy: {
    get() {
      return this.delta.y;
    },
    set(e) {
      this.delta.y = e;
    }
  },
  velocityX: {
    get() {
      return this.velocity.x;
    },
    set(e) {
      this.velocity.x = e;
    }
  },
  velocityY: {
    get() {
      return this.velocity.y;
    },
    set(e) {
      this.velocity.y = e;
    }
  }
});
class kr {
  constructor(t, n, o, i, r) {
    p(this, "id");
    p(this, "pointer");
    p(this, "event");
    p(this, "downTime");
    p(this, "downTarget");
    this.id = t, this.pointer = n, this.event = o, this.downTime = i, this.downTarget = r;
  }
}
let We;
(function(e) {
  e.interactable = "", e.element = "", e.prepared = "", e.pointerIsDown = "", e.pointerWasMoved = "", e._proxy = "";
})(We || (We = {}));
let pe;
(function(e) {
  e.start = "", e.move = "", e.end = "", e.stop = "", e.interacting = "";
})(pe || (pe = {}));
let Ar = 0;
class Rr {
  /** */
  constructor({
    pointerType: t,
    scopeFire: n
  }) {
    // current interactable being interacted with
    p(this, "interactable", null);
    // the target element of the interactable
    p(this, "element", null);
    p(this, "rect", null);
    p(this, "_rects");
    p(this, "edges", null);
    p(this, "_scopeFire");
    // action that's ready to be fired on next move event
    p(this, "prepared", {
      name: null,
      axis: null,
      edges: null
    });
    p(this, "pointerType");
    // keep track of added pointers
    p(this, "pointers", []);
    // pointerdown/mousedown/touchstart event
    p(this, "downEvent", null);
    p(this, "downPointer", {});
    p(this, "_latestPointer", {
      pointer: null,
      event: null,
      eventTarget: null
    });
    // previous action event
    p(this, "prevEvent", null);
    p(this, "pointerIsDown", !1);
    p(this, "pointerWasMoved", !1);
    p(this, "_interacting", !1);
    p(this, "_ending", !1);
    p(this, "_stopped", !0);
    p(this, "_proxy", null);
    p(this, "simulation", null);
    /**
     * @alias Interaction.prototype.move
     */
    p(this, "doMove", Jt(function(t) {
      this.move(t);
    }, "The interaction.doMove() method has been renamed to interaction.move()"));
    p(this, "coords", {
      // Starting InteractEvent pointer coordinates
      start: jt(),
      // Previous native pointer move event coordinates
      prev: jt(),
      // current native pointer move event coordinates
      cur: jt(),
      // Change in coordinates and time of the pointer
      delta: jt(),
      // pointer velocity
      velocity: jt()
    });
    p(this, "_id", Ar++);
    this._scopeFire = n, this.pointerType = t;
    const o = this;
    this._proxy = {};
    for (const i in We)
      Object.defineProperty(this._proxy, i, {
        get() {
          return o[i];
        }
      });
    for (const i in pe)
      Object.defineProperty(this._proxy, i, {
        value: (...r) => o[i](...r)
      });
    this._scopeFire("interactions:new", {
      interaction: this
    });
  }
  /** @internal */
  get pointerMoveTolerance() {
    return 1;
  }
  pointerDown(t, n, o) {
    const i = this.updatePointer(t, n, o, !0), r = this.pointers[i];
    this._scopeFire("interactions:down", {
      pointer: t,
      event: n,
      eventTarget: o,
      pointerIndex: i,
      pointerInfo: r,
      type: "down",
      interaction: this
    });
  }
  /**
   * ```js
   * interact(target)
   *   .draggable({
   *     // disable the default drag start by down->move
   *     manualStart: true
   *   })
   *   // start dragging after the user holds the pointer down
   *   .on('hold', function (event) {
   *     var interaction = event.interaction
   *
   *     if (!interaction.interacting()) {
   *       interaction.start({ name: 'drag' },
   *                         event.interactable,
   *                         event.currentTarget)
   *     }
   * })
   * ```
   *
   * Start an action with the given Interactable and Element as tartgets. The
   * action must be enabled for the target Interactable and an appropriate
   * number of pointers must be held down - 1 for drag/resize, 2 for gesture.
   *
   * Use it with `interactable.<action>able({ manualStart: false })` to always
   * [start actions manually](https://github.com/taye/interact.js/issues/114)
   *
   * @param {object} action   The action to be performed - drag, resize, etc.
   * @param {Interactable} target  The Interactable to target
   * @param {Element} element The DOM Element to target
   * @return {Boolean} Whether the interaction was successfully started
   */
  start(t, n, o) {
    return this.interacting() || !this.pointerIsDown || this.pointers.length < (t.name === "gesture" ? 2 : 1) || !n.options[t.name].enabled ? !1 : (nn(this.prepared, t), this.interactable = n, this.element = o, this.rect = n.getRect(o), this.edges = this.prepared.edges ? z({}, this.prepared.edges) : {
      left: !0,
      right: !0,
      top: !0,
      bottom: !0
    }, this._stopped = !1, this._interacting = this._doPhase({
      interaction: this,
      event: this.downEvent,
      phase: "start"
    }) && !this._stopped, this._interacting);
  }
  pointerMove(t, n, o) {
    !this.simulation && !(this.modification && this.modification.endResult) && this.updatePointer(t, n, o, !1);
    const i = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
    let r, s;
    this.pointerIsDown && !this.pointerWasMoved && (r = this.coords.cur.client.x - this.coords.start.client.x, s = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = Zt(r, s) > this.pointerMoveTolerance);
    const a = this.getPointerIndex(t), l = {
      pointer: t,
      pointerIndex: a,
      pointerInfo: this.pointers[a],
      event: n,
      type: "move",
      eventTarget: o,
      dx: r,
      dy: s,
      duplicate: i,
      interaction: this
    };
    i || Di(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", l), !i && !this.simulation && (this.interacting() && (l.type = null, this.move(l)), this.pointerWasMoved && ce(this.coords.prev, this.coords.cur));
  }
  /**
   * ```js
   * interact(target)
   *   .draggable(true)
   *   .on('dragmove', function (event) {
   *     if (someCondition) {
   *       // change the snap settings
   *       event.interactable.draggable({ snap: { targets: [] }})
   *       // fire another move event with re-calculated snap
   *       event.interaction.move()
   *     }
   *   })
   * ```
   *
   * Force a move of the current action at the same coordinates. Useful if
   * snap/restrict has been changed and you want a movement with the new
   * settings.
   */
  move(t) {
    (!t || !t.event) && so(this.coords.delta), t = z({
      pointer: this._latestPointer.pointer,
      event: this._latestPointer.event,
      eventTarget: this._latestPointer.eventTarget,
      interaction: this
    }, t || {}), t.phase = "move", this._doPhase(t);
  }
  // End interact move events and stop auto-scroll unless simulation is running
  pointerUp(t, n, o, i) {
    let r = this.getPointerIndex(t);
    r === -1 && (r = this.updatePointer(t, n, o, !1));
    const s = /cancel$/i.test(n.type) ? "cancel" : "up";
    this._scopeFire(`interactions:${s}`, {
      pointer: t,
      pointerIndex: r,
      pointerInfo: this.pointers[r],
      event: n,
      eventTarget: o,
      type: s,
      curEventTarget: i,
      interaction: this
    }), this.simulation || this.end(n), this.removePointer(t, n);
  }
  documentBlur(t) {
    this.end(t), this._scopeFire("interactions:blur", {
      event: t,
      type: "blur",
      interaction: this
    });
  }
  /**
   * ```js
   * interact(target)
   *   .draggable(true)
   *   .on('move', function (event) {
   *     if (event.pageX > 1000) {
   *       // end the current action
   *       event.interaction.end()
   *       // stop all further listeners from being called
   *       event.stopImmediatePropagation()
   *     }
   *   })
   * ```
   *
   * @param {PointerEvent} [event]
   */
  end(t) {
    this._ending = !0, t = t || this._latestPointer.event;
    let n;
    this.interacting() && (n = this._doPhase({
      event: t,
      interaction: this,
      phase: "end"
    })), this._ending = !1, n === !0 && this.stop();
  }
  currentAction() {
    return this._interacting ? this.prepared.name : null;
  }
  interacting() {
    return this._interacting;
  }
  /** */
  stop() {
    this._scopeFire("interactions:stop", {
      interaction: this
    }), this.interactable = this.element = null, this._interacting = !1, this._stopped = !0, this.prepared.name = this.prevEvent = null;
  }
  getPointerIndex(t) {
    const n = Vt(t);
    return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : te(this.pointers, (o) => o.id === n);
  }
  getPointerInfo(t) {
    return this.pointers[this.getPointerIndex(t)];
  }
  updatePointer(t, n, o, i) {
    const r = Vt(t);
    let s = this.getPointerIndex(t), a = this.pointers[s];
    return i = i === !1 ? !1 : i || /(down|start)$/i.test(n.type), a ? a.pointer = t : (a = new kr(r, t, n, null, null), s = this.pointers.length, this.pointers.push(a)), Ci(this.coords.cur, this.pointers.map((l) => l.pointer), this._now()), Ti(this.coords.delta, this.coords.prev, this.coords.cur), i && (this.pointerIsDown = !0, a.downTime = this.coords.cur.timeStamp, a.downTarget = o, ue(this.downPointer, t), this.interacting() || (ce(this.coords.start, this.coords.cur), ce(this.coords.prev, this.coords.cur), this.downEvent = n, this.pointerWasMoved = !1)), this._updateLatestPointer(t, n, o), this._scopeFire("interactions:update-pointer", {
      pointer: t,
      event: n,
      eventTarget: o,
      down: i,
      pointerInfo: a,
      pointerIndex: s,
      interaction: this
    }), s;
  }
  removePointer(t, n) {
    const o = this.getPointerIndex(t);
    if (o === -1)
      return;
    const i = this.pointers[o];
    this._scopeFire("interactions:remove-pointer", {
      pointer: t,
      event: n,
      eventTarget: null,
      pointerIndex: o,
      pointerInfo: i,
      interaction: this
    }), this.pointers.splice(o, 1), this.pointerIsDown = !1;
  }
  _updateLatestPointer(t, n, o) {
    this._latestPointer.pointer = t, this._latestPointer.event = n, this._latestPointer.eventTarget = o;
  }
  destroy() {
    this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
  }
  _createPreparedEvent(t, n, o, i) {
    return new sn(this, t, this.prepared.name, n, this.element, o, i);
  }
  _fireEvent(t) {
    var n;
    (n = this.interactable) == null || n.fire(t), (!this.prevEvent || t.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = t);
  }
  _doPhase(t) {
    const {
      event: n,
      phase: o,
      preEnd: i,
      type: r
    } = t, {
      rect: s
    } = this;
    if (s && o === "move" && (we(this.edges, s, this.coords.delta[this.interactable.options.deltaSource]), s.width = s.right - s.left, s.height = s.bottom - s.top), this._scopeFire(`interactions:before-action-${o}`, t) === !1)
      return !1;
    const l = t.iEvent = this._createPreparedEvent(n, o, i, r);
    return this._scopeFire(`interactions:action-${o}`, t), o === "start" && (this.prevEvent = l), this._fireEvent(l), this._scopeFire(`interactions:after-action-${o}`, t), !0;
  }
  _now() {
    return Date.now();
  }
}
pe.offsetBy = "";
function $r(e) {
  e.pointerIsDown && (qe(e.coords.cur, e.offset.total), e.offset.pending.x = 0, e.offset.pending.y = 0);
}
function _n({
  interaction: e
}) {
  Po(e);
}
function Nr({
  interaction: e
}) {
  if (Po(e))
    return e.move({
      offset: !0
    }), e.end(), !1;
}
function Lr({
  interaction: e
}) {
  e.offset.total.x = 0, e.offset.total.y = 0, e.offset.pending.x = 0, e.offset.pending.y = 0;
}
function Po(e) {
  if (!jr(e))
    return !1;
  const {
    pending: t
  } = e.offset;
  return qe(e.coords.cur, t), qe(e.coords.delta, t), we(e.edges, e.rect, t), t.x = 0, t.y = 0, !0;
}
function Hr({
  x: e,
  y: t
}) {
  this.offset.pending.x += e, this.offset.pending.y += t, this.offset.total.x += e, this.offset.total.y += t;
}
function qe({
  page: e,
  client: t
}, {
  x: n,
  y: o
}) {
  e.x += n, e.y += o, t.x += n, t.y += o;
}
function jr(e) {
  return !!(e.offset.pending.x || e.offset.pending.y);
}
const Fr = {
  id: "offset",
  before: ["modifiers", "pointer-events", "actions", "inertia"],
  install(e) {
    e.Interaction.prototype.offsetBy = Hr;
  },
  listeners: {
    "interactions:new": ({
      interaction: e
    }) => {
      e.offset = {
        total: {
          x: 0,
          y: 0
        },
        pending: {
          x: 0,
          y: 0
        }
      };
    },
    "interactions:update-pointer": ({
      interaction: e
    }) => $r(e),
    "interactions:before-action-start": _n,
    "interactions:before-action-move": _n,
    "interactions:before-action-end": Nr,
    "interactions:stop": Lr
  }
}, To = Fr;
function Br(e) {
  const {
    defaults: t
  } = e;
  e.usePlugin(To), e.usePlugin(Io), e.actions.phases.inertiastart = !0, e.actions.phases.resume = !0, t.perAction.inertia = {
    enabled: !1,
    resistance: 10,
    // the lambda in exponential decay
    minSpeed: 100,
    // target speed must be above this for inertia to start
    endSpeed: 10,
    // the speed at which inertia is slow enough to stop
    allowResume: !0,
    // allow resuming an action in inertia phase
    smoothEndDuration: 300
    // animate to snap/restrict endOnly if there's no inertia
  };
}
class Wr {
  constructor(t) {
    p(this, "active", !1);
    p(this, "isModified", !1);
    p(this, "smoothEnd", !1);
    p(this, "allowResume", !1);
    p(this, "modification");
    p(this, "modifierCount", 0);
    p(this, "modifierArg");
    p(this, "startCoords");
    p(this, "t0", 0);
    p(this, "v0", 0);
    p(this, "te", 0);
    p(this, "targetOffset");
    p(this, "modifiedOffset");
    p(this, "currentOffset");
    p(this, "lambda_v0", 0);
    // eslint-disable-line camelcase
    p(this, "one_ve_v0", 0);
    // eslint-disable-line camelcase
    p(this, "timeout");
    p(this, "interaction");
    this.interaction = t;
  }
  start(t) {
    const {
      interaction: n
    } = this, o = ie(n);
    if (!o || !o.enabled)
      return !1;
    const {
      client: i
    } = n.coords.velocity, r = Zt(i.x, i.y), s = this.modification || (this.modification = new rn(n));
    if (s.copyFrom(n.modification), this.t0 = n._now(), this.allowResume = o.allowResume, this.v0 = r, this.currentOffset = {
      x: 0,
      y: 0
    }, this.startCoords = n.coords.cur.page, this.modifierArg = s.fillArg({
      pageCoords: this.startCoords,
      preEnd: !0,
      phase: "inertiastart"
    }), this.t0 - n.coords.cur.timeStamp < 50 && r > o.minSpeed && r > o.endSpeed)
      this.startInertia();
    else {
      if (s.result = s.setAll(this.modifierArg), !s.result.changed)
        return !1;
      this.startSmoothEnd();
    }
    return n.modification.result.rect = null, n.offsetBy(this.targetOffset), n._doPhase({
      interaction: n,
      event: t,
      phase: "inertiastart"
    }), n.offsetBy({
      x: -this.targetOffset.x,
      y: -this.targetOffset.y
    }), n.modification.result.rect = null, this.active = !0, n.simulation = this, !0;
  }
  startInertia() {
    const t = this.interaction.coords.velocity.client, n = ie(this.interaction), o = n.resistance, i = -Math.log(n.endSpeed / this.v0) / o;
    this.targetOffset = {
      x: (t.x - i) / o,
      y: (t.y - i) / o
    }, this.te = i, this.lambda_v0 = o / this.v0, this.one_ve_v0 = 1 - n.endSpeed / this.v0;
    const {
      modification: r,
      modifierArg: s
    } = this;
    s.pageCoords = {
      x: this.startCoords.x + this.targetOffset.x,
      y: this.startCoords.y + this.targetOffset.y
    }, r.result = r.setAll(s), r.result.changed && (this.isModified = !0, this.modifiedOffset = {
      x: this.targetOffset.x + r.result.delta.x,
      y: this.targetOffset.y + r.result.delta.y
    }), this.onNextFrame(() => this.inertiaTick());
  }
  startSmoothEnd() {
    this.smoothEnd = !0, this.isModified = !0, this.targetOffset = {
      x: this.modification.result.delta.x,
      y: this.modification.result.delta.y
    }, this.onNextFrame(() => this.smoothEndTick());
  }
  onNextFrame(t) {
    this.timeout = xt.request(() => {
      this.active && t();
    });
  }
  inertiaTick() {
    const {
      interaction: t
    } = this, o = ie(t).resistance, i = (t._now() - this.t0) / 1e3;
    if (i < this.te) {
      const r = 1 - (Math.exp(-o * i) - this.lambda_v0) / this.one_ve_v0;
      let s;
      this.isModified ? s = Ur(0, 0, this.targetOffset.x, this.targetOffset.y, this.modifiedOffset.x, this.modifiedOffset.y, r) : s = {
        x: this.targetOffset.x * r,
        y: this.targetOffset.y * r
      };
      const a = {
        x: s.x - this.currentOffset.x,
        y: s.y - this.currentOffset.y
      };
      this.currentOffset.x += a.x, this.currentOffset.y += a.y, t.offsetBy(a), t.move(), this.onNextFrame(() => this.inertiaTick());
    } else
      t.offsetBy({
        x: this.modifiedOffset.x - this.currentOffset.x,
        y: this.modifiedOffset.y - this.currentOffset.y
      }), this.end();
  }
  smoothEndTick() {
    const {
      interaction: t
    } = this, n = t._now() - this.t0, {
      smoothEndDuration: o
    } = ie(t);
    if (n < o) {
      const i = {
        x: On(n, 0, this.targetOffset.x, o),
        y: On(n, 0, this.targetOffset.y, o)
      }, r = {
        x: i.x - this.currentOffset.x,
        y: i.y - this.currentOffset.y
      };
      this.currentOffset.x += r.x, this.currentOffset.y += r.y, t.offsetBy(r), t.move({
        skipModifiers: this.modifierCount
      }), this.onNextFrame(() => this.smoothEndTick());
    } else
      t.offsetBy({
        x: this.targetOffset.x - this.currentOffset.x,
        y: this.targetOffset.y - this.currentOffset.y
      }), this.end();
  }
  resume({
    pointer: t,
    event: n,
    eventTarget: o
  }) {
    const {
      interaction: i
    } = this;
    i.offsetBy({
      x: -this.currentOffset.x,
      y: -this.currentOffset.y
    }), i.updatePointer(t, n, o, !0), i._doPhase({
      interaction: i,
      event: n,
      phase: "resume"
    }), ce(i.coords.prev, i.coords.cur), this.stop();
  }
  end() {
    this.interaction.move(), this.interaction.end(), this.stop();
  }
  stop() {
    this.active = this.smoothEnd = !1, this.interaction.simulation = null, xt.cancel(this.timeout);
  }
}
function qr({
  interaction: e,
  event: t
}) {
  return !e._interacting || e.simulation ? null : e.inertia.start(t) ? !1 : null;
}
function Yr(e) {
  const {
    interaction: t,
    eventTarget: n
  } = e, o = t.inertia;
  if (!o.active)
    return;
  let i = n;
  for (; h.element(i); ) {
    if (i === t.element) {
      o.resume(e);
      break;
    }
    i = ct(i);
  }
}
function Xr({
  interaction: e
}) {
  const t = e.inertia;
  t.active && t.stop();
}
function ie({
  interactable: e,
  prepared: t
}) {
  return e && e.options && t.name && e.options[t.name].inertia;
}
const Gr = {
  id: "inertia",
  before: ["modifiers", "actions"],
  install: Br,
  listeners: {
    "interactions:new": ({
      interaction: e
    }) => {
      e.inertia = new Wr(e);
    },
    "interactions:before-action-end": qr,
    "interactions:down": Yr,
    "interactions:stop": Xr,
    "interactions:before-action-resume": (e) => {
      const {
        modification: t
      } = e.interaction;
      t.stop(e), t.start(e, e.interaction.coords.cur.page), t.applyToInteraction(e);
    },
    "interactions:before-action-inertiastart": (e) => e.interaction.modification.setAndApply(e),
    "interactions:action-resume": Xt,
    "interactions:action-inertiastart": Xt,
    "interactions:after-action-inertiastart": (e) => e.interaction.modification.restoreInteractionCoords(e),
    "interactions:after-action-resume": (e) => e.interaction.modification.restoreInteractionCoords(e)
  }
};
function Cn(e, t, n, o) {
  const i = 1 - e;
  return i * i * t + 2 * i * e * n + e * e * o;
}
function Ur(e, t, n, o, i, r, s) {
  return {
    x: Cn(s, e, n, i),
    y: Cn(s, t, o, r)
  };
}
function On(e, t, n, o) {
  return e /= o, -n * e * (e - 2) + t;
}
const Kr = Gr;
function Mn(e, t) {
  for (const n of t) {
    if (e.immediatePropagationStopped)
      break;
    n(e);
  }
}
class Do {
  constructor(t) {
    p(this, "options");
    p(this, "types", {});
    p(this, "propagationStopped", !1);
    p(this, "immediatePropagationStopped", !1);
    p(this, "global");
    this.options = z({}, t || {});
  }
  fire(t) {
    let n;
    const o = this.global;
    (n = this.types[t.type]) && Mn(t, n), !t.propagationStopped && o && (n = o[t.type]) && Mn(t, n);
  }
  on(t, n) {
    const o = Ot(t, n);
    for (t in o)
      this.types[t] = po(this.types[t] || [], o[t]);
  }
  off(t, n) {
    const o = Ot(t, n);
    for (t in o) {
      const i = this.types[t];
      if (!(!i || !i.length))
        for (const r of o[t]) {
          const s = i.indexOf(r);
          s !== -1 && i.splice(s, 1);
        }
    }
  }
  getRect(t) {
    return null;
  }
}
function Ye(e, t) {
  if (t.phaselessTypes[e])
    return !0;
  for (const n in t.map)
    if (e.indexOf(n) === 0 && e.substr(n.length) in t.phases)
      return !0;
  return !1;
}
function Vr(e) {
  const t = (n, o) => {
    let i = e.interactables.get(n, o);
    return i || (i = e.interactables.new(n, o), i.events.global = t.globalEvents), i;
  };
  return t.getPointerAverage = lo, t.getTouchBBox = Re, t.getTouchDistance = $e, t.getTouchAngle = Ne, t.getElementRect = Ze, t.getElementClientRect = Qe, t.matchesSelector = wt, t.closest = oo, t.globalEvents = {}, t.version = "1.10.17", t.scope = e, t.use = function(n, o) {
    return this.scope.usePlugin(n, o), this;
  }, t.isSet = function(n, o) {
    return !!this.scope.interactables.get(n, o && o.context);
  }, t.on = Jt(function(o, i, r) {
    if (h.string(o) && o.search(" ") !== -1 && (o = o.trim().split(/ +/)), h.array(o)) {
      for (const s of o)
        this.on(s, i, r);
      return this;
    }
    if (h.object(o)) {
      for (const s in o)
        this.on(s, o[s], i);
      return this;
    }
    return Ye(o, this.scope.actions) ? this.globalEvents[o] ? this.globalEvents[o].push(i) : this.globalEvents[o] = [i] : this.scope.events.add(this.scope.document, o, i, {
      options: r
    }), this;
  }, "The interact.on() method is being deprecated"), t.off = Jt(function(o, i, r) {
    if (h.string(o) && o.search(" ") !== -1 && (o = o.trim().split(/ +/)), h.array(o)) {
      for (const s of o)
        this.off(s, i, r);
      return this;
    }
    if (h.object(o)) {
      for (const s in o)
        this.off(s, o[s], i);
      return this;
    }
    if (Ye(o, this.scope.actions)) {
      let s;
      o in this.globalEvents && (s = this.globalEvents[o].indexOf(i)) !== -1 && this.globalEvents[o].splice(s, 1);
    } else
      this.scope.events.remove(this.scope.document, o, i, r);
    return this;
  }, "The interact.off() method is being deprecated"), t.debug = function() {
    return this.scope;
  }, t.supportsTouch = function() {
    return st.supportsTouch;
  }, t.supportsPointerEvent = function() {
    return st.supportsPointerEvent;
  }, t.stop = function() {
    for (const n of this.scope.interactions.list)
      n.stop();
    return this;
  }, t.pointerMoveTolerance = function(n) {
    return h.number(n) ? (this.scope.interactions.pointerMoveTolerance = n, this) : this.scope.interactions.pointerMoveTolerance;
  }, t.addDocument = function(n, o) {
    this.scope.addDocument(n, o);
  }, t.removeDocument = function(n) {
    this.scope.removeDocument(n);
  }, t;
}
class Jr {
  /** */
  constructor(t, n, o, i) {
    p(this, "options");
    p(this, "_actions");
    p(this, "target");
    p(this, "events", new Do());
    p(this, "_context");
    p(this, "_win");
    p(this, "_doc");
    p(this, "_scopeEvents");
    /** @internal */
    p(this, "_rectChecker");
    this._actions = n.actions, this.target = t, this._context = n.context || o, this._win = gt(xn(t) ? this._context : t), this._doc = this._win.document, this._scopeEvents = i, this.set(n);
  }
  /** @internal */
  get _defaults() {
    return {
      base: {},
      perAction: {},
      actions: {}
    };
  }
  setOnEvents(t, n) {
    return h.func(n.onstart) && this.on(`${t}start`, n.onstart), h.func(n.onmove) && this.on(`${t}move`, n.onmove), h.func(n.onend) && this.on(`${t}end`, n.onend), h.func(n.oninertiastart) && this.on(`${t}inertiastart`, n.oninertiastart), this;
  }
  updatePerActionListeners(t, n, o) {
    (h.array(n) || h.object(n)) && this.off(t, n), (h.array(o) || h.object(o)) && this.on(t, o);
  }
  setPerAction(t, n) {
    const o = this._defaults;
    for (const i in n) {
      const r = i, s = this.options[t], a = n[r];
      r === "listeners" && this.updatePerActionListeners(t, s.listeners, a), h.array(a) ? s[r] = en(a) : h.plainObject(a) ? (s[r] = z(s[r] || {}, Ht(a)), h.object(o.perAction[r]) && "enabled" in o.perAction[r] && (s[r].enabled = a.enabled !== !1)) : h.bool(a) && h.object(o.perAction[r]) ? s[r].enabled = a : s[r] = a;
    }
  }
  /**
   * The default function to get an Interactables bounding rect. Can be
   * overridden using {@link Interactable.rectChecker}.
   *
   * @param {Element} [element] The element to measure.
   * @return {Rect} The object's bounding rectangle.
   */
  getRect(t) {
    return t = t || (h.element(this.target) ? this.target : null), h.string(this.target) && (t = t || this._context.querySelector(this.target)), Ze(t);
  }
  /**
   * Returns or sets the function used to calculate the interactable's
   * element's rectangle
   *
   * @param {function} [checker] A function which returns this Interactable's
   * bounding rectangle. See {@link Interactable.getRect}
   * @return {function | object} The checker function or this Interactable
   */
  rectChecker(t) {
    return h.func(t) ? (this._rectChecker = t, this.getRect = (n) => {
      const o = z({}, this._rectChecker(n));
      return "width" in o || (o.width = o.right - o.left, o.height = o.bottom - o.top), o;
    }, this) : t === null ? (delete this.getRect, delete this._rectChecker, this) : this.getRect;
  }
  _backCompatOption(t, n) {
    if (xn(n) || h.object(n)) {
      this.options[t] = n;
      for (const o in this._actions.map)
        this.options[o][t] = n;
      return this;
    }
    return this.options[t];
  }
  /**
   * Gets or sets the origin of the Interactable's element.  The x and y
   * of the origin will be subtracted from action event coordinates.
   *
   * @param {Element | object | string} [origin] An HTML or SVG Element whose
   * rect will be used, an object eg. { x: 0, y: 0 } or string 'parent', 'self'
   * or any CSS selector
   *
   * @return {object} The current origin or this Interactable
   */
  origin(t) {
    return this._backCompatOption("origin", t);
  }
  /**
   * Returns or sets the mouse coordinate types used to calculate the
   * movement of the pointer.
   *
   * @param {string} [newValue] Use 'client' if you will be scrolling while
   * interacting; Use 'page' if you want autoScroll to work
   * @return {string | object} The current deltaSource or this Interactable
   */
  deltaSource(t) {
    return t === "page" || t === "client" ? (this.options.deltaSource = t, this) : this.options.deltaSource;
  }
  /**
   * Gets the selector context Node of the Interactable. The default is
   * `window.document`.
   *
   * @return {Node} The context Node of this Interactable
   */
  context() {
    return this._context;
  }
  inContext(t) {
    return this._context === t.ownerDocument || Ct(this._context, t);
  }
  testIgnoreAllow(t, n, o) {
    return !this.testIgnore(t.ignoreFrom, n, o) && this.testAllow(t.allowFrom, n, o);
  }
  testAllow(t, n, o) {
    return t ? h.element(o) ? h.string(t) ? ke(o, t, n) : h.element(t) ? Ct(t, o) : !1 : !1 : !0;
  }
  testIgnore(t, n, o) {
    return !t || !h.element(o) ? !1 : h.string(t) ? ke(o, t, n) : h.element(t) ? Ct(t, o) : !1;
  }
  /**
   * Calls listeners for the given InteractEvent type bound globally
   * and directly to this Interactable
   *
   * @param {InteractEvent} iEvent The InteractEvent object to be fired on this
   * Interactable
   * @return {Interactable} this Interactable
   */
  fire(t) {
    return this.events.fire(t), this;
  }
  _onOff(t, n, o, i) {
    h.object(n) && !h.array(n) && (i = o, o = null);
    const r = t === "on" ? "add" : "remove", s = Ot(n, o);
    for (let a in s) {
      a === "wheel" && (a = st.wheelEvent);
      for (const l of s[a])
        Ye(a, this._actions) ? this.events[t](a, l) : h.string(this.target) ? this._scopeEvents[`${r}Delegate`](this.target, this._context, a, l, i) : this._scopeEvents[r](this.target, a, l, i);
    }
    return this;
  }
  /**
   * Binds a listener for an InteractEvent, pointerEvent or DOM event.
   *
   * @param {string | array | object} types The types of events to listen
   * for
   * @param {function | array | object} [listener] The event listener function(s)
   * @param {object | boolean} [options] options object or useCapture flag for
   * addEventListener
   * @return {Interactable} This Interactable
   */
  on(t, n, o) {
    return this._onOff("on", t, n, o);
  }
  /**
   * Removes an InteractEvent, pointerEvent or DOM event listener.
   *
   * @param {string | array | object} types The types of events that were
   * listened for
   * @param {function | array | object} [listener] The event listener function(s)
   * @param {object | boolean} [options] options object or useCapture flag for
   * removeEventListener
   * @return {Interactable} This Interactable
   */
  off(t, n, o) {
    return this._onOff("off", t, n, o);
  }
  /**
   * Reset the options of this Interactable
   *
   * @param {object} options The new settings to apply
   * @return {object} This Interactable
   */
  set(t) {
    const n = this._defaults;
    h.object(t) || (t = {}), this.options = Ht(n.base);
    for (const o in this._actions.methodDict) {
      const i = o, r = this._actions.methodDict[i];
      this.options[i] = {}, this.setPerAction(i, z(z({}, n.perAction), n.actions[i])), this[r](t[i]);
    }
    for (const o in t)
      h.func(this[o]) && this[o](t[o]);
    return this;
  }
  /**
   * Remove this interactable from the list of interactables and remove it's
   * action capabilities and event listeners
   */
  unset() {
    if (h.string(this.target))
      for (const t in this._scopeEvents.delegatedEvents) {
        const n = this._scopeEvents.delegatedEvents[t];
        for (let o = n.length - 1; o >= 0; o--) {
          const {
            selector: i,
            context: r,
            listeners: s
          } = n[o];
          i === this.target && r === this._context && n.splice(o, 1);
          for (let a = s.length - 1; a >= 0; a--)
            this._scopeEvents.removeDelegate(this.target, this._context, t, s[a][0], s[a][1]);
        }
      }
    else
      this._scopeEvents.remove(this.target, "all");
  }
}
class Qr {
  constructor(t) {
    // all set interactables
    p(this, "list", []);
    p(this, "selectorMap", {});
    p(this, "scope");
    this.scope = t, t.addListeners({
      "interactable:unset": ({
        interactable: n
      }) => {
        const {
          target: o,
          _context: i
        } = n, r = h.string(o) ? this.selectorMap[o] : o[this.scope.id], s = te(r, (a) => a.context === i);
        r[s] && (r[s].context = null, r[s].interactable = null), r.splice(s, 1);
      }
    });
  }
  new(t, n) {
    n = z(n || {}, {
      actions: this.scope.actions
    });
    const o = new this.scope.Interactable(t, n, this.scope.document, this.scope.events), i = {
      context: o._context,
      interactable: o
    };
    return this.scope.addDocument(o._doc), this.list.push(o), h.string(t) ? (this.selectorMap[t] || (this.selectorMap[t] = []), this.selectorMap[t].push(i)) : (o.target[this.scope.id] || Object.defineProperty(t, this.scope.id, {
      value: [],
      configurable: !0
    }), t[this.scope.id].push(i)), this.scope.fire("interactable:new", {
      target: t,
      options: n,
      interactable: o,
      win: this.scope._win
    }), o;
  }
  get(t, n) {
    const o = n && n.context || this.scope.document, i = h.string(t), r = i ? this.selectorMap[t] : t[this.scope.id];
    if (!r)
      return null;
    const s = de(r, (a) => a.context === o && (i || a.interactable.inContext(t)));
    return s && s.interactable;
  }
  forEachMatch(t, n) {
    for (const o of this.list) {
      let i;
      if ((h.string(o.target) ? (
        // target is a selector and the element matches
        h.element(t) && wt(t, o.target)
      ) : (
        // target is the element
        t === o.target
      )) && // the element is in context
      o.inContext(t) && (i = n(o)), i !== void 0)
        return i;
    }
  }
}
function Zr(e) {
  var t;
  const n = [], o = {}, i = [], r = {
    add: s,
    remove: a,
    addDelegate: l,
    removeDelegate: c,
    delegateListener: u,
    delegateUseCapture: f,
    delegatedEvents: o,
    documents: i,
    targets: n,
    supportsOptions: !1,
    supportsPassive: !1
  };
  (t = e.document) == null || t.createElement("div").addEventListener("test", null, {
    get capture() {
      return r.supportsOptions = !0;
    },
    get passive() {
      return r.supportsPassive = !0;
    }
  }), e.events = r;
  function s(g, m, v, P) {
    const E = Ft(P);
    let $ = de(n, (T) => T.eventTarget === g);
    $ || ($ = {
      eventTarget: g,
      events: {}
    }, n.push($)), $.events[m] || ($.events[m] = []), g.addEventListener && !Mi($.events[m], v) && (g.addEventListener(m, v, r.supportsOptions ? E : E.capture), $.events[m].push(v));
  }
  function a(g, m, v, P) {
    const E = Ft(P), $ = te(n, (d) => d.eventTarget === g), T = n[$];
    if (!T || !T.events)
      return;
    if (m === "all") {
      for (m in T.events)
        T.events.hasOwnProperty(m) && a(g, m, "all");
      return;
    }
    let M = !1;
    const y = T.events[m];
    if (y) {
      if (v === "all") {
        for (let d = y.length - 1; d >= 0; d--)
          a(g, m, y[d], E);
        return;
      } else
        for (let d = 0; d < y.length; d++)
          if (y[d] === v) {
            g.removeEventListener(m, v, r.supportsOptions ? E : E.capture), y.splice(d, 1), y.length === 0 && (delete T.events[m], M = !0);
            break;
          }
    }
    M && !Object.keys(T.events).length && n.splice($, 1);
  }
  function l(g, m, v, P, E) {
    const $ = Ft(E);
    if (!o[v]) {
      o[v] = [];
      for (const y of i)
        s(y, v, u), s(y, v, f, !0);
    }
    const T = o[v];
    let M = de(T, (y) => y.selector === g && y.context === m);
    M || (M = {
      selector: g,
      context: m,
      listeners: []
    }, T.push(M)), M.listeners.push([P, $]);
  }
  function c(g, m, v, P, E) {
    const $ = Ft(E), T = o[v];
    let M = !1, y;
    if (T)
      for (y = T.length - 1; y >= 0; y--) {
        const d = T[y];
        if (d.selector === g && d.context === m) {
          const {
            listeners: k
          } = d;
          for (let x = k.length - 1; x >= 0; x--) {
            const [j, {
              capture: F,
              passive: R
            }] = k[x];
            if (j === P && F === $.capture && R === $.passive) {
              k.splice(x, 1), k.length || (T.splice(y, 1), a(m, v, u), a(m, v, f, !0)), M = !0;
              break;
            }
          }
          if (M)
            break;
        }
      }
  }
  function u(g, m) {
    const v = Ft(m), P = new ts(g), E = o[g.type], [$] = fo(g);
    let T = $;
    for (; h.element(T); ) {
      for (let M = 0; M < E.length; M++) {
        const y = E[M], {
          selector: d,
          context: k
        } = y;
        if (wt(T, d) && Ct(k, $) && Ct(k, T)) {
          const {
            listeners: x
          } = y;
          P.currentTarget = T;
          for (const [j, {
            capture: F,
            passive: R
          }] of x)
            F === v.capture && R === v.passive && j(P);
        }
      }
      T = ct(T);
    }
  }
  function f(g) {
    return u.call(this, g, !0);
  }
  return r;
}
class ts {
  constructor(t) {
    p(this, "currentTarget");
    p(this, "originalEvent");
    p(this, "type");
    this.originalEvent = t, ue(this, t);
  }
  preventOriginalDefault() {
    this.originalEvent.preventDefault();
  }
  stopPropagation() {
    this.originalEvent.stopPropagation();
  }
  stopImmediatePropagation() {
    this.originalEvent.stopImmediatePropagation();
  }
}
function Ft(e) {
  if (!h.object(e))
    return {
      capture: !!e,
      passive: !1
    };
  const t = z({}, e);
  return t.capture = !!e.capture, t.passive = !!e.passive, t;
}
const es = {
  id: "events",
  install: Zr
}, Xe = {
  methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"],
  search(e) {
    for (const t of Xe.methodOrder) {
      const n = Xe[t](e);
      if (n)
        return n;
    }
    return null;
  },
  // try to resume simulation with a new pointer
  simulationResume({
    pointerType: e,
    eventType: t,
    eventTarget: n,
    scope: o
  }) {
    if (!/down|start/i.test(t))
      return null;
    for (const i of o.interactions.list) {
      let r = n;
      if (i.simulation && i.simulation.allowResume && i.pointerType === e)
        for (; r; ) {
          if (r === i.element)
            return i;
          r = ct(r);
        }
    }
    return null;
  },
  // if it's a mouse or pen interaction
  mouseOrPen({
    pointerId: e,
    pointerType: t,
    eventType: n,
    scope: o
  }) {
    if (t !== "mouse" && t !== "pen")
      return null;
    let i;
    for (const r of o.interactions.list)
      if (r.pointerType === t) {
        if (r.simulation && !kn(r, e))
          continue;
        if (r.interacting())
          return r;
        i || (i = r);
      }
    if (i)
      return i;
    for (const r of o.interactions.list)
      if (r.pointerType === t && !(/down/i.test(n) && r.simulation))
        return r;
    return null;
  },
  // get interaction that has this pointer
  hasPointer({
    pointerId: e,
    scope: t
  }) {
    for (const n of t.interactions.list)
      if (kn(n, e))
        return n;
    return null;
  },
  // get first idle interaction with a matching pointerType
  idle({
    pointerType: e,
    scope: t
  }) {
    for (const n of t.interactions.list) {
      if (n.pointers.length === 1) {
        const o = n.interactable;
        if (o && !(o.options.gesture && o.options.gesture.enabled))
          continue;
      } else if (n.pointers.length >= 2)
        continue;
      if (!n.interacting() && e === n.pointerType)
        return n;
    }
    return null;
  }
};
function kn(e, t) {
  return e.pointers.some(({
    id: n
  }) => n === t);
}
const ns = Xe, _o = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
function os(e) {
  const t = {};
  for (const r of _o)
    t[r] = Co(r, e);
  const n = st.pEventTypes;
  let o;
  Q.PointerEvent ? o = [{
    type: n.down,
    listener: i
  }, {
    type: n.down,
    listener: t.pointerDown
  }, {
    type: n.move,
    listener: t.pointerMove
  }, {
    type: n.up,
    listener: t.pointerUp
  }, {
    type: n.cancel,
    listener: t.pointerUp
  }] : o = [{
    type: "mousedown",
    listener: t.pointerDown
  }, {
    type: "mousemove",
    listener: t.pointerMove
  }, {
    type: "mouseup",
    listener: t.pointerUp
  }, {
    type: "touchstart",
    listener: i
  }, {
    type: "touchstart",
    listener: t.pointerDown
  }, {
    type: "touchmove",
    listener: t.pointerMove
  }, {
    type: "touchend",
    listener: t.pointerUp
  }, {
    type: "touchcancel",
    listener: t.pointerUp
  }], o.push({
    type: "blur",
    listener(r) {
      for (const s of e.interactions.list)
        s.documentBlur(r);
    }
  }), e.prevTouchTime = 0, e.Interaction = class extends Rr {
    get pointerMoveTolerance() {
      return e.interactions.pointerMoveTolerance;
    }
    set pointerMoveTolerance(r) {
      e.interactions.pointerMoveTolerance = r;
    }
    _now() {
      return e.now();
    }
  }, e.interactions = {
    // all active and idle interactions
    list: [],
    new(r) {
      r.scopeFire = (a, l) => e.fire(a, l);
      const s = new e.Interaction(r);
      return e.interactions.list.push(s), s;
    },
    listeners: t,
    docEvents: o,
    pointerMoveTolerance: 1
  };
  function i() {
    for (const r of e.interactions.list)
      if (!(!r.pointerIsDown || r.pointerType !== "touch" || r._interacting))
        for (const s of r.pointers)
          e.documents.some(({
            doc: a
          }) => Ct(a, s.downTarget)) || r.removePointer(s.pointer, s.event);
  }
  e.usePlugin(So);
}
function Co(e, t) {
  return function(n) {
    const o = t.interactions.list, i = uo(n), [r, s] = fo(n), a = [];
    if (/^touch/.test(n.type)) {
      t.prevTouchTime = t.now();
      for (const l of n.changedTouches) {
        const c = l, u = Vt(c), f = {
          pointer: c,
          pointerId: u,
          pointerType: i,
          eventType: n.type,
          eventTarget: r,
          curEventTarget: s,
          scope: t
        }, g = An(f);
        a.push([f.pointer, f.eventTarget, f.curEventTarget, g]);
      }
    } else {
      let l = !1;
      if (!st.supportsPointerEvent && /mouse/.test(n.type)) {
        for (let c = 0; c < o.length && !l; c++)
          l = o[c].pointerType !== "mouse" && o[c].pointerIsDown;
        l = l || t.now() - t.prevTouchTime < 500 || // on iOS and Firefox Mobile, MouseEvent.timeStamp is zero if simulated
        n.timeStamp === 0;
      }
      if (!l) {
        const c = {
          pointer: n,
          pointerId: Vt(n),
          pointerType: i,
          eventType: n.type,
          curEventTarget: s,
          eventTarget: r,
          scope: t
        }, u = An(c);
        a.push([c.pointer, c.eventTarget, c.curEventTarget, u]);
      }
    }
    for (const [l, c, u, f] of a)
      f[e](l, n, c, u);
  };
}
function An(e) {
  const {
    pointerType: t,
    scope: n
  } = e, i = {
    interaction: ns.search(e),
    searchDetails: e
  };
  return n.fire("interactions:find", i), i.interaction || n.interactions.new({
    pointerType: t
  });
}
function _e({
  doc: e,
  scope: t,
  options: n
}, o) {
  const {
    interactions: {
      docEvents: i
    },
    events: r
  } = t, s = r[o];
  t.browser.isIOS && !n.events && (n.events = {
    passive: !1
  });
  for (const l in r.delegatedEvents)
    s(e, l, r.delegateListener), s(e, l, r.delegateUseCapture, !0);
  const a = n && n.events;
  for (const {
    type: l,
    listener: c
  } of i)
    s(e, l, c, a);
}
const is = {
  id: "core/interactions",
  install: os,
  listeners: {
    "scope:add-document": (e) => _e(e, "add"),
    "scope:remove-document": (e) => _e(e, "remove"),
    "interactable:unset": ({
      interactable: e
    }, t) => {
      for (let n = t.interactions.list.length - 1; n >= 0; n--) {
        const o = t.interactions.list[n];
        o.interactable === e && (o.stop(), t.fire("interactions:destroy", {
          interaction: o
        }), o.destroy(), t.interactions.list.length > 2 && t.interactions.list.splice(n, 1));
      }
    }
  },
  onDocSignal: _e,
  doOnInteractions: Co,
  methodNames: _o
}, rs = is;
class ss {
  constructor() {
    p(this, "id", `__interact_scope_${Math.floor(Math.random() * 100)}`);
    p(this, "isInitialized", !1);
    p(this, "listenerMaps", []);
    p(this, "browser", st);
    p(this, "defaults", Ht(zo));
    p(this, "Eventable", Do);
    p(this, "actions", {
      map: {},
      phases: {
        start: !0,
        move: !0,
        end: !0
      },
      methodDict: {},
      phaselessTypes: {}
    });
    p(this, "interactStatic", Vr(this));
    p(this, "InteractEvent", sn);
    p(this, "Interactable");
    p(this, "interactables", new Qr(this));
    // main window
    p(this, "_win");
    // main document
    p(this, "document");
    // main window
    p(this, "window");
    // all documents being listened to
    p(this, "documents", []);
    p(this, "_plugins", {
      list: [],
      map: {}
    });
    p(this, "onWindowUnload", (t) => this.removeDocument(t.target));
    const t = this;
    this.Interactable = class extends Jr {
      get _defaults() {
        return t.defaults;
      }
      set(n) {
        return super.set(n), t.fire("interactable:set", {
          options: n,
          interactable: this
        }), this;
      }
      unset() {
        super.unset();
        const n = t.interactables.list.indexOf(this);
        n < 0 || (super.unset(), t.interactables.list.splice(n, 1), t.fire("interactable:unset", {
          interactable: this
        }));
      }
    };
  }
  addListeners(t, n) {
    this.listenerMaps.push({
      id: n,
      map: t
    });
  }
  fire(t, n) {
    for (const {
      map: {
        [t]: o
      }
    } of this.listenerMaps)
      if (o && o(n, this, t) === !1)
        return !1;
  }
  init(t) {
    return this.isInitialized ? this : as(this, t);
  }
  pluginIsInstalled(t) {
    return this._plugins.map[t.id] || this._plugins.list.indexOf(t) !== -1;
  }
  usePlugin(t, n) {
    if (!this.isInitialized)
      return this;
    if (this.pluginIsInstalled(t))
      return this;
    if (t.id && (this._plugins.map[t.id] = t), this._plugins.list.push(t), t.install && t.install(this, n), t.listeners && t.before) {
      let o = 0;
      const i = this.listenerMaps.length, r = t.before.reduce((s, a) => (s[a] = !0, s[Rn(a)] = !0, s), {});
      for (; o < i; o++) {
        const s = this.listenerMaps[o].id;
        if (r[s] || r[Rn(s)])
          break;
      }
      this.listenerMaps.splice(o, 0, {
        id: t.id,
        map: t.listeners
      });
    } else
      t.listeners && this.listenerMaps.push({
        id: t.id,
        map: t.listeners
      });
    return this;
  }
  addDocument(t, n) {
    if (this.getDocIndex(t) !== -1)
      return !1;
    const o = gt(t);
    n = n ? z({}, n) : {}, this.documents.push({
      doc: t,
      options: n
    }), this.events.documents.push(t), t !== this.document && this.events.add(o, "unload", this.onWindowUnload), this.fire("scope:add-document", {
      doc: t,
      window: o,
      scope: this,
      options: n
    });
  }
  removeDocument(t) {
    const n = this.getDocIndex(t), o = gt(t), i = this.documents[n].options;
    this.events.remove(o, "unload", this.onWindowUnload), this.documents.splice(n, 1), this.events.documents.splice(n, 1), this.fire("scope:remove-document", {
      doc: t,
      window: o,
      scope: this,
      options: i
    });
  }
  getDocIndex(t) {
    for (let n = 0; n < this.documents.length; n++)
      if (this.documents[n].doc === t)
        return n;
    return -1;
  }
  getDocOptions(t) {
    const n = this.getDocIndex(t);
    return n === -1 ? null : this.documents[n].options;
  }
  now() {
    return (this.window.Date || Date).now();
  }
}
function as(e, t) {
  return e.isInitialized = !0, h.window(t) && to(t), Q.init(t), st.init(t), xt.init(t), e.window = t, e.document = t.document, e.usePlugin(rs), e.usePlugin(es), e;
}
function Rn(e) {
  return e && e.replace(/\/.*$/, "");
}
const Oo = new ss(), cs = Oo.interactStatic, Z = cs, ls = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : globalThis;
Oo.init(ls);
const us = () => {
}, fs = () => {
}, ds = (e) => {
  const t = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(([o, i]) => o in e || i in e), n = (o, i) => {
    const {
      range: r,
      limits: s = {
        left: -1 / 0,
        right: 1 / 0,
        top: -1 / 0,
        bottom: 1 / 0
      },
      offset: a = {
        x: 0,
        y: 0
      }
    } = e, l = {
      range: r,
      grid: e,
      x: null,
      y: null
    };
    for (const [c, u] of t) {
      const f = Math.round((o - a.x) / e[c]), g = Math.round((i - a.y) / e[u]);
      l[c] = Math.max(s.left, Math.min(s.right, f * e[c] + a.x)), l[u] = Math.max(s.top, Math.min(s.bottom, g * e[u] + a.y));
    }
    return l;
  };
  return n.grid = e, n.coordFields = t, n;
}, ps = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  edgeTarget: us,
  elements: fs,
  grid: ds
}, Symbol.toStringTag, { value: "Module" })), hs = {
  id: "snappers",
  install(e) {
    const {
      interactStatic: t
    } = e;
    t.snappers = z(t.snappers || {}, ps), t.createSnapGrid = t.snappers.grid;
  }
}, gs = hs, ms = {
  start(e) {
    const {
      state: t,
      rect: n,
      edges: o,
      pageCoords: i
    } = e;
    let {
      ratio: r
    } = t.options;
    const {
      equalDelta: s,
      modifiers: a
    } = t.options;
    r === "preserve" && (r = n.width / n.height), t.startCoords = z({}, i), t.startRect = z({}, n), t.ratio = r, t.equalDelta = s;
    const l = t.linkedEdges = {
      top: o.top || o.left && !o.bottom,
      left: o.left || o.top && !o.right,
      bottom: o.bottom || o.right && !o.top,
      right: o.right || o.bottom && !o.left
    };
    if (t.xIsPrimaryAxis = !!(o.left || o.right), t.equalDelta) {
      const u = (l.left ? 1 : -1) * (l.top ? 1 : -1);
      t.edgeSign = {
        x: u,
        y: u
      };
    } else
      t.edgeSign = {
        x: l.left ? -1 : 1,
        y: l.top ? -1 : 1
      };
    if (z(e.edges, l), !a || !a.length)
      return;
    const c = new rn(e.interaction);
    c.copyFrom(e.interaction.modification), c.prepareStates(a), t.subModification = c, c.startAll({
      ...e
    });
  },
  set(e) {
    const {
      state: t,
      rect: n,
      coords: o
    } = e, i = z({}, o), r = t.equalDelta ? vs : ys;
    if (r(t, t.xIsPrimaryAxis, o, n), !t.subModification)
      return null;
    const s = z({}, n);
    we(t.linkedEdges, s, {
      x: o.x - i.x,
      y: o.y - i.y
    });
    const a = t.subModification.setAll({
      ...e,
      rect: s,
      edges: t.linkedEdges,
      pageCoords: o,
      prevCoords: o,
      prevRect: s
    }), {
      delta: l
    } = a;
    if (a.changed) {
      const c = Math.abs(l.x) > Math.abs(l.y);
      r(t, c, a.coords, a.rect), z(o, a.coords);
    }
    return a.eventProps;
  },
  defaults: {
    ratio: "preserve",
    equalDelta: !1,
    modifiers: [],
    enabled: !1
  }
};
function vs({
  startCoords: e,
  edgeSign: t
}, n, o) {
  n ? o.y = e.y + (o.x - e.x) * t.y : o.x = e.x + (o.y - e.y) * t.x;
}
function ys({
  startRect: e,
  startCoords: t,
  ratio: n,
  edgeSign: o
}, i, r, s) {
  if (i) {
    const a = s.width / n;
    r.y = t.y + (a - e.height) * o.y;
  } else {
    const a = s.height * n;
    r.x = t.x + (a - e.width) * o.x;
  }
}
const xs = Et(ms, "aspectRatio"), Mo = () => {
};
Mo._defaults = {};
const re = Mo;
function bs({
  rect: e,
  startOffset: t,
  state: n,
  interaction: o,
  pageCoords: i
}) {
  const {
    options: r
  } = n, {
    elementRect: s
  } = r, a = z({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  }, r.offset || {});
  if (e && s) {
    const l = Mt(r.restriction, o, i);
    if (l) {
      const c = l.right - l.left - e.width, u = l.bottom - l.top - e.height;
      c < 0 && (a.left += c, a.right += c), u < 0 && (a.top += u, a.bottom += u);
    }
    a.left += t.left - e.width * s.left, a.top += t.top - e.height * s.top, a.right += t.right - e.width * (1 - s.right), a.bottom += t.bottom - e.height * (1 - s.bottom);
  }
  n.offset = a;
}
function ws({
  coords: e,
  interaction: t,
  state: n
}) {
  const {
    options: o,
    offset: i
  } = n, r = Mt(o.restriction, t, e);
  if (!r)
    return;
  const s = Pi(r);
  e.x = Math.max(Math.min(s.right - i.right, e.x), s.left + i.left), e.y = Math.max(Math.min(s.bottom - i.bottom, e.y), s.top + i.top);
}
function Mt(e, t, n) {
  return h.func(e) ? Kt(e, t.interactable, t.element, [n.x, n.y, t]) : Kt(e, t.interactable, t.element);
}
const Ss = {
  restriction: null,
  elementRect: null,
  offset: null,
  endOnly: !1,
  enabled: !1
}, he = {
  start: bs,
  set: ws,
  defaults: Ss
}, Es = Et(he, "restrict"), ko = {
  top: 1 / 0,
  left: 1 / 0,
  bottom: -1 / 0,
  right: -1 / 0
}, Ao = {
  top: -1 / 0,
  left: -1 / 0,
  bottom: 1 / 0,
  right: 1 / 0
};
function Is({
  interaction: e,
  startOffset: t,
  state: n
}) {
  const {
    options: o
  } = n;
  let i;
  if (o) {
    const r = Mt(o.offset, e, e.coords.start.page);
    i = be(r);
  }
  i = i || {
    x: 0,
    y: 0
  }, n.offset = {
    top: i.y + t.top,
    left: i.x + t.left,
    bottom: i.y - t.bottom,
    right: i.x - t.right
  };
}
function zs({
  coords: e,
  edges: t,
  interaction: n,
  state: o
}) {
  const {
    offset: i,
    options: r
  } = o;
  if (!t)
    return;
  const s = z({}, e), a = Mt(r.inner, n, s) || {}, l = Mt(r.outer, n, s) || {};
  $n(a, ko), $n(l, Ao), t.top ? e.y = Math.min(Math.max(l.top + i.top, s.y), a.top + i.top) : t.bottom && (e.y = Math.max(Math.min(l.bottom + i.bottom, s.y), a.bottom + i.bottom)), t.left ? e.x = Math.min(Math.max(l.left + i.left, s.x), a.left + i.left) : t.right && (e.x = Math.max(Math.min(l.right + i.right, s.x), a.right + i.right));
}
function $n(e, t) {
  for (const n of ["top", "left", "bottom", "right"])
    n in e || (e[n] = t[n]);
  return e;
}
const Ps = {
  inner: null,
  outer: null,
  offset: null,
  endOnly: !1,
  enabled: !1
}, Gt = {
  noInner: ko,
  noOuter: Ao,
  start: Is,
  set: zs,
  defaults: Ps
}, Ts = Et(Gt, "restrictEdges"), Ds = z({
  get elementRect() {
    return {
      top: 0,
      left: 0,
      bottom: 1,
      right: 1
    };
  },
  set elementRect(e) {
  }
}, he.defaults), _s = {
  start: he.start,
  set: he.set,
  defaults: Ds
}, Cs = Et(_s, "restrictRect"), Os = {
  width: -1 / 0,
  height: -1 / 0
}, Ms = {
  width: 1 / 0,
  height: 1 / 0
};
function ks(e) {
  return Gt.start(e);
}
function As(e) {
  const {
    interaction: t,
    state: n,
    rect: o,
    edges: i
  } = e, {
    options: r
  } = n;
  if (!i)
    return;
  const s = Ae(Mt(r.min, t, e.coords)) || Os, a = Ae(Mt(r.max, t, e.coords)) || Ms;
  n.options = {
    endOnly: r.endOnly,
    inner: z({}, Gt.noInner),
    outer: z({}, Gt.noOuter)
  }, i.top ? (n.options.inner.top = o.bottom - s.height, n.options.outer.top = o.bottom - a.height) : i.bottom && (n.options.inner.bottom = o.top + s.height, n.options.outer.bottom = o.top + a.height), i.left ? (n.options.inner.left = o.right - s.width, n.options.outer.left = o.right - a.width) : i.right && (n.options.inner.right = o.left + s.width, n.options.outer.right = o.left + a.width), Gt.set(e), n.options = r;
}
const Rs = {
  min: null,
  max: null,
  endOnly: !1,
  enabled: !1
}, $s = {
  start: ks,
  set: As,
  defaults: Rs
}, Ns = Et($s, "restrictSize");
function Ls(e) {
  const {
    interaction: t,
    interactable: n,
    element: o,
    rect: i,
    state: r,
    startOffset: s
  } = e, {
    options: a
  } = r, l = a.offsetWithOrigin ? js(e) : {
    x: 0,
    y: 0
  };
  let c;
  if (a.offset === "startCoords")
    c = {
      x: t.coords.start.page.x,
      y: t.coords.start.page.y
    };
  else {
    const f = Kt(a.offset, n, o, [t]);
    c = be(f) || {
      x: 0,
      y: 0
    }, c.x += l.x, c.y += l.y;
  }
  const {
    relativePoints: u
  } = a;
  r.offsets = i && u && u.length ? u.map((f, g) => ({
    index: g,
    relativePoint: f,
    x: s.left - i.width * f.x + c.x,
    y: s.top - i.height * f.y + c.y
  })) : [{
    index: 0,
    relativePoint: null,
    x: c.x,
    y: c.y
  }];
}
function Hs(e) {
  const {
    interaction: t,
    coords: n,
    state: o
  } = e, {
    options: i,
    offsets: r
  } = o, s = Qt(t.interactable, t.element, t.prepared.name), a = z({}, n), l = [];
  i.offsetWithOrigin || (a.x -= s.x, a.y -= s.y);
  for (const u of r) {
    const f = a.x - u.x, g = a.y - u.y;
    for (let m = 0, v = i.targets.length; m < v; m++) {
      const P = i.targets[m];
      let E;
      h.func(P) ? E = P(f, g, t._proxy, u, m) : E = P, E && l.push({
        x: (h.number(E.x) ? E.x : f) + u.x,
        y: (h.number(E.y) ? E.y : g) + u.y,
        range: h.number(E.range) ? E.range : i.range,
        source: P,
        index: m,
        offset: u
      });
    }
  }
  const c = {
    target: null,
    inRange: !1,
    distance: 0,
    range: 0,
    delta: {
      x: 0,
      y: 0
    }
  };
  for (const u of l) {
    const f = u.range, g = u.x - a.x, m = u.y - a.y, v = Zt(g, m);
    let P = v <= f;
    f === 1 / 0 && c.inRange && c.range !== 1 / 0 && (P = !1), (!c.target || (P ? (
      // is the closest target in range?
      c.inRange && f !== 1 / 0 ? (
        // the pointer is relatively deeper in this target
        v / f < c.distance / c.range
      ) : (
        // this target has Infinite range and the closest doesn't
        f === 1 / 0 && c.range !== 1 / 0 || // OR this target is closer that the previous closest
        v < c.distance
      )
    ) : (
      // The other is not in range and the pointer is closer to this target
      !c.inRange && v < c.distance
    ))) && (c.target = u, c.distance = v, c.range = f, c.inRange = P, c.delta.x = g, c.delta.y = m);
  }
  return c.inRange && (n.x = c.target.x, n.y = c.target.y), o.closest = c, c;
}
function js(e) {
  const {
    element: t
  } = e.interaction;
  return be(Kt(e.state.options.origin, null, null, [t])) || Qt(e.interactable, t, e.interaction.prepared.name);
}
const Fs = {
  range: 1 / 0,
  targets: null,
  offset: null,
  offsetWithOrigin: !0,
  origin: null,
  relativePoints: null,
  endOnly: !1,
  enabled: !1
}, an = {
  start: Ls,
  set: Hs,
  defaults: Fs
}, Bs = Et(an, "snap");
function Ws(e) {
  const {
    state: t,
    edges: n
  } = e, {
    options: o
  } = t;
  if (!n)
    return null;
  e.state = {
    options: {
      targets: null,
      relativePoints: [{
        x: n.left ? 0 : 1,
        y: n.top ? 0 : 1
      }],
      offset: o.offset || "self",
      origin: {
        x: 0,
        y: 0
      },
      range: o.range
    }
  }, t.targetFields = t.targetFields || [["width", "height"], ["x", "y"]], an.start(e), t.offsets = e.state.offsets, e.state = t;
}
function qs(e) {
  const {
    interaction: t,
    state: n,
    coords: o
  } = e, {
    options: i,
    offsets: r
  } = n, s = {
    x: o.x - r[0].x,
    y: o.y - r[0].y
  };
  n.options = z({}, i), n.options.targets = [];
  for (const l of i.targets || []) {
    let c;
    if (h.func(l) ? c = l(s.x, s.y, t) : c = l, !!c) {
      for (const [u, f] of n.targetFields)
        if (u in c || f in c) {
          c.x = c[u], c.y = c[f];
          break;
        }
      n.options.targets.push(c);
    }
  }
  const a = an.set(e);
  return n.options = i, a;
}
const Ys = {
  range: 1 / 0,
  targets: null,
  offset: null,
  endOnly: !1,
  enabled: !1
}, ge = {
  start: Ws,
  set: qs,
  defaults: Ys
}, Xs = Et(ge, "snapSize");
function Gs(e) {
  const {
    edges: t
  } = e;
  return t ? (e.state.targetFields = e.state.targetFields || [[t.left ? "left" : "right", t.top ? "top" : "bottom"]], ge.start(e)) : null;
}
const Us = {
  start: Gs,
  set: ge.set,
  defaults: z(Ht(ge.defaults), {
    targets: null,
    range: null,
    offset: {
      x: 0,
      y: 0
    }
  })
}, Ks = Et(Us, "snapEdges"), Ce = {
  aspectRatio: xs,
  restrictEdges: Ts,
  restrict: Es,
  restrictRect: Cs,
  restrictSize: Ns,
  snapEdges: Ks,
  snap: Bs,
  snapSize: Xs,
  spring: re,
  avoid: re,
  transform: re,
  rubberband: re
}, Vs = {
  id: "modifiers",
  install(e) {
    const {
      interactStatic: t
    } = e;
    e.usePlugin(Io), e.usePlugin(gs), t.modifiers = Ce;
    for (const n in Ce) {
      const {
        _defaults: o,
        _methods: i
      } = Ce[n];
      o._methods = i, e.defaults.perAction[n] = o;
    }
  }
}, Js = Vs;
class Ro extends Se {
  /** */
  constructor(t, n, o, i, r, s) {
    if (super(r), ue(this, o), o !== n && ue(this, n), this.timeStamp = s, this.originalEvent = o, this.type = t, this.pointerId = Vt(n), this.pointerType = uo(n), this.target = i, this.currentTarget = null, t === "tap") {
      const a = r.getPointerIndex(n);
      this.dt = this.timeStamp - r.pointers[a].downTime;
      const l = this.timeStamp - r.tapTime;
      this.double = !!r.prevTap && r.prevTap.type !== "doubletap" && r.prevTap.target === this.target && l < 500;
    } else
      t === "doubletap" && (this.dt = n.timeStamp - r.tapTime, this.double = !0);
  }
  _subtractOrigin({
    x: t,
    y: n
  }) {
    return this.pageX -= t, this.pageY -= n, this.clientX -= t, this.clientY -= n, this;
  }
  _addOrigin({
    x: t,
    y: n
  }) {
    return this.pageX += t, this.pageY += n, this.clientX += t, this.clientY += n, this;
  }
  /**
   * Prevent the default behaviour of the original Event
   */
  preventDefault() {
    this.originalEvent.preventDefault();
  }
}
const Qs = {
  holdDuration: 600,
  ignoreFrom: null,
  allowFrom: null,
  origin: {
    x: 0,
    y: 0
  }
}, Ut = {
  id: "pointer-events/base",
  before: ["inertia", "modifiers", "auto-start", "actions"],
  install: ia,
  listeners: {
    "interactions:new": Zs,
    "interactions:update-pointer": ta,
    "interactions:move": ea,
    "interactions:down": (e, t) => {
      na(e, t), bt(e, t);
    },
    "interactions:up": (e, t) => {
      Ge(e), bt(e, t), oa(e, t);
    },
    "interactions:cancel": (e, t) => {
      Ge(e), bt(e, t);
    }
  },
  PointerEvent: Ro,
  fire: bt,
  collectEventTargets: $o,
  defaults: Qs,
  types: {
    down: !0,
    move: !0,
    up: !0,
    cancel: !0,
    tap: !0,
    doubletap: !0,
    hold: !0
  }
};
function bt(e, t) {
  const {
    interaction: n,
    pointer: o,
    event: i,
    eventTarget: r,
    type: s,
    targets: a = $o(e, t)
  } = e, l = new Ro(s, o, i, r, n, t.now());
  t.fire("pointerEvents:new", {
    pointerEvent: l
  });
  const c = {
    interaction: n,
    pointer: o,
    event: i,
    eventTarget: r,
    targets: a,
    type: s,
    pointerEvent: l
  };
  for (let u = 0; u < a.length; u++) {
    const f = a[u];
    for (const m in f.props || {})
      l[m] = f.props[m];
    const g = Qt(f.eventable, f.node);
    if (l._subtractOrigin(g), l.eventable = f.eventable, l.currentTarget = f.node, f.eventable.fire(l), l._addOrigin(g), l.immediatePropagationStopped || l.propagationStopped && u + 1 < a.length && a[u + 1].node !== l.currentTarget)
      break;
  }
  if (t.fire("pointerEvents:fired", c), s === "tap") {
    const u = l.double ? bt({
      interaction: n,
      pointer: o,
      event: i,
      eventTarget: r,
      type: "doubletap"
    }, t) : l;
    n.prevTap = u, n.tapTime = u.timeStamp;
  }
  return l;
}
function $o({
  interaction: e,
  pointer: t,
  event: n,
  eventTarget: o,
  type: i
}, r) {
  const s = e.getPointerIndex(t), a = e.pointers[s];
  if (i === "tap" && (e.pointerWasMoved || // or if the pointerup target is different to the pointerdown target
  !(a && a.downTarget === o)))
    return [];
  const l = io(o), c = {
    interaction: e,
    pointer: t,
    event: n,
    eventTarget: o,
    type: i,
    path: l,
    targets: [],
    node: null
  };
  for (const u of l)
    c.node = u, r.fire("pointerEvents:collect-targets", c);
  return i === "hold" && (c.targets = c.targets.filter((u) => {
    var f;
    return u.eventable.options.holdDuration === ((f = e.pointers[s]) == null ? void 0 : f.hold.duration);
  })), c.targets;
}
function Zs({
  interaction: e
}) {
  e.prevTap = null, e.tapTime = 0;
}
function ta({
  down: e,
  pointerInfo: t
}) {
  !e && t.hold || (t.hold = {
    duration: 1 / 0,
    timeout: null
  });
}
function Ge({
  interaction: e,
  pointerIndex: t
}) {
  const n = e.pointers[t].hold;
  n && n.timeout && (clearTimeout(n.timeout), n.timeout = null);
}
function ea(e, t) {
  const {
    interaction: n,
    pointer: o,
    event: i,
    eventTarget: r,
    duplicate: s
  } = e;
  !s && (!n.pointerIsDown || n.pointerWasMoved) && (n.pointerIsDown && Ge(e), bt({
    interaction: n,
    pointer: o,
    event: i,
    eventTarget: r,
    type: "move"
  }, t));
}
function na({
  interaction: e,
  pointer: t,
  event: n,
  eventTarget: o,
  pointerIndex: i
}, r) {
  const s = e.pointers[i].hold, a = io(o), l = {
    interaction: e,
    pointer: t,
    event: n,
    eventTarget: o,
    type: "hold",
    targets: [],
    path: a,
    node: null
  };
  for (const u of a)
    l.node = u, r.fire("pointerEvents:collect-targets", l);
  if (!l.targets.length)
    return;
  let c = 1 / 0;
  for (const u of l.targets) {
    const f = u.eventable.options.holdDuration;
    f < c && (c = f);
  }
  s.duration = c, s.timeout = setTimeout(() => {
    bt({
      interaction: e,
      eventTarget: o,
      pointer: t,
      event: n,
      type: "hold"
    }, r);
  }, c);
}
function oa({
  interaction: e,
  pointer: t,
  event: n,
  eventTarget: o
}, i) {
  e.pointerWasMoved || bt({
    interaction: e,
    eventTarget: o,
    pointer: t,
    event: n,
    type: "tap"
  }, i);
}
function ia(e) {
  e.pointerEvents = Ut, e.defaults.actions.pointerEvents = Ut.defaults, z(e.actions.phaselessTypes, Ut.types);
}
const ra = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ut
}, Symbol.toStringTag, { value: "Module" }));
function sa(e) {
  e.usePlugin(Ut);
  const {
    pointerEvents: t
  } = e;
  t.defaults.holdRepeatInterval = 0, t.types.holdrepeat = e.actions.phaselessTypes.holdrepeat = !0;
}
function aa({
  pointerEvent: e
}) {
  e.type === "hold" && (e.count = (e.count || 0) + 1);
}
function ca({
  interaction: e,
  pointerEvent: t,
  eventTarget: n,
  targets: o
}, i) {
  if (t.type !== "hold" || !o.length)
    return;
  const r = o[0].eventable.options.holdRepeatInterval;
  r <= 0 || (e.holdIntervalHandle = setTimeout(() => {
    i.pointerEvents.fire({
      interaction: e,
      eventTarget: n,
      type: "hold",
      pointer: t,
      event: t
    }, i);
  }, r));
}
function la({
  interaction: e
}) {
  e.holdIntervalHandle && (clearInterval(e.holdIntervalHandle), e.holdIntervalHandle = null);
}
const ua = {
  id: "pointer-events/holdRepeat",
  install: sa,
  listeners: ["move", "up", "cancel", "endall"].reduce((e, t) => (e[`pointerEvents:${t}`] = la, e), {
    "pointerEvents:new": aa,
    "pointerEvents:fired": ca
  })
}, fa = ua;
function da(e) {
  const {
    Interactable: t
  } = e;
  t.prototype.pointerEvents = pa;
  const n = t.prototype._backCompatOption;
  t.prototype._backCompatOption = function(o, i) {
    const r = n.call(this, o, i);
    return r === this && (this.events.options[o] = i), r;
  };
}
function pa(e) {
  return z(this.events.options, e), this;
}
const ha = {
  id: "pointer-events/interactableTargets",
  install: da,
  listeners: {
    "pointerEvents:collect-targets": ({
      targets: e,
      node: t,
      type: n,
      eventTarget: o
    }, i) => {
      i.interactables.forEachMatch(t, (r) => {
        const s = r.events, a = s.options;
        s.types[n] && s.types[n].length && r.testIgnoreAllow(a, t, o) && e.push({
          node: t,
          eventable: s,
          props: {
            interactable: r
          }
        });
      });
    },
    "interactable:new": ({
      interactable: e
    }) => {
      e.events.getRect = function(t) {
        return e.getRect(t);
      };
    },
    "interactable:set": ({
      interactable: e,
      options: t
    }, n) => {
      z(e.events.options, n.pointerEvents.defaults), z(e.events.options, t.pointerEvents || {});
    }
  }
}, ga = ha, ma = {
  id: "pointer-events",
  install(e) {
    e.usePlugin(ra), e.usePlugin(fa), e.usePlugin(ga);
  }
}, va = ma;
function ya(e) {
  const {
    /** @lends Interactable */
    Interactable: t
  } = e;
  e.actions.phases.reflow = !0, t.prototype.reflow = function(n) {
    return xa(this, n, e);
  };
}
function xa(e, t, n) {
  const o = h.string(e.target) ? en(e._context.querySelectorAll(e.target)) : [e.target], i = n.window.Promise, r = i ? [] : null;
  for (const s of o) {
    const a = e.getRect(s);
    if (!a)
      break;
    const l = de(n.interactions.list, (u) => u.interacting() && u.interactable === e && u.element === s && u.prepared.name === t.name);
    let c;
    if (l)
      l.move(), r && (c = l._reflowPromise || new i((u) => {
        l._reflowResolve = u;
      }));
    else {
      const u = Ae(a), f = {
        page: {
          x: u.x,
          y: u.y
        },
        client: {
          x: u.x,
          y: u.y
        },
        timeStamp: n.now()
      }, g = Oi(f);
      c = ba(n, e, s, t, g);
    }
    r && r.push(c);
  }
  return r && i.all(r).then(() => e);
}
function ba(e, t, n, o, i) {
  const r = e.interactions.new({
    pointerType: "reflow"
  }), s = {
    interaction: r,
    event: i,
    pointer: i,
    eventTarget: n,
    phase: "reflow"
  };
  r.interactable = t, r.element = n, r.prevEvent = i, r.updatePointer(i, i, n, !0), so(r.coords.delta), nn(r.prepared, o), r._doPhase(s);
  const {
    Promise: a
  } = e.window, l = a ? new a((c) => {
    r._reflowResolve = c;
  }) : void 0;
  return r._reflowPromise = l, r.start(o, t, n), r._interacting ? (r.move(s), r.end(i)) : (r.stop(), r._reflowResolve()), r.removePointer(i, i), l;
}
const wa = {
  id: "reflow",
  install: ya,
  listeners: {
    // remove completed reflow interactions
    "interactions:stop": ({
      interaction: e
    }, t) => {
      e.pointerType === "reflow" && (e._reflowResolve && e._reflowResolve(), ki(t.interactions.list, e));
    }
  }
}, Sa = wa;
Z.use(So);
Z.use(To);
Z.use(va);
Z.use(Kr);
Z.use(Js);
Z.use(xr);
Z.use(Vi);
Z.use(tr);
Z.use(Sa);
Z.use(_r);
if (typeof module == "object" && module)
  try {
    module.exports = Z;
  } catch {
  }
Z.default = Z;
var Dt = /* @__PURE__ */ ((e) => (e.DOWN = "DOWN", e.LEFT = "LEFT", e.RIGHT = "RIGHT", e.UP = "UP", e))(Dt || {});
const Ea = (e) => {
  let t = 0, n;
  for (let o = 0; o < e.length; o++)
    n = e[o].y + e[o].h, n > t && (t = n);
  return t;
}, Ue = (e) => {
  const t = Array(e.length);
  for (let n = 0; n < e.length; n++)
    t[n] = Ia(e[n]);
  return t;
}, Ia = (e) => JSON.parse(JSON.stringify(e)), No = (e, t) => !(e === t || e.x + e.w <= t.x || e.x >= t.x + t.w || e.y + e.h <= t.y || e.y >= t.y + t.h), _t = (e, t) => {
  if (!e)
    return;
  const n = Ho(e), o = jo(e), i = Array(e.length);
  for (let r = 0; r < o.length; r++) {
    let s = o[r];
    s.static || (s = za(n, s, t), n.push(s)), i[e.indexOf(s)] = s, s.moved = !1;
  }
  return i;
}, za = (e, t, n) => {
  if (n)
    for (; t.y > 0 && !me(e, t); )
      t.y--;
  let o;
  for (; o = me(e, t); )
    t.y = o.y + o.h;
  return t;
}, Pa = (e, t) => {
  const n = Ho(e);
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (i.x + i.w > t.cols && (i.x = t.cols - i.w), i.x < 0 && (i.x = 0, i.w = t.cols), !i.static)
      n.push(i);
    else
      for (; me(n, i); )
        i.y++;
  }
  return e;
}, Lo = (e, t) => e.filter((n) => No(n, t)), me = (e, t) => {
  for (let n = 0, o = e.length; n < o; n++)
    if (No(e[n], t))
      return e[n];
}, Nn = (e, t) => e.filter((n) => n.i === t)[0], Ho = (e) => e.filter((t) => t.static), Ke = (e, t, n, o, i, r, s) => {
  var g;
  if (t.static)
    return e;
  const a = t.x, l = t.y, c = {
    DOWN: l < o,
    LEFT: a > n,
    RIGHT: a < n,
    UP: l > o
  };
  t.x = n, t.y = o, t.moved = !0;
  let u = jo(e);
  c.UP && (u = u.reverse());
  const f = Lo(u, t);
  if (s && f.length)
    return t.x = a, t.y = l, t.moved = !1, e;
  for (let m = 0; m < f.length; m++) {
    const v = f[m];
    if (v.moved || t.y > v.y && t.y - v.y > v.h / 4)
      continue;
    const P = (g = Object.keys(c).filter((E) => c[E])) == null ? void 0 : g[0];
    v.static ? e = Ln(e, v, t, i, P, r) : e = Ln(e, t, v, i, P, r);
  }
  return e;
}, Ln = (e, t, n, o, i, r) => {
  if (o) {
    const l = {
      h: n.h,
      i: -1,
      w: n.w,
      x: n.x,
      y: Math.max(t.y - n.h, 0)
    };
    if (!me(e, l))
      return Ke(e, n, l.x, l.y, o, r, !1);
  }
  const a = {
    $default: {
      x: n.x,
      y: n.y + 1
    },
    [Dt.LEFT]: [n.x + t.w, t.y],
    [Dt.RIGHT]: [n.x - t.w, t.y],
    [Dt.UP]: [n.x, n.y + t.h],
    [Dt.DOWN]: [n.x, n.y - t.h]
  };
  if (r) {
    const l = i === Dt.LEFT || i === Dt.RIGHT;
    if (i in a && !(l && t.w < n.w && t.x !== n.x)) {
      const [c, u] = a[i];
      a.$default.x = c, a.$default.y = u;
    }
  }
  return Ke(e, n, a.$default.x, a.$default.y, r, !1);
}, Ta = (e, t, n, o) => ({
  height: `${o}px`,
  left: `${t}px`,
  position: "absolute",
  top: `${e}px`,
  width: `${n}px`
}), Da = (e, t, n, o) => ({
  height: `${o}px`,
  position: "absolute",
  transform: `translate3d(${t}px,${e}px, 0)`,
  width: `${n}px`
}), jo = (e) => [...e].sort((t, n) => t.y === n.y && t.x === n.x ? 0 : t.y > n.y || t.y === n.y && t.x > n.x ? 1 : -1), _a = (e, t, n) => e.trim().replace(t, n), Ca = (e, t, n, o, i, r) => {
  if (Object.prototype.hasOwnProperty.call(t, o))
    return Ue(t[o] || []);
  let s = e;
  const a = Fo(n), l = a.slice(a.indexOf(o));
  for (let c = 0; c < l.length; c++) {
    const u = l[c];
    if (Object.prototype.hasOwnProperty.call(t, u)) {
      s = t[u];
      break;
    }
  }
  return s = Ue(s || []), _t(Pa(s, { cols: i }), r);
}, Oa = (e, t) => {
  const n = Fo(e);
  let [o] = n;
  for (let i = 1; i < n.length; i++) {
    const r = n[i];
    t > (e[r] ?? 1) && (o = r);
  }
  return o;
}, Ve = (e, t) => t[e] ?? void 0, Fo = (e) => Object.keys(e).sort((t, n) => (e[t] ?? 1) - (e[n] ?? 1)), Ma = (e) => !isNaN(e), ka = (e) => {
  const t = e.target.offsetParent || document.body, n = e.offsetParent === document.body ? { left: 0, top: 0 } : t.getBoundingClientRect(), o = e.clientX + t.scrollLeft - n.left, i = e.clientY + t.scrollTop - n.top;
  return { x: o, y: i };
}, Hn = (e, t, n, o) => !Ma(e) ? { deltaX: 0, deltaY: 0, lastX: n, lastY: o, x: n, y: o } : { deltaX: n - e, deltaY: o - t, lastX: e, lastY: t, x: n, y: o }, jn = (e) => ka(e), Bo = Symbol("$emitter"), Fn = /* @__PURE__ */ Un({
  __name: "GridItem",
  props: {
    breakpointCols: {
      required: !0,
      type: Object
    },
    colNum: {
      required: !0,
      type: Number
    },
    containerWidth: {
      required: !0,
      type: Number
    },
    h: {
      required: !0,
      type: Number
    },
    i: {
      required: !0,
      type: Number
    },
    isDraggable: {
      required: !0,
      type: Boolean
    },
    isResizable: {
      required: !0,
      type: Boolean
    },
    lastBreakpoint: {
      required: !0,
      type: String
    },
    margin: {
      required: !0,
      type: Array
    },
    maxH: {
      default: 1 / 0,
      type: Number
    },
    maxRows: {
      required: !0,
      type: Number
    },
    maxW: {
      default: 1 / 0,
      type: Number
    },
    minH: {
      default: 1,
      type: Number
    },
    minW: {
      default: 1,
      type: Number
    },
    rowHeight: {
      required: !0,
      type: Number
    },
    static: {
      default: !1,
      type: Boolean
    },
    useCssTransforms: {
      required: !0,
      type: Boolean
    },
    w: {
      required: !0,
      type: Number
    },
    x: {
      required: !0,
      type: Number
    },
    y: {
      required: !0,
      type: Number
    },
    dragIgnoreFrom: {
      type: String,
      required: !1,
      default: "a, button"
    },
    dragAllowFrom: {
      type: String,
      required: !1,
      default: null
    },
    dragOption: {
      type: Object,
      required: !1,
      default: () => ({})
    }
  },
  emits: ["container-resized", "resize", "resized", "move", "moved", "drag-event", "resizeEvent"],
  setup(e, { emit: t }) {
    const n = e, o = Y(null), i = Qo(Bo), r = "vue-resizable-handle", s = Y(n.colNum), a = Y(!1), l = Y({}), c = Y({ h: n.h, w: n.w, x: n.x, y: n.y }), u = Y(null), f = Y(!1), g = Y(!1), m = Y({ h: NaN, w: NaN, x: NaN, y: NaN }), v = Y({ h: NaN, w: NaN, x: NaN, y: NaN }), P = Y(!1), E = Y(null), $ = Zo({ props: {} }), T = se(() => ({
      "css-transforms": n.useCssTransforms,
      "disable-user-select": f.value,
      "no-touch": M.value,
      resizing: g.value,
      static: n.static,
      "vue-draggable-dragging": f.value,
      "vue-resizable": y.value
    })), M = se(() => {
      const w = (n.isDraggable || n.isResizable) && !n.static, L = navigator.userAgent.toLowerCase().includes("android");
      return w && L;
    }), y = se(() => n.isResizable && !n.static);
    U(() => s.value, () => {
      O(), R();
    }), U(() => n.containerWidth, () => {
      O(), R();
    }), U(() => n.h, (w) => {
      c.value.h = w, R();
    }), U(() => n.isDraggable, () => {
      N();
    }), U(() => n.isResizable, () => {
      O();
    }), U(() => n.maxH, () => {
      O();
    }), U(() => n.maxW, () => {
      O();
    }), U(() => n.minH, () => {
      O();
    }), U(() => n.minW, () => {
      O();
    }), U(() => n.rowHeight, () => {
      R();
    }), U(() => n.static, () => {
      O(), N();
    }), U(() => n.w, (w) => {
      c.value.w = w, F();
    }), U(() => n.x, (w) => {
      c.value.x = w, F();
    }), U(() => n.y, (w) => {
      c.value.y = w, F();
    });
    const d = () => {
      const [w] = n.margin;
      return (n.containerWidth - w * (s.value + 1)) / s.value;
    }, k = (w, L, _, W) => {
      const A = d(), [C, G] = n.margin;
      return {
        height: W === 1 / 0 ? W : Math.round(n.rowHeight * W + Math.max(0, W - 1) * G),
        left: Math.round(A * w + (w + 1) * G),
        top: Math.round(n.rowHeight * L + (L + 1) * G),
        width: _ === 1 / 0 ? _ : Math.round(A * _ + Math.max(0, _ - 1) * C)
      };
    }, x = (w, L) => {
      const _ = d(), [W, A] = n.margin, C = Math.round((L + W) / (_ + W)), G = Math.round((w + A) / (n.rowHeight + A));
      return {
        h: Math.max(Math.min(G, n.maxRows - c.value.y), 0),
        w: Math.max(Math.min(C, s.value - c.value.x), 0)
      };
    }, j = (w, L) => {
      const _ = d(), [W, A] = n.margin, C = Math.round((L - W) / (_ + W)), G = Math.round((w - A) / (n.rowHeight + A));
      return {
        x: Math.max(Math.min(C, s.value - c.value.w), 0),
        y: Math.max(Math.min(G, n.maxRows - c.value.h), 0)
      };
    }, F = () => {
      var L, _;
      const w = k(c.value.x, c.value.y, c.value.w, c.value.h);
      n.x + n.w > s.value ? (c.value.x = 0, c.value.w = n.w > s.value ? s.value : n.w) : (c.value.x = n.x, c.value.w = n.w), f.value && (w.top = l.value.top ?? 0, w.left = l.value.left ?? 0), g.value && (w.width = ((L = E == null ? void 0 : E.value) == null ? void 0 : L.width) ?? 0, w.height = ((_ = E == null ? void 0 : E.value) == null ? void 0 : _.height) ?? 0), $.props = n.useCssTransforms ? Da(w.top, w.left, w.width, w.height) : Ta(w.top, w.left, w.width, w.height);
    }, R = () => {
      F();
      const w = {};
      for (const L of ["width", "height"]) {
        const _ = $.props[L], W = _ == null ? void 0 : _.toString().match(/^(\d+)px$/);
        if (!W)
          return;
        w[L] = +W[1];
      }
      t("container-resized", {
        h: n.h,
        height: w.height,
        i: n.i,
        w: n.w,
        width: w.width
      });
    }, X = (w) => {
      var G, et;
      if (n.static || g.value)
        return;
      const L = jn(w);
      if (!L)
        return;
      const { x: _, y: W } = L, A = { left: 0, top: 0 };
      switch (w.type) {
        case "dragstart": {
          v.value.x = c.value.x, v.value.y = c.value.y;
          const J = w.target.offsetParent.getBoundingClientRect(), rt = w.target.getBoundingClientRect();
          A.left = rt.left - J.left, A.top = rt.top - J.top, l.value = A, f.value = !0;
          break;
        }
        case "dragend": {
          if (!f.value)
            return;
          const J = w.target.offsetParent.getBoundingClientRect(), rt = w.target.getBoundingClientRect();
          A.left = rt.left - J.left, A.top = rt.top - J.top, l.value = {}, f.value = !1;
          break;
        }
        case "dragmove": {
          const J = Hn(m.value.x, m.value.y, _, W);
          A.left = (((G = l == null ? void 0 : l.value) == null ? void 0 : G.left) ?? 0) + J.deltaX, A.top = (((et = l == null ? void 0 : l.value) == null ? void 0 : et.top) ?? 0) + J.deltaY, l.value = A;
          break;
        }
      }
      const C = j(A.top, A.left);
      m.value.x = _, m.value.y = W, (c.value.x !== C.x || c.value.y !== C.y) && t("move", n.i, C.x, C.y), w.type === "dragend" && (v.value.x !== c.value.x || v.value.y !== c.value.y) && t("moved", n.i, C.x, C.y), i == null || i.emit("drag-event", [w.type, n.i, C.x, C.y, c.value.h, c.value.w]);
    }, b = (w) => {
      var G, et;
      if (n.static)
        return;
      const L = jn(w);
      if (!L)
        return;
      const { x: _, y: W } = L, A = { height: 0, width: 0 };
      switch (w.type) {
        case "resizestart": {
          v.value.w = c.value.w, v.value.h = c.value.h;
          const { height: J, width: rt } = k(c.value.x, c.value.y, c.value.w, c.value.h);
          A.width = rt, A.height = J, E.value = A, g.value = !0;
          break;
        }
        case "resizemove": {
          const J = Hn(m.value.x, m.value.h, _, W);
          A.width = (((G = E == null ? void 0 : E.value) == null ? void 0 : G.width) ?? 0) + J.deltaX, A.height = (((et = E == null ? void 0 : E.value) == null ? void 0 : et.height) ?? 0) + J.deltaY, E.value = A, g.value = !0;
          break;
        }
        case "resizeend": {
          const { height: J, width: rt } = k(c.value.x, c.value.y, c.value.w, c.value.h);
          A.width = rt, A.height = J, E.value = null, g.value = !1;
          break;
        }
      }
      const C = x(A.height, A.width);
      C.w < n.minW && (C.w = n.minW), C.w > n.maxW && (C.w = n.maxW), C.h < n.minH && (C.h = n.minH), C.h > n.maxH && (C.h = n.maxH), C.h < 1 && (C.h = 1), C.w < 1 && (C.w = 1), m.value.x = _, m.value.h = W, (c.value.w !== C.w || c.value.h !== C.h) && t("resize", n.i, C.h, C.w, A.height, A.width), w.type === "resizeend" && (v.value.w !== c.value.w || v.value.h !== c.value.h) && t("resized", n.i, C.h, C.w, A.height, A.width), i == null || i.emit("resizeEvent", [w.type, n.i, c.value.x, c.value.y, C.h, C.w]);
    }, I = (w) => {
      s.value = w;
    }, N = () => {
      !u.value && o.value && (u.value = Z(o.value)), n.isDraggable && !n.static ? (u.value.draggable({
        ignoreFrom: n.dragIgnoreFrom,
        allowFrom: n.dragAllowFrom,
        ...n.dragOption
      }), a.value || (a.value = !0, u.value.on("dragstart dragmove dragend", X))) : u.value.draggable({ enabled: !1 });
    }, O = () => {
      if (!u.value && o.value && (u.value = Z(o.value)), n.isResizable && !n.static) {
        const w = `.${_a(r, " ", ".")}`, L = k(0, 0, n.maxW, n.maxH), _ = k(0, 0, n.minW, n.minH), W = {
          edges: { bottom: w, left: !1, right: w, top: !1 },
          ignoreFrom: "a, button",
          restrictSize: {
            max: { height: L.height, width: L.width },
            min: { height: _.height, width: _.width }
          }
        };
        u.value.resizable(W), P.value || (P.value = !0, u.value.on("resizestart resizemove resizeend", b));
      } else
        u.value.resizable({ enabled: !1 });
    };
    return (() => {
      i == null || i.on("recalculate-styles", F), i == null || i.on("setColNum", I);
    })(), Kn(() => {
      i == null || i.off("recalculate-styles", F), i == null || i.off("setColNum", I), u.value && u.value.unset();
    }), Vn(() => {
      n.lastBreakpoint && (s.value = Ve(n.lastBreakpoint, n.breakpointCols)), O(), N(), F();
    }), (w, L) => (qt(), le("div", {
      ref_key: "item",
      ref: o,
      class: hn(["vue-grid-item", Yt(T)]),
      style: Jn($.props)
    }, [
      Oe(w.$slots, "default"),
      Yt(y) ? (qt(), le("span", {
        key: 0,
        class: hn(r)
      })) : ti("", !0)
    ], 6));
  }
});
var ve = {}, Aa = {
  get exports() {
    return ve;
  },
  set exports(e) {
    ve = e;
  }
}, Ra = Aa.exports = {};
Ra.forEach = function(e, t) {
  for (var n = 0; n < e.length; n++) {
    var o = t(e[n]);
    if (o)
      return o;
  }
};
var $a = function(e) {
  var t = e.stateHandler.getState;
  function n(s) {
    var a = t(s);
    return a && !!a.isDetectable;
  }
  function o(s) {
    t(s).isDetectable = !0;
  }
  function i(s) {
    return !!t(s).busy;
  }
  function r(s, a) {
    t(s).busy = !!a;
  }
  return {
    isDetectable: n,
    markAsDetectable: o,
    isBusy: i,
    markBusy: r
  };
}, Na = function(e) {
  var t = {};
  function n(s) {
    var a = e.get(s);
    return a === void 0 ? [] : t[a] || [];
  }
  function o(s, a) {
    var l = e.get(s);
    t[l] || (t[l] = []), t[l].push(a);
  }
  function i(s, a) {
    for (var l = n(s), c = 0, u = l.length; c < u; ++c)
      if (l[c] === a) {
        l.splice(c, 1);
        break;
      }
  }
  function r(s) {
    var a = n(s);
    a && (a.length = 0);
  }
  return {
    get: n,
    add: o,
    removeListener: i,
    removeAllListeners: r
  };
}, La = function() {
  var e = 1;
  function t() {
    return e++;
  }
  return {
    generate: t
  };
}, Ha = function(e) {
  var t = e.idGenerator, n = e.stateHandler.getState;
  function o(r) {
    var s = n(r);
    return s && s.id !== void 0 ? s.id : null;
  }
  function i(r) {
    var s = n(r);
    if (!s)
      throw new Error("setId required the element to have a resize detection state.");
    var a = t.generate();
    return s.id = a, a;
  }
  return {
    get: o,
    set: i
  };
}, ja = function(e) {
  function t() {
  }
  var n = {
    log: t,
    warn: t,
    error: t
  };
  if (!e && window.console) {
    var o = function(i, r) {
      i[r] = function() {
        var a = console[r];
        if (a.apply)
          a.apply(console, arguments);
        else
          for (var l = 0; l < arguments.length; l++)
            a(arguments[l]);
      };
    };
    o(n, "log"), o(n, "warn"), o(n, "error");
  }
  return n;
}, ye = {}, Fa = {
  get exports() {
    return ye;
  },
  set exports(e) {
    ye = e;
  }
}, Wo = Fa.exports = {};
Wo.isIE = function(e) {
  function t() {
    var o = navigator.userAgent.toLowerCase();
    return o.indexOf("msie") !== -1 || o.indexOf("trident") !== -1 || o.indexOf(" edge/") !== -1;
  }
  if (!t())
    return !1;
  if (!e)
    return !0;
  var n = function() {
    var o, i = 3, r = document.createElement("div"), s = r.getElementsByTagName("i");
    do
      r.innerHTML = "<!--[if gt IE " + ++i + "]><i></i><![endif]-->";
    while (s[0]);
    return i > 4 ? i : o;
  }();
  return e === n;
};
Wo.isLegacyOpera = function() {
  return !!window.opera;
};
var Je = {}, Ba = {
  get exports() {
    return Je;
  },
  set exports(e) {
    Je = e;
  }
}, Wa = Ba.exports = {};
Wa.getOption = qa;
function qa(e, t, n) {
  var o = e[t];
  return o == null && n !== void 0 ? n : o;
}
var Bn = Je, Ya = function(t) {
  t = t || {};
  var n = t.reporter, o = Bn.getOption(t, "async", !0), i = Bn.getOption(t, "auto", !0);
  i && !o && (n && n.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."), o = !0);
  var r = Wn(), s, a = !1;
  function l(v, P) {
    !a && i && o && r.size() === 0 && f(), r.add(v, P);
  }
  function c() {
    for (a = !0; r.size(); ) {
      var v = r;
      r = Wn(), v.process();
    }
    a = !1;
  }
  function u(v) {
    a || (v === void 0 && (v = o), s && (g(s), s = null), v ? f() : c());
  }
  function f() {
    s = m(c);
  }
  function g(v) {
    var P = clearTimeout;
    return P(v);
  }
  function m(v) {
    var P = function(E) {
      return setTimeout(E, 0);
    };
    return P(v);
  }
  return {
    add: l,
    force: u
  };
};
function Wn() {
  var e = {}, t = 0, n = 0, o = 0;
  function i(a, l) {
    l || (l = a, a = 0), a > n ? n = a : a < o && (o = a), e[a] || (e[a] = []), e[a].push(l), t++;
  }
  function r() {
    for (var a = o; a <= n; a++)
      for (var l = e[a], c = 0; c < l.length; c++) {
        var u = l[c];
        u();
      }
  }
  function s() {
    return t;
  }
  return {
    add: i,
    process: r,
    size: s
  };
}
var cn = "_erd";
function Xa(e) {
  return e[cn] = {}, qo(e);
}
function qo(e) {
  return e[cn];
}
function Ga(e) {
  delete e[cn];
}
var Ua = {
  initState: Xa,
  getState: qo,
  cleanState: Ga
}, Bt = ye, Ka = function(e) {
  e = e || {};
  var t = e.reporter, n = e.batchProcessor, o = e.stateHandler.getState;
  if (!t)
    throw new Error("Missing required dependency: reporter.");
  function i(c, u) {
    function f() {
      u(c);
    }
    if (Bt.isIE(8))
      o(c).object = {
        proxy: f
      }, c.attachEvent("onresize", f);
    else {
      var g = a(c);
      if (!g)
        throw new Error("Element is not detectable by this strategy.");
      g.contentDocument.defaultView.addEventListener("resize", f);
    }
  }
  function r(c) {
    var u = e.important ? " !important; " : "; ";
    return (c.join(u) + u).trim();
  }
  function s(c, u, f) {
    f || (f = u, u = c, c = null), c = c || {}, c.debug;
    function g(m, v) {
      var P = r(["display: block", "position: absolute", "top: 0", "left: 0", "width: 100%", "height: 100%", "border: none", "padding: 0", "margin: 0", "opacity: 0", "z-index: -1000", "pointer-events: none"]), E = !1, $ = window.getComputedStyle(m), T = m.offsetWidth, M = m.offsetHeight;
      o(m).startSize = {
        width: T,
        height: M
      };
      function y() {
        function d() {
          if ($.position === "static") {
            m.style.setProperty("position", "relative", c.important ? "important" : "");
            var j = function(F, R, X, b) {
              function I(O) {
                return O.replace(/[^-\d\.]/g, "");
              }
              var N = X[b];
              N !== "auto" && I(N) !== "0" && (F.warn("An element that is positioned static has style." + b + "=" + N + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + b + " will be set to 0. Element: ", R), R.style.setProperty(b, "0", c.important ? "important" : ""));
            };
            j(t, m, $, "top"), j(t, m, $, "right"), j(t, m, $, "bottom"), j(t, m, $, "left");
          }
        }
        function k() {
          E || d();
          function j(R, X) {
            if (!R.contentDocument) {
              var b = o(R);
              b.checkForObjectDocumentTimeoutId && window.clearTimeout(b.checkForObjectDocumentTimeoutId), b.checkForObjectDocumentTimeoutId = setTimeout(function() {
                b.checkForObjectDocumentTimeoutId = 0, j(R, X);
              }, 100);
              return;
            }
            X(R.contentDocument);
          }
          var F = this;
          j(F, function(X) {
            v(m);
          });
        }
        $.position !== "" && (d(), E = !0);
        var x = document.createElement("object");
        x.style.cssText = P, x.tabIndex = -1, x.type = "text/html", x.setAttribute("aria-hidden", "true"), x.onload = k, Bt.isIE() || (x.data = "about:blank"), o(m) && (m.appendChild(x), o(m).object = x, Bt.isIE() && (x.data = "about:blank"));
      }
      n ? n.add(y) : y();
    }
    Bt.isIE(8) ? f(u) : g(u, f);
  }
  function a(c) {
    return o(c).object;
  }
  function l(c) {
    if (o(c)) {
      var u = a(c);
      u && (Bt.isIE(8) ? c.detachEvent("onresize", u.proxy) : c.removeChild(u), o(c).checkForObjectDocumentTimeoutId && window.clearTimeout(o(c).checkForObjectDocumentTimeoutId), delete o(c).object);
    }
  }
  return {
    makeDetectable: s,
    addListener: i,
    uninstall: l
  };
}, Va = ve.forEach, Ja = function(e) {
  e = e || {};
  var t = e.reporter, n = e.batchProcessor, o = e.stateHandler.getState;
  e.stateHandler.hasState;
  var i = e.idHandler;
  if (!n)
    throw new Error("Missing required dependency: batchProcessor");
  if (!t)
    throw new Error("Missing required dependency: reporter.");
  var r = u(), s = "erd_scroll_detection_scrollbar_style", a = "erd_scroll_detection_container";
  function l(y) {
    f(y, s, a);
  }
  l(window.document);
  function c(y) {
    var d = e.important ? " !important; " : "; ";
    return (y.join(d) + d).trim();
  }
  function u() {
    var y = 500, d = 500, k = document.createElement("div");
    k.style.cssText = c(["position: absolute", "width: " + y * 2 + "px", "height: " + d * 2 + "px", "visibility: hidden", "margin: 0", "padding: 0"]);
    var x = document.createElement("div");
    x.style.cssText = c(["position: absolute", "width: " + y + "px", "height: " + d + "px", "overflow: scroll", "visibility: none", "top: " + -y * 3 + "px", "left: " + -d * 3 + "px", "visibility: hidden", "margin: 0", "padding: 0"]), x.appendChild(k), document.body.insertBefore(x, document.body.firstChild);
    var j = y - x.clientWidth, F = d - x.clientHeight;
    return document.body.removeChild(x), {
      width: j,
      height: F
    };
  }
  function f(y, d, k) {
    function x(X, b) {
      b = b || function(N) {
        y.head.appendChild(N);
      };
      var I = y.createElement("style");
      return I.innerHTML = X, I.id = d, b(I), I;
    }
    if (!y.getElementById(d)) {
      var j = k + "_animation", F = k + "_animation_active", R = `/* Created by the element-resize-detector library. */
`;
      R += "." + k + " > div::-webkit-scrollbar { " + c(["display: none"]) + ` }

`, R += "." + F + " { " + c(["-webkit-animation-duration: 0.1s", "animation-duration: 0.1s", "-webkit-animation-name: " + j, "animation-name: " + j]) + ` }
`, R += "@-webkit-keyframes " + j + ` { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }
`, R += "@keyframes " + j + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }", x(R);
    }
  }
  function g(y) {
    y.className += " " + a + "_animation_active";
  }
  function m(y, d, k) {
    if (y.addEventListener)
      y.addEventListener(d, k);
    else if (y.attachEvent)
      y.attachEvent("on" + d, k);
    else
      return t.error("[scroll] Don't know how to add event listeners.");
  }
  function v(y, d, k) {
    if (y.removeEventListener)
      y.removeEventListener(d, k);
    else if (y.detachEvent)
      y.detachEvent("on" + d, k);
    else
      return t.error("[scroll] Don't know how to remove event listeners.");
  }
  function P(y) {
    return o(y).container.childNodes[0].childNodes[0].childNodes[0];
  }
  function E(y) {
    return o(y).container.childNodes[0].childNodes[0].childNodes[1];
  }
  function $(y, d) {
    var k = o(y).listeners;
    if (!k.push)
      throw new Error("Cannot add listener to an element that is not detectable.");
    o(y).listeners.push(d);
  }
  function T(y, d, k) {
    k || (k = d, d = y, y = null), y = y || {};
    function x() {
      if (y.debug) {
        var S = Array.prototype.slice.call(arguments);
        if (S.unshift(i.get(d), "Scroll: "), t.log.apply)
          t.log.apply(null, S);
        else
          for (var H = 0; H < S.length; H++)
            t.log(S[H]);
      }
    }
    function j(S) {
      function H(q) {
        var at = q.getRootNode && q.getRootNode().contains(q);
        return q === q.ownerDocument.body || q.ownerDocument.body.contains(q) || at;
      }
      return !H(S) || window.getComputedStyle(S) === null;
    }
    function F(S) {
      var H = o(S).container.childNodes[0], q = window.getComputedStyle(H);
      return !q.width || q.width.indexOf("px") === -1;
    }
    function R() {
      var S = window.getComputedStyle(d), H = {};
      return H.position = S.position, H.width = d.offsetWidth, H.height = d.offsetHeight, H.top = S.top, H.right = S.right, H.bottom = S.bottom, H.left = S.left, H.widthCSS = S.width, H.heightCSS = S.height, H;
    }
    function X() {
      var S = R();
      o(d).startSize = {
        width: S.width,
        height: S.height
      }, x("Element start size", o(d).startSize);
    }
    function b() {
      o(d).listeners = [];
    }
    function I() {
      if (x("storeStyle invoked."), !o(d)) {
        x("Aborting because element has been uninstalled");
        return;
      }
      var S = R();
      o(d).style = S;
    }
    function N(S, H, q) {
      o(S).lastWidth = H, o(S).lastHeight = q;
    }
    function O(S) {
      return P(S).childNodes[0];
    }
    function V() {
      return 2 * r.width + 1;
    }
    function w() {
      return 2 * r.height + 1;
    }
    function L(S) {
      return S + 10 + V();
    }
    function _(S) {
      return S + 10 + w();
    }
    function W(S) {
      return S * 2 + V();
    }
    function A(S) {
      return S * 2 + w();
    }
    function C(S, H, q) {
      var at = P(S), It = E(S), kt = L(H), At = _(q), tt = W(H), B = A(q);
      at.scrollLeft = kt, at.scrollTop = At, It.scrollLeft = tt, It.scrollTop = B;
    }
    function G() {
      var S = o(d).container;
      if (!S) {
        S = document.createElement("div"), S.className = a, S.style.cssText = c(["visibility: hidden", "display: inline", "width: 0px", "height: 0px", "z-index: -1", "overflow: hidden", "margin: 0", "padding: 0"]), o(d).container = S, g(S), d.appendChild(S);
        var H = function() {
          o(d).onRendered && o(d).onRendered();
        };
        m(S, "animationstart", H), o(d).onAnimationStart = H;
      }
      return S;
    }
    function et() {
      function S() {
        var K = o(d).style;
        if (K.position === "static") {
          d.style.setProperty("position", "relative", y.important ? "important" : "");
          var ft = function($t, Pt, Go, ne) {
            function Uo(Ko) {
              return Ko.replace(/[^-\d\.]/g, "");
            }
            var Ie = Go[ne];
            Ie !== "auto" && Uo(Ie) !== "0" && ($t.warn("An element that is positioned static has style." + ne + "=" + Ie + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + ne + " will be set to 0. Element: ", Pt), Pt.style[ne] = 0);
          };
          ft(t, d, K, "top"), ft(t, d, K, "right"), ft(t, d, K, "bottom"), ft(t, d, K, "left");
        }
      }
      function H(K, ft, $t, Pt) {
        return K = K ? K + "px" : "0", ft = ft ? ft + "px" : "0", $t = $t ? $t + "px" : "0", Pt = Pt ? Pt + "px" : "0", ["left: " + K, "top: " + ft, "right: " + Pt, "bottom: " + $t];
      }
      if (x("Injecting elements"), !o(d)) {
        x("Aborting because element has been uninstalled");
        return;
      }
      S();
      var q = o(d).container;
      q || (q = G());
      var at = r.width, It = r.height, kt = c(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%", "left: 0px", "top: 0px"]), At = c(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden"].concat(H(-(1 + at), -(1 + It), -It, -at))), tt = c(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]), B = c(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]), nt = c(["position: absolute", "left: 0", "top: 0"]), zt = c(["position: absolute", "width: 200%", "height: 200%"]), lt = document.createElement("div"), ut = document.createElement("div"), Rt = document.createElement("div"), un = document.createElement("div"), ee = document.createElement("div"), fn = document.createElement("div");
      lt.dir = "ltr", lt.style.cssText = kt, lt.className = a, ut.className = a, ut.style.cssText = At, Rt.style.cssText = tt, un.style.cssText = nt, ee.style.cssText = B, fn.style.cssText = zt, Rt.appendChild(un), ee.appendChild(fn), ut.appendChild(Rt), ut.appendChild(ee), lt.appendChild(ut), q.appendChild(lt);
      function dn() {
        var K = o(d);
        K && K.onExpand ? K.onExpand() : x("Aborting expand scroll handler: element has been uninstalled");
      }
      function pn() {
        var K = o(d);
        K && K.onShrink ? K.onShrink() : x("Aborting shrink scroll handler: element has been uninstalled");
      }
      m(Rt, "scroll", dn), m(ee, "scroll", pn), o(d).onExpandScroll = dn, o(d).onShrinkScroll = pn;
    }
    function J() {
      function S(tt, B, nt) {
        var zt = O(tt), lt = L(B), ut = _(nt);
        zt.style.setProperty("width", lt + "px", y.important ? "important" : ""), zt.style.setProperty("height", ut + "px", y.important ? "important" : "");
      }
      function H(tt) {
        var B = d.offsetWidth, nt = d.offsetHeight, zt = B !== o(d).lastWidth || nt !== o(d).lastHeight;
        x("Storing current size", B, nt), N(d, B, nt), n.add(0, function() {
          if (zt) {
            if (!o(d)) {
              x("Aborting because element has been uninstalled");
              return;
            }
            if (!q()) {
              x("Aborting because element container has not been initialized");
              return;
            }
            if (y.debug) {
              var ut = d.offsetWidth, Rt = d.offsetHeight;
              (ut !== B || Rt !== nt) && t.warn(i.get(d), "Scroll: Size changed before updating detector elements.");
            }
            S(d, B, nt);
          }
        }), n.add(1, function() {
          if (!o(d)) {
            x("Aborting because element has been uninstalled");
            return;
          }
          if (!q()) {
            x("Aborting because element container has not been initialized");
            return;
          }
          C(d, B, nt);
        }), zt && tt && n.add(2, function() {
          if (!o(d)) {
            x("Aborting because element has been uninstalled");
            return;
          }
          if (!q()) {
            x("Aborting because element container has not been initialized");
            return;
          }
          tt();
        });
      }
      function q() {
        return !!o(d).container;
      }
      function at() {
        function tt() {
          return o(d).lastNotifiedWidth === void 0;
        }
        x("notifyListenersIfNeeded invoked");
        var B = o(d);
        if (tt() && B.lastWidth === B.startSize.width && B.lastHeight === B.startSize.height)
          return x("Not notifying: Size is the same as the start size, and there has been no notification yet.");
        if (B.lastWidth === B.lastNotifiedWidth && B.lastHeight === B.lastNotifiedHeight)
          return x("Not notifying: Size already notified");
        x("Current size not notified, notifying..."), B.lastNotifiedWidth = B.lastWidth, B.lastNotifiedHeight = B.lastHeight, Va(o(d).listeners, function(nt) {
          nt(d);
        });
      }
      function It() {
        if (x("startanimation triggered."), F(d)) {
          x("Ignoring since element is still unrendered...");
          return;
        }
        x("Element rendered.");
        var tt = P(d), B = E(d);
        (tt.scrollLeft === 0 || tt.scrollTop === 0 || B.scrollLeft === 0 || B.scrollTop === 0) && (x("Scrollbars out of sync. Updating detector elements..."), H(at));
      }
      function kt() {
        if (x("Scroll detected."), F(d)) {
          x("Scroll event fired while unrendered. Ignoring...");
          return;
        }
        H(at);
      }
      if (x("registerListenersAndPositionElements invoked."), !o(d)) {
        x("Aborting because element has been uninstalled");
        return;
      }
      o(d).onRendered = It, o(d).onExpand = kt, o(d).onShrink = kt;
      var At = o(d).style;
      S(d, At.width, At.height);
    }
    function rt() {
      if (x("finalizeDomMutation invoked."), !o(d)) {
        x("Aborting because element has been uninstalled");
        return;
      }
      var S = o(d).style;
      N(d, S.width, S.height), C(d, S.width, S.height);
    }
    function Xo() {
      k(d);
    }
    function ln() {
      x("Installing..."), b(), X(), n.add(0, I), n.add(1, et), n.add(2, J), n.add(3, rt), n.add(4, Xo);
    }
    x("Making detectable..."), j(d) ? (x("Element is detached"), G(), x("Waiting until element is attached..."), o(d).onRendered = function() {
      x("Element is now attached"), ln();
    }) : ln();
  }
  function M(y) {
    var d = o(y);
    d && (d.onExpandScroll && v(P(y), "scroll", d.onExpandScroll), d.onShrinkScroll && v(E(y), "scroll", d.onShrinkScroll), d.onAnimationStart && v(d.container, "animationstart", d.onAnimationStart), d.container && y.removeChild(d.container));
  }
  return {
    makeDetectable: T,
    addListener: $,
    uninstall: M,
    initDocument: l
  };
}, Wt = ve.forEach, Qa = $a, Za = Na, tc = La, ec = Ha, nc = ja, qn = ye, oc = Ya, vt = Ua, ic = Ka, rc = Ja;
function Yn(e) {
  return Array.isArray(e) || e.length !== void 0;
}
function Xn(e) {
  if (Array.isArray(e))
    return e;
  var t = [];
  return Wt(e, function(n) {
    t.push(n);
  }), t;
}
function Gn(e) {
  return e && e.nodeType === 1;
}
var sc = function(e) {
  e = e || {};
  var t;
  if (e.idHandler)
    t = {
      get: function(T) {
        return e.idHandler.get(T, !0);
      },
      set: e.idHandler.set
    };
  else {
    var n = tc(), o = ec({
      idGenerator: n,
      stateHandler: vt
    });
    t = o;
  }
  var i = e.reporter;
  if (!i) {
    var r = i === !1;
    i = nc(r);
  }
  var s = yt(e, "batchProcessor", oc({ reporter: i })), a = {};
  a.callOnAdd = !!yt(e, "callOnAdd", !0), a.debug = !!yt(e, "debug", !1);
  var l = Za(t), c = Qa({
    stateHandler: vt
  }), u, f = yt(e, "strategy", "object"), g = yt(e, "important", !1), m = {
    reporter: i,
    batchProcessor: s,
    stateHandler: vt,
    idHandler: t,
    important: g
  };
  if (f === "scroll" && (qn.isLegacyOpera() ? (i.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."), f = "object") : qn.isIE(9) && (i.warn("Scroll strategy is not supported on IE9. Changing to object strategy."), f = "object")), f === "scroll")
    u = rc(m);
  else if (f === "object")
    u = ic(m);
  else
    throw new Error("Invalid strategy name: " + f);
  var v = {};
  function P(T, M, y) {
    function d(X) {
      var b = l.get(X);
      Wt(b, function(N) {
        N(X);
      });
    }
    function k(X, b, I) {
      l.add(b, I), X && I(b);
    }
    if (y || (y = M, M = T, T = {}), !M)
      throw new Error("At least one element required.");
    if (!y)
      throw new Error("Listener required.");
    if (Gn(M))
      M = [M];
    else if (Yn(M))
      M = Xn(M);
    else
      return i.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
    var x = 0, j = yt(T, "callOnAdd", a.callOnAdd), F = yt(T, "onReady", function() {
    }), R = yt(T, "debug", a.debug);
    Wt(M, function(b) {
      vt.getState(b) || (vt.initState(b), t.set(b));
      var I = t.get(b);
      if (R && i.log("Attaching listener to element", I, b), !c.isDetectable(b)) {
        if (R && i.log(I, "Not detectable."), c.isBusy(b)) {
          R && i.log(I, "System busy making it detectable"), k(j, b, y), v[I] = v[I] || [], v[I].push(function() {
            x++, x === M.length && F();
          });
          return;
        }
        return R && i.log(I, "Making detectable..."), c.markBusy(b, !0), u.makeDetectable({ debug: R, important: g }, b, function(O) {
          if (R && i.log(I, "onElementDetectable"), vt.getState(O)) {
            c.markAsDetectable(O), c.markBusy(O, !1), u.addListener(O, d), k(j, O, y);
            var V = vt.getState(O);
            if (V && V.startSize) {
              var w = O.offsetWidth, L = O.offsetHeight;
              (V.startSize.width !== w || V.startSize.height !== L) && d(O);
            }
            v[I] && Wt(v[I], function(_) {
              _();
            });
          } else
            R && i.log(I, "Element uninstalled before being detectable.");
          delete v[I], x++, x === M.length && F();
        });
      }
      R && i.log(I, "Already detecable, adding listener."), k(j, b, y), x++;
    }), x === M.length && F();
  }
  function E(T) {
    if (!T)
      return i.error("At least one element is required.");
    if (Gn(T))
      T = [T];
    else if (Yn(T))
      T = Xn(T);
    else
      return i.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
    Wt(T, function(M) {
      l.removeAllListeners(M), u.uninstall(M), vt.cleanState(M);
    });
  }
  function $(T) {
    u.initDocument && u.initDocument(T);
  }
  return {
    listenTo: P,
    removeListener: l.removeListener,
    removeAllListeners: l.removeAllListeners,
    uninstall: E,
    initDocument: $
  };
};
function yt(e, t, n) {
  var o = e[t];
  return o == null && n !== void 0 ? n : o;
}
function ac(e) {
  return { all: e = e || /* @__PURE__ */ new Map(), on: function(t, n) {
    var o = e.get(t);
    o ? o.push(n) : e.set(t, [n]);
  }, off: function(t, n) {
    var o = e.get(t);
    o && (n ? o.splice(o.indexOf(n) >>> 0, 1) : e.set(t, []));
  }, emit: function(t, n) {
    var o = e.get(t);
    o && o.slice().map(function(i) {
      i(n);
    }), (o = e.get("*")) && o.slice().map(function(i) {
      i(t, n);
    });
  } };
}
const Yo = () => typeof window < "u", cc = (e, t) => {
  if (!Yo)
    return t();
  window.addEventListener(e, t);
}, lc = (e, t) => {
  Yo && window.removeEventListener(e, t);
}, dc = /* @__PURE__ */ Un({
  __name: "GridLayout",
  props: {
    autoSize: {
      default: !0,
      type: Boolean
    },
    breakpoints: {
      default: () => ({ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }),
      type: Object
    },
    colNum: {
      required: !0,
      type: Number
    },
    cols: {
      default: () => ({ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }),
      type: Object
    },
    horizontalShift: {
      default: !1,
      type: Boolean
    },
    isDraggable: {
      default: !0,
      type: Boolean
    },
    isResizable: {
      default: !0,
      type: Boolean
    },
    layout: {
      required: !0,
      type: Array
    },
    margin: {
      default: () => [10, 10],
      type: Array
    },
    maxRows: {
      default: 1 / 0,
      type: Number
    },
    preventCollision: {
      default: !1,
      type: Boolean
    },
    responsive: {
      default: !1,
      type: Boolean
    },
    responsiveLayouts: {
      default: () => ({}),
      type: Object
    },
    rowHeight: {
      default: 150,
      type: Number
    },
    useCssTransforms: {
      default: !0,
      type: Boolean
    },
    useObserver: {
      default: !1,
      type: Boolean
    },
    verticalCompact: {
      default: !0,
      type: Boolean
    }
  },
  emits: [
    "update:layout",
    "layout-ready",
    "update:breakpoint",
    "layout-created",
    "layout-before-mount",
    "layout-mounted",
    "container-resized",
    "item-resize",
    "item-resized",
    "item-move",
    "item-moved",
    "intersection-observe",
    "intersection-unobserve"
  ],
  setup(e, { emit: t }) {
    const n = e, o = ac();
    ei(Bo, o);
    const i = { h: 0, i: -1, w: 0, x: 0, y: 0 }, r = ["minW", "minH", "maxW", "maxH", "moved", "static", "isDraggable", "isResizable"], s = Y(sc({ callOnAdd: !1, strategy: "scroll" })), a = Y(!1), l = Y(""), c = Y(0), u = Y({}), f = Y({}), g = Y(n.layout), m = Y({ h: 0, i: -1, w: 0, x: 0, y: 0 }), v = Y(0), P = Y(null), E = se(() => ({
      breakpointCols: n.cols,
      colNum: n.colNum,
      containerWidth: v.value,
      isDraggable: n.isDraggable,
      isResizable: n.isResizable,
      lastBreakpoint: l.value,
      margin: n.margin,
      maxRows: n.maxRows,
      responsive: n.responsive,
      rowHeight: n.rowHeight,
      useCssTransforms: n.useCssTransforms,
      width: v.value,
      ...i
    }));
    U(() => n.colNum, (b) => {
      o.emit("setColNum", b);
    }), U(() => n.layout.length, () => {
      T(), _t(n.layout, n.verticalCompact);
    }), U(() => n.margin, () => {
      d();
    }), U(() => n.responsive, (b) => {
      b || (t("update:layout", g.value), o.emit("setColNum", n.colNum)), x();
    }), U(() => v.value, (b, I) => {
      mt(() => {
        I === 0 && mt(() => {
          t("layout-ready", n.layout);
        }), n.responsive && j(), d();
      });
    });
    const $ = (b) => {
      const I = Object.keys(i);
      return Object.keys(b).reduce((N, O) => ((r.includes(O) || I.includes(O)) && (N[O] = b[O]), N), {});
    }, T = () => {
      if (n.layout && g.value) {
        if (n.layout.length !== g.value.length) {
          const b = M(n.layout, g.value);
          b.length > 0 && (n.layout.length > g.value.length ? g.value = g.value.concat(b) : g.value = g.value.filter((I) => !b.some((N) => I.i === N.i))), c.value = n.layout.length, y();
        }
        _t(n.layout, n.verticalCompact), d(), t("update:layout", n.layout), o.emit("recalculate-styles");
      }
    }, M = (b, I) => {
      const N = b.filter((V) => !I.some((w) => V.i === w.i)), O = I.filter((V) => !b.some((w) => V.i === w.i));
      return N.concat(O);
    }, y = () => {
      u.value = Object.assign({}, n.responsiveLayouts);
    }, d = () => {
      const b = k();
      f.value = { height: b };
    }, k = () => {
      if (!n.autoSize || !n.layout)
        return;
      const [, b] = n.margin;
      return `${Ea(n.layout) * (n.rowHeight + b) + b}px`;
    }, x = () => {
      P.value && (v.value = P.value.offsetWidth);
    }, j = () => {
      const b = Oa(n.breakpoints, v.value), I = Ve(b, n.cols);
      l.value && !u.value[l.value] && (u.value[l.value] = Ue(n.layout));
      const N = Ca(
        g.value,
        u.value,
        n.breakpoints,
        b,
        I,
        n.verticalCompact
      );
      u.value[b] = N, l.value !== b && t("update:breakpoint", b, N), l.value = b, t("update:layout", N), o.emit("setColNum", Ve(b, n.cols));
    }, F = () => {
      t("layout-created", n.layout), o.on("resizeEvent", R), o.on("drag-event", X);
    }, R = ([b, I, N, O, V, w]) => {
      console.log("RESIZED");
      const _ = Nn(n.layout, I) ?? { ...i };
      let W;
      if (n.preventCollision) {
        const A = Lo(n.layout, { ..._, h: V, w }).filter(
          (C) => C.i !== _.i
        );
        if (W = A.length > 0, W) {
          let C = 1 / 0, G = 1 / 0;
          A.forEach((et) => {
            et.x > _.x && (C = Math.min(C, et.x)), et.y > _.y && (G = Math.min(G, et.y));
          }), Number.isFinite(C) && (_.w = C - _.x), Number.isFinite(G) && (_.h = G - _.y);
        }
      }
      W || (_.w = w, _.h = V), b === "resizestart" || b === "resizemove" ? (m.value.i = +I, m.value.x = N, m.value.y = O, m.value.w = _.w, m.value.h = _.h, mt(() => {
        a.value = !0;
      })) : mt(() => {
        a.value = !1;
      }), n.responsive && j(), _t(n.layout, n.verticalCompact), o.emit("recalculate-styles"), d(), b === "resizeend" && t("update:layout", n.layout);
    }, X = ([b, I, N, O, V, w]) => {
      const _ = Nn(n.layout, I) ?? { ...i };
      b === "dragmove" || b === "dragstart" ? (m.value.i = +I, m.value.x = _.x, m.value.y = _.y, m.value.w = w, m.value.h = V, mt(() => {
        a.value = !0;
      })) : mt(() => {
        a.value = !1;
      }), t("update:layout", Ke(n.layout, _, N, O, !0, n.horizontalShift, n.preventCollision)), _t(n.layout, n.verticalCompact), o.emit("recalculate-styles"), d(), b === "dragend" && (_t(n.layout, n.verticalCompact), t("update:layout", n.layout));
    };
    return F(), Kn(() => {
      lc("resize", x), s.value && P.value && s.value.uninstall(P.value), o.off("resizeEvent", R), o.off("drag-event", X);
    }), ni(() => {
      t("layout-before-mount", n.layout);
    }), Vn(() => {
      t("layout-mounted", n.layout), mt(() => {
        g.value = n.layout, mt(() => {
          x(), y(), cc("resize", x.bind(this)), _t(n.layout, n.verticalCompact), t("update:layout", n.layout), d(), P.value && s.value.listenTo(P.value, x);
        });
      });
    }), (b, I) => (qt(), le("div", null, [
      oi("div", {
        ref_key: "wrapper",
        ref: P,
        class: "vue-grid-layout",
        style: Jn(f.value)
      }, [
        ii(ri(Fn, gn({ class: "vue-grid-placeholder" }, { ...Yt(E), ...m.value }), null, 16), [
          [si, a.value]
        ]),
        Oe(b.$slots, "default", {
          gridItemProps: { ...Yt(E) }
        }, () => [
          (qt(!0), le(ai, null, ci(e.layout, (N) => (qt(), li(Fn, gn({
            key: N.i
          }, { ...Yt(E), ...$(N) }, {
            onContainerResized: I[0] || (I[0] = (O) => t("container-resized", O)),
            onResize: I[1] || (I[1] = (O) => t("item-resize", O)),
            onMove: I[2] || (I[2] = (O) => t("item-move", O)),
            onMoved: I[3] || (I[3] = (O) => t("item-moved", O))
          }), {
            default: ui(() => [
              Oe(b.$slots, "gridItemContent", { item: N })
            ]),
            _: 2
          }, 1040))), 128))
        ])
      ], 4)
    ]));
  }
});
export {
  Fn as GridItem,
  dc as GridLayout,
  Bo as emitterKey
};
