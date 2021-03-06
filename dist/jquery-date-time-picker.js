!function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function (jQuery) {
  !function (e) {
    e(jQuery)
  }(function (e) {
    function t(t, s) {
      var a, n, r, o = t.nodeName.toLowerCase();
      return "area" === o ? (a = t.parentNode, n = a.name, t.href && n && "map" === a.nodeName.toLowerCase() ? (r = e("img[usemap='#" + n + "']")[0], !!r && i(r)) : !1) : (/^(input|select|textarea|button|object)$/.test(o) ? !t.disabled : "a" === o ? t.href || s : s) && i(t)
    }

    function i(t) {
      return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
          return "hidden" === e.css(this, "visibility")
        }).length
    }

    function s(e) {
      for (var t, i; e.length && e[0] !== document;) {
        if (t = e.css("position"), ("absolute" === t || "relative" === t || "fixed" === t) && (i = parseInt(e.css("zIndex"), 10), !isNaN(i) && 0 !== i))return i;
        e = e.parent()
      }
      return 0
    }

    function a() {
      this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
        closeText: "Done",
        prevText: "Prev",
        nextText: "Next",
        currentText: "Today",
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        weekHeader: "Wk",
        dateFormat: "mm/dd/yy",
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
      }, this._defaults = {
        showOn: "focus",
        showAnim: "fadeIn",
        showOptions: {},
        defaultDate: null,
        appendText: "",
        buttonText: "...",
        buttonImage: "",
        buttonImageOnly: !1,
        hideIfNoPrevNext: !1,
        navigationAsDateFormat: !1,
        gotoCurrent: !1,
        changeMonth: !1,
        changeYear: !1,
        yearRange: "c-10:c+10",
        showOtherMonths: !1,
        selectOtherMonths: !1,
        showWeek: !1,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: "+10",
        minDate: null,
        maxDate: null,
        duration: "fast",
        beforeShowDay: null,
        beforeShow: null,
        onSelect: null,
        onChangeMonthYear: null,
        onClose: null,
        numberOfMonths: 1,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        altField: "",
        altFormat: "",
        constrainInput: !0,
        showButtonPanel: !1,
        autoSize: !1,
        disabled: !1
      }, e.extend(this._defaults, this.regional[""]), this.regional.en = e.extend(!0, {}, this.regional[""]), this.regional["en-US"] = e.extend(!0, {}, this.regional.en), this.dpDiv = n(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function n(t) {
      var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
      return t.delegate(i, "mouseout", function () {
        e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover")
      }).delegate(i, "mouseover", r)
    }

    function r() {
      e.datepicker._isDisabledDatepicker(h.inline ? h.dpDiv.parent()[0] : h.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"))
    }

    function o(t, i) {
      e.extend(t, i);
      for (var s in i)null == i[s] && (t[s] = i[s]);
      return t
    }

    e.ui = e.ui || {}, e.extend(e.ui, {
      version: "1.11.4",
      keyCode: {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
      }
    }), e.fn.extend({
      scrollParent: function (t) {
        var i = this.css("position"), s = "absolute" === i, a = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/, n = this.parents().filter(function () {
          var t = e(this);
          return s && "static" === t.css("position") ? !1 : a.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
        }).eq(0);
        return "fixed" !== i && n.length ? n : e(this[0].ownerDocument || document)
      }, uniqueId: function () {
        var e = 0;
        return function () {
          return this.each(function () {
            this.id || (this.id = "ui-id-" + ++e)
          })
        }
      }(), removeUniqueId: function () {
        return this.each(function () {
          /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
        })
      }
    }), e.extend(e.expr[":"], {
      data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
        return function (i) {
          return !!e.data(i, t)
        }
      }) : function (t, i, s) {
        return !!e.data(t, s[3])
      }, focusable: function (i) {
        return t(i, !isNaN(e.attr(i, "tabindex")))
      }, tabbable: function (i) {
        var s = e.attr(i, "tabindex"), a = isNaN(s);
        return (a || s >= 0) && t(i, !a)
      }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (t, i) {
      function s(t, i, s, n) {
        return e.each(a, function () {
          i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), n && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
        }), i
      }

      var a = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"], n = i.toLowerCase(), r = {
        innerWidth: e.fn.innerWidth,
        innerHeight: e.fn.innerHeight,
        outerWidth: e.fn.outerWidth,
        outerHeight: e.fn.outerHeight
      };
      e.fn["inner" + i] = function (t) {
        return void 0 === t ? r["inner" + i].call(this) : this.each(function () {
          e(this).css(n, s(this, t) + "px")
        })
      }, e.fn["outer" + i] = function (t, a) {
        return "number" != typeof t ? r["outer" + i].call(this, t) : this.each(function () {
          e(this).css(n, s(this, t, !0, a) + "px")
        })
      }
    }), e.fn.addBack || (e.fn.addBack = function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
      return function (i) {
        return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
      }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
      focus: function (t) {
        return function (i, s) {
          return "number" == typeof i ? this.each(function () {
            var t = this;
            setTimeout(function () {
              e(t).focus(), s && s.call(t)
            }, i)
          }) : t.apply(this, arguments)
        }
      }(e.fn.focus), disableSelection: function () {
        var e = "onselectstart"in document.createElement("div") ? "selectstart" : "mousedown";
        return function () {
          return this.bind(e + ".ui-disableSelection", function (e) {
            e.preventDefault()
          })
        }
      }(), enableSelection: function () {
        return this.unbind(".ui-disableSelection")
      }, zIndex: function (t) {
        if (void 0 !== t)return this.css("zIndex", t);
        if (this.length)for (var i, s, a = e(this[0]); a.length && a[0] !== document;) {
          if (i = a.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(a.css("zIndex"), 10), !isNaN(s) && 0 !== s))return s;
          a = a.parent()
        }
        return 0
      }
    }), e.ui.plugin = {
      add: function (t, i, s) {
        var a, n = e.ui[t].prototype;
        for (a in s)n.plugins[a] = n.plugins[a] || [], n.plugins[a].push([i, s[a]])
      }, call: function (e, t, i, s) {
        var a, n = e.plugins[t];
        if (n && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))for (a = 0; a < n.length; a++)e.options[n[a][0]] && n[a][1].apply(e.element, i)
      }
    };
    var l = 0, u = Array.prototype.slice;
    e.cleanData = function (t) {
      return function (i) {
        var s, a, n;
        for (n = 0; null != (a = i[n]); n++)try {
          s = e._data(a, "events"), s && s.remove && e(a).triggerHandler("remove")
        } catch (r) {
        }
        t(i)
      }
    }(e.cleanData), e.widget = function (t, i, s) {
      var a, n, r, o, l = {}, u = t.split(".")[0];
      return t = t.split(".")[1], a = u + "-" + t, s || (s = i, i = e.Widget), e.expr[":"][a.toLowerCase()] = function (t) {
        return !!e.data(t, a)
      }, e[u] = e[u] || {}, n = e[u][t], r = e[u][t] = function (e, t) {
        return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new r(e, t)
      }, e.extend(r, n, {
        version: s.version,
        _proto: e.extend({}, s),
        _childConstructors: []
      }), o = new i, o.options = e.widget.extend({}, o.options), e.each(s, function (t, s) {
        return e.isFunction(s) ? void(l[t] = function () {
          var e = function () {
            return i.prototype[t].apply(this, arguments)
          }, a = function (e) {
            return i.prototype[t].apply(this, e)
          };
          return function () {
            var t, i = this._super, n = this._superApply;
            return this._super = e, this._superApply = a, t = s.apply(this, arguments), this._super = i, this._superApply = n, t
          }
        }()) : void(l[t] = s)
      }), r.prototype = e.widget.extend(o, {widgetEventPrefix: n ? o.widgetEventPrefix || t : t}, l, {
        constructor: r,
        namespace: u,
        widgetName: t,
        widgetFullName: a
      }), n ? (e.each(n._childConstructors, function (t, i) {
        var s = i.prototype;
        e.widget(s.namespace + "." + s.widgetName, r, i._proto)
      }), delete n._childConstructors) : i._childConstructors.push(r), e.widget.bridge(t, r), r
    }, e.widget.extend = function (t) {
      for (var i, s, a = u.call(arguments, 1), n = 0, r = a.length; r > n; n++)for (i in a[n])s = a[n][i], a[n].hasOwnProperty(i) && void 0 !== s && (e.isPlainObject(s) ? t[i] = e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : t[i] = s);
      return t
    }, e.widget.bridge = function (t, i) {
      var s = i.prototype.widgetFullName || t;
      e.fn[t] = function (a) {
        var n = "string" == typeof a, r = u.call(arguments, 1), o = this;
        return n ? this.each(function () {
          var i, n = e.data(this, s);
          return "instance" === a ? (o = n, !1) : n ? e.isFunction(n[a]) && "_" !== a.charAt(0) ? (i = n[a].apply(n, r), i !== n && void 0 !== i ? (o = i && i.jquery ? o.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + a + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + a + "'")
        }) : (r.length && (a = e.widget.extend.apply(null, [a].concat(r))), this.each(function () {
          var t = e.data(this, s);
          t ? (t.option(a || {}), t._init && t._init()) : e.data(this, s, new i(a, this))
        })), o
      }
    }, e.Widget = function () {
    }, e.Widget._childConstructors = [], e.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: {disabled: !1, create: null},
      _createWidget: function (t, i) {
        i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = l++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
          remove: function (e) {
            e.target === i && this.destroy()
          }
        }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
      },
      _getCreateOptions: e.noop,
      _getCreateEventData: e.noop,
      _create: e.noop,
      _init: e.noop,
      destroy: function () {
        this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
      },
      _destroy: e.noop,
      widget: function () {
        return this.element
      },
      option: function (t, i) {
        var s, a, n, r = t;
        if (0 === arguments.length)return e.widget.extend({}, this.options);
        if ("string" == typeof t)if (r = {}, s = t.split("."), t = s.shift(), s.length) {
          for (a = r[t] = e.widget.extend({}, this.options[t]), n = 0; n < s.length - 1; n++)a[s[n]] = a[s[n]] || {}, a = a[s[n]];
          if (t = s.pop(), 1 === arguments.length)return void 0 === a[t] ? null : a[t];
          a[t] = i
        } else {
          if (1 === arguments.length)return void 0 === this.options[t] ? null : this.options[t];
          r[t] = i
        }
        return this._setOptions(r), this
      },
      _setOptions: function (e) {
        var t;
        for (t in e)this._setOption(t, e[t]);
        return this
      },
      _setOption: function (e, t) {
        return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
      },
      enable: function () {
        return this._setOptions({disabled: !1})
      },
      disable: function () {
        return this._setOptions({disabled: !0})
      },
      _on: function (t, i, s) {
        var a, n = this;
        "boolean" != typeof t && (s = i, i = t, t = !1), s ? (i = a = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, a = this.widget()), e.each(s, function (s, r) {
          function o() {
            return t || n.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? n[r] : r).apply(n, arguments) : void 0
          }

          "string" != typeof r && (o.guid = r.guid = r.guid || o.guid || e.guid++);
          var l = s.match(/^([\w:-]*)\s*(.*)$/), u = l[1] + n.eventNamespace, c = l[2];
          c ? a.delegate(c, u, o) : i.bind(u, o)
        })
      },
      _off: function (t, i) {
        i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(i).undelegate(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
      },
      _delay: function (e, t) {
        function i() {
          return ("string" == typeof e ? s[e] : e).apply(s, arguments)
        }

        var s = this;
        return setTimeout(i, t || 0)
      },
      _hoverable: function (t) {
        this.hoverable = this.hoverable.add(t), this._on(t, {
          mouseenter: function (t) {
            e(t.currentTarget).addClass("ui-state-hover")
          }, mouseleave: function (t) {
            e(t.currentTarget).removeClass("ui-state-hover")
          }
        })
      },
      _focusable: function (t) {
        this.focusable = this.focusable.add(t), this._on(t, {
          focusin: function (t) {
            e(t.currentTarget).addClass("ui-state-focus")
          }, focusout: function (t) {
            e(t.currentTarget).removeClass("ui-state-focus")
          }
        })
      },
      _trigger: function (t, i, s) {
        var a, n, r = this.options[t];
        if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], n = i.originalEvent)for (a in n)a in i || (i[a] = n[a]);
        return this.element.trigger(i, s), !(e.isFunction(r) && r.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
      }
    }, e.each({show: "fadeIn", hide: "fadeOut"}, function (t, i) {
      e.Widget.prototype["_" + t] = function (s, a, n) {
        "string" == typeof a && (a = {effect: a});
        var r, o = a ? a === !0 || "number" == typeof a ? i : a.effect || i : t;
        a = a || {}, "number" == typeof a && (a = {duration: a}), r = !e.isEmptyObject(a), a.complete = n, a.delay && s.delay(a.delay), r && e.effects && e.effects.effect[o] ? s[t](a) : o !== t && s[o] ? s[o](a.duration, a.easing, n) : s.queue(function (i) {
          e(this)[t](), n && n.call(s[0]), i()
        })
      }
    });
    var c = (e.widget, !1);
    e(document).mouseup(function () {
      c = !1
    });
    e.widget("ui.mouse", {
      version: "1.11.4",
      options: {cancel: "input,textarea,button,select,option", distance: 1, delay: 0},
      _mouseInit: function () {
        var t = this;
        this.element.bind("mousedown." + this.widgetName, function (e) {
          return t._mouseDown(e)
        }).bind("click." + this.widgetName, function (i) {
          return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
        }), this.started = !1
      },
      _mouseDestroy: function () {
        this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
      },
      _mouseDown: function (t) {
        if (!c) {
          this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
          var i = this, s = 1 === t.which, a = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
          return s && !a && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
            i.mouseDelayMet = !0
          }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
            return i._mouseMove(e)
          }, this._mouseUpDelegate = function (e) {
            return i._mouseUp(e)
          }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), c = !0, !0)) : !0
        }
      },
      _mouseMove: function (t) {
        if (this._mouseMoved) {
          if (e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button)return this._mouseUp(t);
          if (!t.which)return this._mouseUp(t)
        }
        return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
      },
      _mouseUp: function (t) {
        return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), c = !1, !1
      },
      _mouseDistanceMet: function (e) {
        return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
      },
      _mouseDelayMet: function () {
        return this.mouseDelayMet
      },
      _mouseStart: function () {
      },
      _mouseDrag: function () {
      },
      _mouseStop: function () {
      },
      _mouseCapture: function () {
        return !0
      }
    });
    !function () {
      function t(e, t, i) {
        return [parseFloat(e[0]) * (p.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (p.test(e[1]) ? i / 100 : 1)]
      }

      function i(t, i) {
        return parseInt(e.css(t, i), 10) || 0
      }

      function s(t) {
        var i = t[0];
        return 9 === i.nodeType ? {
          width: t.width(),
          height: t.height(),
          offset: {top: 0, left: 0}
        } : e.isWindow(i) ? {
          width: t.width(),
          height: t.height(),
          offset: {top: t.scrollTop(), left: t.scrollLeft()}
        } : i.preventDefault ? {width: 0, height: 0, offset: {top: i.pageY, left: i.pageX}} : {
          width: t.outerWidth(),
          height: t.outerHeight(),
          offset: t.offset()
        }
      }

      e.ui = e.ui || {};
      var a, n, r = Math.max, o = Math.abs, l = Math.round, u = /left|center|right/, c = /top|center|bottom/, h = /[\+\-]\d+(\.[\d]+)?%?/, d = /^\w+/, p = /%$/, m = e.fn.position;
      e.position = {
        scrollbarWidth: function () {
          if (void 0 !== a)return a;
          var t, i, s = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), n = s.children()[0];
          return e("body").append(s), t = n.offsetWidth, s.css("overflow", "scroll"), i = n.offsetWidth, t === i && (i = s[0].clientWidth), s.remove(), a = t - i
        }, getScrollInfo: function (t) {
          var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"), s = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"), a = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth, n = "scroll" === s || "auto" === s && t.height < t.element[0].scrollHeight;
          return {width: n ? e.position.scrollbarWidth() : 0, height: a ? e.position.scrollbarWidth() : 0}
        }, getWithinInfo: function (t) {
          var i = e(t || window), s = e.isWindow(i[0]), a = !!i[0] && 9 === i[0].nodeType;
          return {
            element: i,
            isWindow: s,
            isDocument: a,
            offset: i.offset() || {left: 0, top: 0},
            scrollLeft: i.scrollLeft(),
            scrollTop: i.scrollTop(),
            width: s || a ? i.width() : i.outerWidth(),
            height: s || a ? i.height() : i.outerHeight()
          }
        }
      }, e.fn.position = function (a) {
        if (!a || !a.of)return m.apply(this, arguments);
        a = e.extend({}, a);
        var p, f, _, g, v, k, D = e(a.of), M = e.position.getWithinInfo(a.within), y = e.position.getScrollInfo(M), x = (a.collision || "flip").split(" "), w = {};
        return k = s(D), D[0].preventDefault && (a.at = "left top"), f = k.width, _ = k.height, g = k.offset, v = e.extend({}, g), e.each(["my", "at"], function () {
          var e, t, i = (a[this] || "").split(" ");
          1 === i.length && (i = u.test(i[0]) ? i.concat(["center"]) : c.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = u.test(i[0]) ? i[0] : "center", i[1] = c.test(i[1]) ? i[1] : "center", e = h.exec(i[0]), t = h.exec(i[1]), w[this] = [e ? e[0] : 0, t ? t[0] : 0], a[this] = [d.exec(i[0])[0], d.exec(i[1])[0]]
        }), 1 === x.length && (x[1] = x[0]), "right" === a.at[0] ? v.left += f : "center" === a.at[0] && (v.left += f / 2), "bottom" === a.at[1] ? v.top += _ : "center" === a.at[1] && (v.top += _ / 2), p = t(w.at, f, _), v.left += p[0], v.top += p[1], this.each(function () {
          var s, u, c = e(this), h = c.outerWidth(), d = c.outerHeight(), m = i(this, "marginLeft"), k = i(this, "marginTop"), b = h + m + i(this, "marginRight") + y.width, T = d + k + i(this, "marginBottom") + y.height, $ = e.extend({}, v), C = t(w.my, c.outerWidth(), c.outerHeight());
          "right" === a.my[0] ? $.left -= h : "center" === a.my[0] && ($.left -= h / 2), "bottom" === a.my[1] ? $.top -= d : "center" === a.my[1] && ($.top -= d / 2), $.left += C[0], $.top += C[1], n || ($.left = l($.left), $.top = l($.top)), s = {
            marginLeft: m,
            marginTop: k
          }, e.each(["left", "top"], function (t, i) {
            e.ui.position[x[t]] && e.ui.position[x[t]][i]($, {
              targetWidth: f,
              targetHeight: _,
              elemWidth: h,
              elemHeight: d,
              collisionPosition: s,
              collisionWidth: b,
              collisionHeight: T,
              offset: [p[0] + C[0], p[1] + C[1]],
              my: a.my,
              at: a.at,
              within: M,
              elem: c
            })
          }), a.using && (u = function (e) {
            var t = g.left - $.left, i = t + f - h, s = g.top - $.top, n = s + _ - d, l = {
              target: {
                element: D,
                left: g.left,
                top: g.top,
                width: f,
                height: _
              },
              element: {element: c, left: $.left, top: $.top, width: h, height: d},
              horizontal: 0 > i ? "left" : t > 0 ? "right" : "center",
              vertical: 0 > n ? "top" : s > 0 ? "bottom" : "middle"
            };
            h > f && o(t + i) < f && (l.horizontal = "center"), d > _ && o(s + n) < _ && (l.vertical = "middle"), r(o(t), o(i)) > r(o(s), o(n)) ? l.important = "horizontal" : l.important = "vertical", a.using.call(this, e, l)
          }), c.offset(e.extend($, {using: u}))
        })
      }, e.ui.position = {
        fit: {
          left: function (e, t) {
            var i, s = t.within, a = s.isWindow ? s.scrollLeft : s.offset.left, n = s.width, o = e.left - t.collisionPosition.marginLeft, l = a - o, u = o + t.collisionWidth - n - a;
            t.collisionWidth > n ? l > 0 && 0 >= u ? (i = e.left + l + t.collisionWidth - n - a, e.left += l - i) : u > 0 && 0 >= l ? e.left = a : l > u ? e.left = a + n - t.collisionWidth : e.left = a : l > 0 ? e.left += l : u > 0 ? e.left -= u : e.left = r(e.left - o, e.left)
          }, top: function (e, t) {
            var i, s = t.within, a = s.isWindow ? s.scrollTop : s.offset.top, n = t.within.height, o = e.top - t.collisionPosition.marginTop, l = a - o, u = o + t.collisionHeight - n - a;
            t.collisionHeight > n ? l > 0 && 0 >= u ? (i = e.top + l + t.collisionHeight - n - a, e.top += l - i) : u > 0 && 0 >= l ? e.top = a : l > u ? e.top = a + n - t.collisionHeight : e.top = a : l > 0 ? e.top += l : u > 0 ? e.top -= u : e.top = r(e.top - o, e.top)
          }
        }, flip: {
          left: function (e, t) {
            var i, s, a = t.within, n = a.offset.left + a.scrollLeft, r = a.width, l = a.isWindow ? a.scrollLeft : a.offset.left, u = e.left - t.collisionPosition.marginLeft, c = u - l, h = u + t.collisionWidth - r - l, d = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0, p = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0, m = -2 * t.offset[0];
            0 > c ? (i = e.left + d + p + m + t.collisionWidth - r - n, (0 > i || i < o(c)) && (e.left += d + p + m)) : h > 0 && (s = e.left - t.collisionPosition.marginLeft + d + p + m - l, (s > 0 || o(s) < h) && (e.left += d + p + m))
          }, top: function (e, t) {
            var i, s, a = t.within, n = a.offset.top + a.scrollTop, r = a.height, l = a.isWindow ? a.scrollTop : a.offset.top, u = e.top - t.collisionPosition.marginTop, c = u - l, h = u + t.collisionHeight - r - l, d = "top" === t.my[1], p = d ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0, m = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0, f = -2 * t.offset[1];
            0 > c ? (s = e.top + p + m + f + t.collisionHeight - r - n, (0 > s || s < o(c)) && (e.top += p + m + f)) : h > 0 && (i = e.top - t.collisionPosition.marginTop + p + m + f - l, (i > 0 || o(i) < h) && (e.top += p + m + f))
          }
        }, flipfit: {
          left: function () {
            e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
          }, top: function () {
            e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
          }
        }
      }, function () {
        var t, i, s, a, r, o = document.getElementsByTagName("body")[0], l = document.createElement("div");
        t = document.createElement(o ? "div" : "body"), s = {
          visibility: "hidden",
          width: 0,
          height: 0,
          border: 0,
          margin: 0,
          background: "none"
        }, o && e.extend(s, {position: "absolute", left: "-1000px", top: "-1000px"});
        for (r in s)t.style[r] = s[r];
        t.appendChild(l), i = o || document.documentElement, i.insertBefore(t, i.firstChild), l.style.cssText = "position: absolute; left: 10.7432222px;", a = e(l).offset().left, n = a > 10 && 11 > a, t.innerHTML = "", i.removeChild(t)
      }()
    }();
    e.ui.position;
    e.extend(e.ui, {datepicker: {version: "1.11.4"}});
    var h;
    e.extend(a.prototype, {
      markerClassName: "hasDatepicker",
      maxRows: 4,
      _widgetDatepicker: function () {
        return this.dpDiv
      },
      setDefaults: function (e) {
        return o(this._defaults, e || {}), this
      },
      _attachDatepicker: function (t, i) {
        var s, a, n;
        s = t.nodeName.toLowerCase(), a = "div" === s || "span" === s, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), n = this._newInst(e(t), a), n.settings = e.extend({}, i || {}), "input" === s ? this._connectDatepicker(t, n) : a && this._inlineDatepicker(t, n)
      },
      _newInst: function (t, i) {
        var s = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
        return {
          id: s,
          input: t,
          selectedDay: 0,
          selectedMonth: 0,
          selectedYear: 0,
          drawMonth: 0,
          drawYear: 0,
          inline: i,
          dpDiv: i ? n(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
        }
      },
      _connectDatepicker: function (t, i) {
        var s = e(t);
        i.append = e([]), i.trigger = e([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), e.data(t, "datepicker", i), i.settings.disabled && this._disableDatepicker(t))
      },
      _attachments: function (t, i) {
        var s, a, n, r = this._get(i, "appendText"), o = this._get(i, "isRTL");
        i.append && i.append.remove(), r && (i.append = e("<span class='" + this._appendClass + "'>" + r + "</span>"), t[o ? "before" : "after"](i.append)), t.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), "focus" !== s && "both" !== s || t.focus(this._showDatepicker), "button" !== s && "both" !== s || (a = this._get(i, "buttonText"), n = this._get(i, "buttonImage"), i.trigger = e(this._get(i, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
          src: n,
          alt: a,
          title: a
        }) : e("<button type='button'></button>").addClass(this._triggerClass).html(n ? e("<img/>").attr({
          src: n,
          alt: a,
          title: a
        }) : a)), t[o ? "before" : "after"](i.trigger), i.trigger.click(function () {
          return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
        }))
      },
      _autoSize: function (e) {
        if (this._get(e, "autoSize") && !e.inline) {
          var t, i, s, a, n = new Date(2009, 11, 20), r = this._get(e, "dateFormat");
          r.match(/[DM]/) && (t = function (e) {
            for (i = 0, s = 0, a = 0; a < e.length; a++)e[a].length > i && (i = e[a].length, s = a);
            return s
          }, n.setMonth(t(this._get(e, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), n.setDate(t(this._get(e, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - n.getDay())), e.input.attr("size", this._formatDate(e, n).length)
        }
      },
      _inlineDatepicker: function (t, i) {
        var s = e(t);
        s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), e.data(t, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block"))
      },
      _dialogDatepicker: function (t, i, s, a, n) {
        var r, l, u, c, h, d = this._dialogInst;
        return d || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, e.data(this._dialogInput[0], "datepicker", d)), o(d.settings, a || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = n ? n.length ? n : [n.pageX, n.pageY] : null, this._pos || (l = document.documentElement.clientWidth, u = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, h = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + c, u / 2 - 150 + h]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], "datepicker", d), this
      },
      _destroyDatepicker: function (t) {
        var i, s = e(t), a = e.data(t, "datepicker");
        s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), e.removeData(t, "datepicker"), "input" === i ? (a.append.remove(), a.trigger.remove(), s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : "div" !== i && "span" !== i || s.removeClass(this.markerClassName).empty(), h === a && (h = null))
      },
      _enableDatepicker: function (t) {
        var i, s, a = e(t), n = e.data(t, "datepicker");
        a.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !1, n.trigger.filter("button").each(function () {
          this.disabled = !1
        }).end().filter("img").css({
          opacity: "1.0",
          cursor: ""
        })) : "div" !== i && "span" !== i || (s = a.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
          return e === t ? null : e
        }))
      },
      _disableDatepicker: function (t) {
        var i, s, a = e(t), n = e.data(t, "datepicker");
        a.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !0, n.trigger.filter("button").each(function () {
          this.disabled = !0
        }).end().filter("img").css({
          opacity: "0.5",
          cursor: "default"
        })) : "div" !== i && "span" !== i || (s = a.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
          return e === t ? null : e
        }), this._disabledInputs[this._disabledInputs.length] = t)
      },
      _isDisabledDatepicker: function (e) {
        if (!e)return !1;
        for (var t = 0; t < this._disabledInputs.length; t++)if (this._disabledInputs[t] === e)return !0;
        return !1
      },
      _getInst: function (t) {
        try {
          return e.data(t, "datepicker")
        } catch (i) {
          throw"Missing instance data for this datepicker"
        }
      },
      _optionDatepicker: function (t, i, s) {
        var a, n, r, l, u = this._getInst(t);
        return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? e.extend({}, e.datepicker._defaults) : u ? "all" === i ? e.extend({}, u.settings) : this._get(u, i) : null : (a = i || {}, "string" == typeof i && (a = {}, a[i] = s), void(u && (this._curInst === u && this._hideDatepicker(), n = this._getDateDatepicker(t, !0), r = this._getMinMaxDate(u, "min"), l = this._getMinMaxDate(u, "max"), o(u.settings, a), null !== r && void 0 !== a.dateFormat && void 0 === a.minDate && (u.settings.minDate = this._formatDate(u, r)), null !== l && void 0 !== a.dateFormat && void 0 === a.maxDate && (u.settings.maxDate = this._formatDate(u, l)), "disabled"in a && (a.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(e(t), u), this._autoSize(u), this._setDate(u, n), this._updateAlternate(u), this._updateDatepicker(u))))
      },
      _changeDatepicker: function (e, t, i) {
        this._optionDatepicker(e, t, i)
      },
      _refreshDatepicker: function (e) {
        var t = this._getInst(e);
        t && this._updateDatepicker(t)
      },
      _setDateDatepicker: function (e, t) {
        var i = this._getInst(e);
        i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
      },
      _getDateDatepicker: function (e, t) {
        var i = this._getInst(e);
        return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
      },
      _doKeyDown: function (t) {
        var i, s, a, n = e.datepicker._getInst(t.target), r = !0, o = n.dpDiv.is(".ui-datepicker-rtl");
        if (n._keyEvent = !0, e.datepicker._datepickerShowing)switch (t.keyCode) {
          case 9:
            e.datepicker._hideDatepicker(), r = !1;
            break;
          case 13:
            return a = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", n.dpDiv), a[0] && e.datepicker._selectDay(t.target, n.selectedMonth, n.selectedYear, a[0]), i = e.datepicker._get(n, "onSelect"), i ? (s = e.datepicker._formatDate(n), i.apply(n.input ? n.input[0] : null, [s, n])) : e.datepicker._hideDatepicker(), !1;
          case 27:
            e.datepicker._hideDatepicker();
            break;
          case 33:
            e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(n, "stepBigMonths") : -e.datepicker._get(n, "stepMonths"), "M");
            break;
          case 34:
            e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(n, "stepBigMonths") : +e.datepicker._get(n, "stepMonths"), "M");
            break;
          case 35:
            (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), r = t.ctrlKey || t.metaKey;
            break;
          case 36:
            (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), r = t.ctrlKey || t.metaKey;
            break;
          case 37:
            (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? 1 : -1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(n, "stepBigMonths") : -e.datepicker._get(n, "stepMonths"), "M");
            break;
          case 38:
            (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), r = t.ctrlKey || t.metaKey;
            break;
          case 39:
            (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? -1 : 1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(n, "stepBigMonths") : +e.datepicker._get(n, "stepMonths"), "M");
            break;
          case 40:
            (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), r = t.ctrlKey || t.metaKey;
            break;
          default:
            r = !1
        } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : r = !1;
        r && (t.preventDefault(), t.stopPropagation())
      },
      _doKeyPress: function (t) {
        var i, s, a = e.datepicker._getInst(t.target);
        return e.datepicker._get(a, "constrainInput") ? (i = e.datepicker._possibleChars(e.datepicker._get(a, "dateFormat")), s = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0
      },
      _doKeyUp: function (t) {
        var i, s = e.datepicker._getInst(t.target);
        if (s.input.val() !== s.lastVal)try {
          i = e.datepicker.parseDate(e.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, e.datepicker._getFormatConfig(s)),
          i && (e.datepicker._setDateFromField(s), e.datepicker._updateAlternate(s), e.datepicker._updateDatepicker(s))
        } catch (a) {
        }
        return !0
      },
      _showDatepicker: function (t) {
        if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
          var i, a, n, r, l, u, c;
          i = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), a = e.datepicker._get(i, "beforeShow"), n = a ? a.apply(t, [t, i]) : {}, n !== !1 && (o(i.settings, n), i.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(i), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), r = !1, e(t).parents().each(function () {
            return r |= "fixed" === e(this).css("position"), !r
          }), l = {
            left: e.datepicker._pos[0],
            top: e.datepicker._pos[1]
          }, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
            position: "absolute",
            display: "block",
            top: "-1000px"
          }), e.datepicker._updateDatepicker(i), l = e.datepicker._checkOffset(i, l, r), i.dpDiv.css({
            position: e.datepicker._inDialog && e.blockUI ? "static" : r ? "fixed" : "absolute",
            display: "none",
            left: l.left + "px",
            top: l.top + "px"
          }), i.inline || (u = e.datepicker._get(i, "showAnim"), c = e.datepicker._get(i, "duration"), i.dpDiv.css("z-index", s(e(t)) + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[u] ? i.dpDiv.show(u, e.datepicker._get(i, "showOptions"), c) : i.dpDiv[u || "show"](u ? c : null), e.datepicker._shouldFocusInput(i) && i.input.focus(), e.datepicker._curInst = i))
        }
      },
      _updateDatepicker: function (t) {
        this.maxRows = 4, h = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
        var i, s = this._getNumberOfMonths(t), a = s[1], n = 17, o = t.dpDiv.find("." + this._dayOverClass + " a");
        o.length > 0 && r.apply(o.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), a > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + a).css("width", n * a + "em"), t.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (i = t.yearshtml, setTimeout(function () {
          i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), i = t.yearshtml = null
        }, 0))
      },
      _shouldFocusInput: function (e) {
        return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
      },
      _checkOffset: function (t, i, s) {
        var a = t.dpDiv.outerWidth(), n = t.dpDiv.outerHeight(), r = t.input ? t.input.outerWidth() : 0, o = t.input ? t.input.outerHeight() : 0, l = document.documentElement.clientWidth + (s ? 0 : e(document).scrollLeft()), u = document.documentElement.clientHeight + (s ? 0 : e(document).scrollTop());
        return i.left -= this._get(t, "isRTL") ? a - r : 0, i.left -= s && i.left === t.input.offset().left ? e(document).scrollLeft() : 0, i.top -= s && i.top === t.input.offset().top + o ? e(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + a > l && l > a ? Math.abs(i.left + a - l) : 0), i.top -= Math.min(i.top, i.top + n > u && u > n ? Math.abs(n + o) : 0), i
      },
      _findPos: function (t) {
        for (var i, s = this._getInst(t), a = this._get(s, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));)t = t[a ? "previousSibling" : "nextSibling"];
        return i = e(t).offset(), [i.left, i.top]
      },
      _hideDatepicker: function (t) {
        var i, s, a, n, r = this._curInst;
        !r || t && r !== e.data(t, "datepicker") || this._datepickerShowing && (i = this._get(r, "showAnim"), s = this._get(r, "duration"), a = function () {
          e.datepicker._tidyDialog(r)
        }, e.effects && (e.effects.effect[i] || e.effects[i]) ? r.dpDiv.hide(i, e.datepicker._get(r, "showOptions"), s, a) : r.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, a), i || a(), this._datepickerShowing = !1, n = this._get(r, "onClose"), n && n.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
          position: "absolute",
          left: "0",
          top: "-100px"
        }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
      },
      _tidyDialog: function (e) {
        e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
      },
      _checkExternalClick: function (t) {
        if (e.datepicker._curInst) {
          var i = e(t.target), s = e.datepicker._getInst(i[0]);
          (i[0].id === e.datepicker._mainDivId || 0 !== i.parents("#" + e.datepicker._mainDivId).length || i.hasClass(e.datepicker.markerClassName) || i.closest("." + e.datepicker._triggerClass).length || !e.datepicker._datepickerShowing || e.datepicker._inDialog && e.blockUI) && (!i.hasClass(e.datepicker.markerClassName) || e.datepicker._curInst === s) || e.datepicker._hideDatepicker()
        }
      },
      _adjustDate: function (t, i, s) {
        var a = e(t), n = this._getInst(a[0]);
        this._isDisabledDatepicker(a[0]) || (this._adjustInstDate(n, i + ("M" === s ? this._get(n, "showCurrentAtPos") : 0), s), this._updateDatepicker(n))
      },
      _gotoToday: function (t) {
        var i, s = e(t), a = this._getInst(s[0]);
        this._get(a, "gotoCurrent") && a.currentDay ? (a.selectedDay = a.currentDay, a.drawMonth = a.selectedMonth = a.currentMonth, a.drawYear = a.selectedYear = a.currentYear) : (i = new Date, a.selectedDay = i.getDate(), a.drawMonth = a.selectedMonth = i.getMonth(), a.drawYear = a.selectedYear = i.getFullYear()), this._notifyChange(a), this._adjustDate(s)
      },
      _selectMonthYear: function (t, i, s) {
        var a = e(t), n = this._getInst(a[0]);
        n["selected" + ("M" === s ? "Month" : "Year")] = n["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(n), this._adjustDate(a)
      },
      _selectDay: function (t, i, s, a) {
        var n, r = e(t);
        e(a).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (n = this._getInst(r[0]), n.selectedDay = n.currentDay = e("a", a).html(), n.selectedMonth = n.currentMonth = i, n.selectedYear = n.currentYear = s, this._selectDate(t, this._formatDate(n, n.currentDay, n.currentMonth, n.currentYear)))
      },
      _clearDate: function (t) {
        var i = e(t);
        this._selectDate(i, "")
      },
      _selectDate: function (t, i) {
        var s, a = e(t), n = this._getInst(a[0]);
        i = null != i ? i : this._formatDate(n), n.input && n.input.val(i), this._updateAlternate(n), s = this._get(n, "onSelect"), s ? s.apply(n.input ? n.input[0] : null, [i, n]) : n.input && n.input.trigger("change"), n.inline ? this._updateDatepicker(n) : (this._hideDatepicker(), this._lastInput = n.input[0], "object" != typeof n.input[0] && n.input.focus(), this._lastInput = null)
      },
      _updateAlternate: function (t) {
        var i, s, a, n = this._get(t, "altField");
        n && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), s = this._getDate(t), a = this.formatDate(i, s, this._getFormatConfig(t)), e(n).each(function () {
          e(this).val(a)
        }))
      },
      noWeekends: function (e) {
        var t = e.getDay();
        return [t > 0 && 6 > t, ""]
      },
      iso8601Week: function (e) {
        var t, i = new Date(e.getTime());
        return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), t = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((t - i) / 864e5) / 7) + 1
      },
      parseDate: function (t, i, s) {
        if (null == t || null == i)throw"Invalid arguments";
        if (i = "object" == typeof i ? i.toString() : i + "", "" === i)return null;
        var a, n, r, o, l = 0, u = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff, c = "string" != typeof u ? u : (new Date).getFullYear() % 100 + parseInt(u, 10), h = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort, d = (s ? s.dayNames : null) || this._defaults.dayNames, p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort, m = (s ? s.monthNames : null) || this._defaults.monthNames, f = -1, _ = -1, g = -1, v = -1, k = !1, D = function (e) {
          var i = a + 1 < t.length && t.charAt(a + 1) === e;
          return i && a++, i
        }, M = function (e) {
          var t = D(e), s = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2, a = "y" === e ? s : 1, n = new RegExp("^\\d{" + a + "," + s + "}"), r = i.substring(l).match(n);
          if (!r)throw"Missing number at position " + l;
          return l += r[0].length, parseInt(r[0], 10)
        }, y = function (t, s, a) {
          var n = -1, r = e.map(D(t) ? a : s, function (e, t) {
            return [[t, e]]
          }).sort(function (e, t) {
            return -(e[1].length - t[1].length)
          });
          if (e.each(r, function (e, t) {
              var s = t[1];
              return i.substr(l, s.length).toLowerCase() === s.toLowerCase() ? (n = t[0], l += s.length, !1) : void 0
            }), -1 !== n)return n + 1;
          throw"Unknown name at position " + l
        }, x = function () {
          if (i.charAt(l) !== t.charAt(a))throw"Unexpected literal at position " + l;
          l++
        };
        for (a = 0; a < t.length; a++)if (k)"'" !== t.charAt(a) || D("'") ? x() : k = !1; else switch (t.charAt(a)) {
          case"d":
            g = M("d");
            break;
          case"D":
            y("D", h, d);
            break;
          case"o":
            v = M("o");
            break;
          case"m":
            _ = M("m");
            break;
          case"M":
            _ = y("M", p, m);
            break;
          case"y":
            f = M("y");
            break;
          case"@":
            o = new Date(M("@")), f = o.getFullYear(), _ = o.getMonth() + 1, g = o.getDate();
            break;
          case"!":
            o = new Date((M("!") - this._ticksTo1970) / 1e4), f = o.getFullYear(), _ = o.getMonth() + 1, g = o.getDate();
            break;
          case"'":
            D("'") ? x() : k = !0;
            break;
          default:
            x()
        }
        if (l < i.length && (r = i.substr(l), !/^\s+/.test(r)))throw"Extra/unparsed characters found in date: " + r;
        if (-1 === f ? f = (new Date).getFullYear() : 100 > f && (f += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c >= f ? 0 : -100)), v > -1)for (_ = 1, g = v; ;) {
          if (n = this._getDaysInMonth(f, _ - 1), n >= g)break;
          _++, g -= n
        }
        if (o = this._daylightSavingAdjust(new Date(f, _ - 1, g)), o.getFullYear() !== f || o.getMonth() + 1 !== _ || o.getDate() !== g)throw"Invalid date";
        return o
      },
      ATOM: "yy-mm-dd",
      COOKIE: "D, dd M yy",
      ISO_8601: "yy-mm-dd",
      RFC_822: "D, d M y",
      RFC_850: "DD, dd-M-y",
      RFC_1036: "D, d M y",
      RFC_1123: "D, d M yy",
      RFC_2822: "D, d M yy",
      RSS: "D, d M y",
      TICKS: "!",
      TIMESTAMP: "@",
      W3C: "yy-mm-dd",
      _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
      formatDate: function (e, t, i) {
        if (!t)return "";
        var s, a = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, n = (i ? i.dayNames : null) || this._defaults.dayNames, r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, o = (i ? i.monthNames : null) || this._defaults.monthNames, l = function (t) {
          var i = s + 1 < e.length && e.charAt(s + 1) === t;
          return i && s++, i
        }, u = function (e, t, i) {
          var s = "" + t;
          if (l(e))for (; s.length < i;)s = "0" + s;
          return s
        }, c = function (e, t, i, s) {
          return l(e) ? s[t] : i[t]
        }, h = "", d = !1;
        if (t)for (s = 0; s < e.length; s++)if (d)"'" !== e.charAt(s) || l("'") ? h += e.charAt(s) : d = !1; else switch (e.charAt(s)) {
          case"d":
            h += u("d", t.getDate(), 2);
            break;
          case"D":
            h += c("D", t.getDay(), a, n);
            break;
          case"o":
            h += u("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
            break;
          case"m":
            h += u("m", t.getMonth() + 1, 2);
            break;
          case"M":
            h += c("M", t.getMonth(), r, o);
            break;
          case"y":
            h += l("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
            break;
          case"@":
            h += t.getTime();
            break;
          case"!":
            h += 1e4 * t.getTime() + this._ticksTo1970;
            break;
          case"'":
            l("'") ? h += "'" : d = !0;
            break;
          default:
            h += e.charAt(s)
        }
        return h
      },
      _possibleChars: function (e) {
        var t, i = "", s = !1, a = function (i) {
          var s = t + 1 < e.length && e.charAt(t + 1) === i;
          return s && t++, s
        };
        for (t = 0; t < e.length; t++)if (s)"'" !== e.charAt(t) || a("'") ? i += e.charAt(t) : s = !1; else switch (e.charAt(t)) {
          case"d":
          case"m":
          case"y":
          case"@":
            i += "0123456789";
            break;
          case"D":
          case"M":
            return null;
          case"'":
            a("'") ? i += "'" : s = !0;
            break;
          default:
            i += e.charAt(t)
        }
        return i
      },
      _get: function (e, t) {
        return void 0 !== e.settings[t] ? e.settings[t] : this._defaults[t]
      },
      _setDateFromField: function (e, t) {
        if (e.input.val() !== e.lastVal) {
          var i = this._get(e, "dateFormat"), s = e.lastVal = e.input ? e.input.val() : null, a = this._getDefaultDate(e), n = a, r = this._getFormatConfig(e);
          try {
            n = this.parseDate(i, s, r) || a
          } catch (o) {
            s = t ? "" : s
          }
          e.selectedDay = n.getDate(), e.drawMonth = e.selectedMonth = n.getMonth(), e.drawYear = e.selectedYear = n.getFullYear(), e.currentDay = s ? n.getDate() : 0, e.currentMonth = s ? n.getMonth() : 0, e.currentYear = s ? n.getFullYear() : 0, this._adjustInstDate(e)
        }
      },
      _getDefaultDate: function (e) {
        return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
      },
      _determineDate: function (t, i, s) {
        var a = function (e) {
          var t = new Date;
          return t.setDate(t.getDate() + e), t
        }, n = function (i) {
          try {
            return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), i, e.datepicker._getFormatConfig(t))
          } catch (s) {
          }
          for (var a = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, n = a.getFullYear(), r = a.getMonth(), o = a.getDate(), l = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, u = l.exec(i); u;) {
            switch (u[2] || "d") {
              case"d":
              case"D":
                o += parseInt(u[1], 10);
                break;
              case"w":
              case"W":
                o += 7 * parseInt(u[1], 10);
                break;
              case"m":
              case"M":
                r += parseInt(u[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(n, r));
                break;
              case"y":
              case"Y":
                n += parseInt(u[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(n, r))
            }
            u = l.exec(i)
          }
          return new Date(n, r, o)
        }, r = null == i || "" === i ? s : "string" == typeof i ? n(i) : "number" == typeof i ? isNaN(i) ? s : a(i) : new Date(i.getTime());
        return r = r && "Invalid Date" === r.toString() ? s : r, r && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)), this._daylightSavingAdjust(r)
      },
      _daylightSavingAdjust: function (e) {
        return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
      },
      _setDate: function (e, t, i) {
        var s = !t, a = e.selectedMonth, n = e.selectedYear, r = this._restrictMinMax(e, this._determineDate(e, t, new Date));
        e.selectedDay = e.currentDay = r.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = r.getMonth(), e.drawYear = e.selectedYear = e.currentYear = r.getFullYear(), a === e.selectedMonth && n === e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(s ? "" : this._formatDate(e))
      },
      _getDate: function (e) {
        var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
        return t
      },
      _attachHandlers: function (t) {
        var i = this._get(t, "stepMonths"), s = "#" + t.id.replace(/\\\\/g, "\\");
        t.dpDiv.find("[data-handler]").map(function () {
          var t = {
            prev: function () {
              e.datepicker._adjustDate(s, -i, "M")
            }, next: function () {
              e.datepicker._adjustDate(s, +i, "M")
            }, hide: function () {
              e.datepicker._hideDatepicker()
            }, today: function () {
              e.datepicker._gotoToday(s)
            }, selectDay: function () {
              return e.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
            }, selectMonth: function () {
              return e.datepicker._selectMonthYear(s, this, "M"), !1
            }, selectYear: function () {
              return e.datepicker._selectMonthYear(s, this, "Y"), !1
            }
          };
          e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
        })
      },
      _generateHTML: function (e) {
        var t, i, s, a, n, r, o, l, u, c, h, d, p, m, f, _, g, v, k, D, M, y, x, w, b, T, $, C, O, I, S, N, F, z, A, j, Y, H, E, L = new Date, W = this._daylightSavingAdjust(new Date(L.getFullYear(), L.getMonth(), L.getDate())), P = this._get(e, "isRTL"), R = this._get(e, "showButtonPanel"), K = this._get(e, "hideIfNoPrevNext"), U = this._get(e, "navigationAsDateFormat"), V = this._getNumberOfMonths(e), B = this._get(e, "showCurrentAtPos"), G = this._get(e, "stepMonths"), q = 1 !== V[0] || 1 !== V[1], Z = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)), X = this._getMinMaxDate(e, "min"), J = this._getMinMaxDate(e, "max"), Q = e.drawMonth - B, ee = e.drawYear;
        if (0 > Q && (Q += 12, ee--), J)for (t = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - V[0] * V[1] + 1, J.getDate())), t = X && X > t ? X : t; this._daylightSavingAdjust(new Date(ee, Q, 1)) > t;)Q--, 0 > Q && (Q = 11, ee--);
        for (e.drawMonth = Q, e.drawYear = ee, i = this._get(e, "prevText"), i = U ? this.formatDate(i, this._daylightSavingAdjust(new Date(ee, Q - G, 1)), this._getFormatConfig(e)) : i, s = this._canAdjustMonth(e, -1, ee, Q) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (P ? "e" : "w") + "'>" + i + "</span></a>" : K ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (P ? "e" : "w") + "'>" + i + "</span></a>", a = this._get(e, "nextText"), a = U ? this.formatDate(a, this._daylightSavingAdjust(new Date(ee, Q + G, 1)), this._getFormatConfig(e)) : a, n = this._canAdjustMonth(e, 1, ee, Q) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + a + "'><span class='ui-icon ui-icon-circle-triangle-" + (P ? "w" : "e") + "'>" + a + "</span></a>" : K ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + a + "'><span class='ui-icon ui-icon-circle-triangle-" + (P ? "w" : "e") + "'>" + a + "</span></a>", r = this._get(e, "currentText"), o = this._get(e, "gotoCurrent") && e.currentDay ? Z : W, r = U ? this.formatDate(r, o, this._getFormatConfig(e)) : r, l = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", u = R ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (P ? l : "") + (this._isInRange(e, o) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (P ? "" : l) + "</div>" : "", c = parseInt(this._get(e, "firstDay"), 10), c = isNaN(c) ? 0 : c, h = this._get(e, "showWeek"), d = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), m = this._get(e, "monthNames"), f = this._get(e, "monthNamesShort"), _ = this._get(e, "beforeShowDay"), g = this._get(e, "showOtherMonths"), v = this._get(e, "selectOtherMonths"), k = this._getDefaultDate(e), D = "", y = 0; y < V[0]; y++) {
          for (x = "", this.maxRows = 4, w = 0; w < V[1]; w++) {
            if (b = this._daylightSavingAdjust(new Date(ee, Q, e.selectedDay)), T = " ui-corner-all", $ = "", q) {
              if ($ += "<div class='ui-datepicker-group", V[1] > 1)switch (w) {
                case 0:
                  $ += " ui-datepicker-group-first", T = " ui-corner-" + (P ? "right" : "left");
                  break;
                case V[1] - 1:
                  $ += " ui-datepicker-group-last", T = " ui-corner-" + (P ? "left" : "right");
                  break;
                default:
                  $ += " ui-datepicker-group-middle", T = ""
              }
              $ += "'>"
            }
            for ($ += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + T + "'>" + (/all|left/.test(T) && 0 === y ? P ? n : s : "") + (/all|right/.test(T) && 0 === y ? P ? s : n : "") + this._generateMonthYearHeader(e, Q, ee, X, J, y > 0 || w > 0, m, f) + "</div><table class='ui-datepicker-calendar'><thead><tr>", C = h ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", M = 0; 7 > M; M++)O = (M + c) % 7, C += "<th scope='col'" + ((M + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[O] + "'>" + p[O] + "</span></th>";
            for ($ += C + "</tr></thead><tbody>", I = this._getDaysInMonth(ee, Q), ee === e.selectedYear && Q === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, I)), S = (this._getFirstDayOfMonth(ee, Q) - c + 7) % 7, N = Math.ceil((S + I) / 7), F = q && this.maxRows > N ? this.maxRows : N, this.maxRows = F, z = this._daylightSavingAdjust(new Date(ee, Q, 1 - S)), A = 0; F > A; A++) {
              for ($ += "<tr>", j = h ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(z) + "</td>" : "", M = 0; 7 > M; M++)Y = _ ? _.apply(e.input ? e.input[0] : null, [z]) : [!0, ""], H = z.getMonth() !== Q, E = H && !v || !Y[0] || X && X > z || J && z > J, j += "<td class='" + ((M + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (H ? " ui-datepicker-other-month" : "") + (z.getTime() === b.getTime() && Q === e.selectedMonth && e._keyEvent || k.getTime() === z.getTime() && k.getTime() === b.getTime() ? " " + this._dayOverClass : "") + (E ? " " + this._unselectableClass + " ui-state-disabled" : "") + (H && !g ? "" : " " + Y[1] + (z.getTime() === Z.getTime() ? " " + this._currentClass : "") + (z.getTime() === W.getTime() ? " ui-datepicker-today" : "")) + "'" + (H && !g || !Y[2] ? "" : " title='" + Y[2].replace(/'/g, "&#39;") + "'") + (E ? "" : " data-handler='selectDay' data-event='click' data-month='" + z.getMonth() + "' data-year='" + z.getFullYear() + "'") + ">" + (H && !g ? "&#xa0;" : E ? "<span class='ui-state-default'>" + z.getDate() + "</span>" : "<a class='ui-state-default" + (z.getTime() === W.getTime() ? " ui-state-highlight" : "") + (z.getTime() === Z.getTime() ? " ui-state-active" : "") + (H ? " ui-priority-secondary" : "") + "' href='#'>" + z.getDate() + "</a>") + "</td>", z.setDate(z.getDate() + 1), z = this._daylightSavingAdjust(z);
              $ += j + "</tr>"
            }
            Q++, Q > 11 && (Q = 0, ee++), $ += "</tbody></table>" + (q ? "</div>" + (V[0] > 0 && w === V[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += $
          }
          D += x
        }
        return D += u, e._keyEvent = !1, D
      },
      _generateMonthYearHeader: function (e, t, i, s, a, n, r, o) {
        var l, u, c, h, d, p, m, f, _ = this._get(e, "changeMonth"), g = this._get(e, "changeYear"), v = this._get(e, "showMonthAfterYear"), k = "<div class='ui-datepicker-title'>", D = "";
        if (n || !_)D += "<span class='ui-datepicker-month'>" + r[t] + "</span>"; else {
          for (l = s && s.getFullYear() === i, u = a && a.getFullYear() === i, D += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)(!l || c >= s.getMonth()) && (!u || c <= a.getMonth()) && (D += "<option value='" + c + "'" + (c === t ? " selected='selected'" : "") + ">" + o[c] + "</option>");
          D += "</select>"
        }
        if (v || (k += D + (!n && _ && g ? "" : "&#xa0;")), !e.yearshtml)if (e.yearshtml = "", n || !g)k += "<span class='ui-datepicker-year'>" + i + "</span>"; else {
          for (h = this._get(e, "yearRange").split(":"), d = (new Date).getFullYear(), p = function (e) {
            var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? d + parseInt(e, 10) : parseInt(e, 10);
            return isNaN(t) ? d : t
          }, m = p(h[0]), f = Math.max(m, p(h[1] || "")), m = s ? Math.max(m, s.getFullYear()) : m, f = a ? Math.min(f, a.getFullYear()) : f, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; f >= m; m++)e.yearshtml += "<option value='" + m + "'" + (m === i ? " selected='selected'" : "") + ">" + m + "</option>";
          e.yearshtml += "</select>", k += e.yearshtml, e.yearshtml = null
        }
        return k += this._get(e, "yearSuffix"), v && (k += (!n && _ && g ? "" : "&#xa0;") + D), k += "</div>"
      },
      _adjustInstDate: function (e, t, i) {
        var s = e.drawYear + ("Y" === i ? t : 0), a = e.drawMonth + ("M" === i ? t : 0), n = Math.min(e.selectedDay, this._getDaysInMonth(s, a)) + ("D" === i ? t : 0), r = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(s, a, n)));
        e.selectedDay = r.getDate(), e.drawMonth = e.selectedMonth = r.getMonth(), e.drawYear = e.selectedYear = r.getFullYear(), "M" !== i && "Y" !== i || this._notifyChange(e)
      },
      _restrictMinMax: function (e, t) {
        var i = this._getMinMaxDate(e, "min"), s = this._getMinMaxDate(e, "max"), a = i && i > t ? i : t;
        return s && a > s ? s : a
      },
      _notifyChange: function (e) {
        var t = this._get(e, "onChangeMonthYear");
        t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
      },
      _getNumberOfMonths: function (e) {
        var t = this._get(e, "numberOfMonths");
        return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
      },
      _getMinMaxDate: function (e, t) {
        return this._determineDate(e, this._get(e, t + "Date"), null)
      },
      _getDaysInMonth: function (e, t) {
        return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
      },
      _getFirstDayOfMonth: function (e, t) {
        return new Date(e, t, 1).getDay()
      },
      _canAdjustMonth: function (e, t, i, s) {
        var a = this._getNumberOfMonths(e), n = this._daylightSavingAdjust(new Date(i, s + (0 > t ? t : a[0] * a[1]), 1));
        return 0 > t && n.setDate(this._getDaysInMonth(n.getFullYear(), n.getMonth())), this._isInRange(e, n)
      },
      _isInRange: function (e, t) {
        var i, s, a = this._getMinMaxDate(e, "min"), n = this._getMinMaxDate(e, "max"), r = null, o = null, l = this._get(e, "yearRange");
        return l && (i = l.split(":"), s = (new Date).getFullYear(), r = parseInt(i[0], 10), o = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += s), i[1].match(/[+\-].*/) && (o += s)), (!a || t.getTime() >= a.getTime()) && (!n || t.getTime() <= n.getTime()) && (!r || t.getFullYear() >= r) && (!o || t.getFullYear() <= o)
      },
      _getFormatConfig: function (e) {
        var t = this._get(e, "shortYearCutoff");
        return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
          shortYearCutoff: t,
          dayNamesShort: this._get(e, "dayNamesShort"),
          dayNames: this._get(e, "dayNames"),
          monthNamesShort: this._get(e, "monthNamesShort"),
          monthNames: this._get(e, "monthNames")
        }
      },
      _formatDate: function (e, t, i, s) {
        t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
        var a = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(s, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
        return this.formatDate(this._get(e, "dateFormat"), a, this._getFormatConfig(e))
      }
    }), e.fn.datepicker = function (t) {
      if (!this.length)return this;
      e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
      var i = Array.prototype.slice.call(arguments, 1);
      return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) : this.each(function () {
        "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(i)) : e.datepicker._attachDatepicker(this, t)
      }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i))
    }, e.datepicker = new a, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.11.4";
    e.datepicker, e.widget("ui.slider", e.ui.mouse, {
      version: "1.11.4",
      widgetEventPrefix: "slide",
      options: {
        animate: !1,
        distance: 0,
        max: 100,
        min: 0,
        orientation: "horizontal",
        range: !1,
        step: 1,
        value: 0,
        values: null,
        change: null,
        slide: null,
        start: null,
        stop: null
      },
      numPages: 5,
      _create: function () {
        this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
      },
      _refresh: function () {
        this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
      },
      _createHandles: function () {
        var t, i, s = this.options, a = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), n = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>", r = [];
        for (i = s.values && s.values.length || 1, a.length > i && (a.slice(i).remove(), a = a.slice(0, i)), t = a.length; i > t; t++)r.push(n);
        this.handles = a.add(e(r.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (t) {
          e(this).data("ui-slider-handle-index", t)
        })
      },
      _createRange: function () {
        var t = this.options, i = "";
        t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
          left: "",
          bottom: ""
        }) : (this.range = e("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null)
      },
      _setupEvents: function () {
        this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
      },
      _destroy: function () {
        this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
      },
      _mouseCapture: function (t) {
        var i, s, a, n, r, o, l, u, c = this, h = this.options;
        return h.disabled ? !1 : (this.elementSize = {
          width: this.element.outerWidth(),
          height: this.element.outerHeight()
        }, this.elementOffset = this.element.offset(), i = {
          x: t.pageX,
          y: t.pageY
        }, s = this._normValueFromMouse(i), a = this._valueMax() - this._valueMin() + 1, this.handles.each(function (t) {
          var i = Math.abs(s - c.values(t));
          (a > i || a === i && (t === c._lastChangedValue || c.values(t) === h.min)) && (a = i, n = e(this), r = t)
        }), o = this._start(t, r), o === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = r, n.addClass("ui-state-active").focus(), l = n.offset(), u = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = u ? {
          left: 0,
          top: 0
        } : {
          left: t.pageX - l.left - n.width() / 2,
          top: t.pageY - l.top - n.height() / 2 - (parseInt(n.css("borderTopWidth"), 10) || 0) - (parseInt(n.css("borderBottomWidth"), 10) || 0) + (parseInt(n.css("marginTop"), 10) || 0)
        }, this.handles.hasClass("ui-state-hover") || this._slide(t, r, s), this._animateOff = !0, !0))
      },
      _mouseStart: function () {
        return !0
      },
      _mouseDrag: function (e) {
        var t = {x: e.pageX, y: e.pageY}, i = this._normValueFromMouse(t);
        return this._slide(e, this._handleIndex, i), !1
      },
      _mouseStop: function (e) {
        return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
      },
      _detectOrientation: function () {
        this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
      },
      _normValueFromMouse: function (e) {
        var t, i, s, a, n;
        return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / t, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), a = this._valueMax() - this._valueMin(), n = this._valueMin() + s * a, this._trimAlignValue(n)
      },
      _start: function (e, t) {
        var i = {handle: this.handles[t], value: this.value()};
        return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", e, i)
      },
      _slide: function (e, t, i) {
        var s, a, n;
        this.options.values && this.options.values.length ? (s = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && i > s || 1 === t && s > i) && (i = s), i !== this.values(t) && (a = this.values(), a[t] = i, n = this._trigger("slide", e, {
          handle: this.handles[t],
          value: i,
          values: a
        }), s = this.values(t ? 0 : 1), n !== !1 && this.values(t, i))) : i !== this.value() && (n = this._trigger("slide", e, {
          handle: this.handles[t],
          value: i
        }), n !== !1 && this.value(i))
      },
      _stop: function (e, t) {
        var i = {handle: this.handles[t], value: this.value()};
        this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", e, i)
      },
      _change: function (e, t) {
        if (!this._keySliding && !this._mouseSliding) {
          var i = {handle: this.handles[t], value: this.value()};
          this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, i)
        }
      },
      value: function (e) {
        return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), void this._change(null, 0)) : this._value()
      },
      values: function (t, i) {
        var s, a, n;
        if (arguments.length > 1)return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, t);
        if (!arguments.length)return this._values();
        if (!e.isArray(arguments[0]))return this.options.values && this.options.values.length ? this._values(t) : this.value();
        for (s = this.options.values, a = arguments[0], n = 0; n < s.length; n += 1)s[n] = this._trimAlignValue(a[n]), this._change(null, n);
        this._refreshValue()
      },
      _setOption: function (t, i) {
        var s, a = 0;
        switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (a = this.options.values.length), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!i), this._super(t, i), t) {
          case"orientation":
            this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === i ? "bottom" : "left", "");
            break;
          case"value":
            this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
            break;
          case"values":
            for (this._animateOff = !0, this._refreshValue(), s = 0; a > s; s += 1)this._change(null, s);
            this._animateOff = !1;
            break;
          case"step":
          case"min":
          case"max":
            this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
            break;
          case"range":
            this._animateOff = !0, this._refresh(), this._animateOff = !1
        }
      },
      _value: function () {
        var e = this.options.value;
        return e = this._trimAlignValue(e)
      },
      _values: function (e) {
        var t, i, s;
        if (arguments.length)return t = this.options.values[e], t = this._trimAlignValue(t);
        if (this.options.values && this.options.values.length) {
          for (i = this.options.values.slice(), s = 0; s < i.length; s += 1)i[s] = this._trimAlignValue(i[s]);
          return i
        }
        return []
      },
      _trimAlignValue: function (e) {
        if (e <= this._valueMin())return this._valueMin();
        if (e >= this._valueMax())return this._valueMax();
        var t = this.options.step > 0 ? this.options.step : 1, i = (e - this._valueMin()) % t, s = e - i;
        return 2 * Math.abs(i) >= t && (s += i > 0 ? t : -t), parseFloat(s.toFixed(5))
      },
      _calculateNewMax: function () {
        var e = this.options.max, t = this._valueMin(), i = this.options.step, s = Math.floor(+(e - t).toFixed(this._precision()) / i) * i;
        e = s + t, this.max = parseFloat(e.toFixed(this._precision()))
      },
      _precision: function () {
        var e = this._precisionOf(this.options.step);
        return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e
      },
      _precisionOf: function (e) {
        var t = e.toString(), i = t.indexOf(".");
        return -1 === i ? 0 : t.length - i - 1
      },
      _valueMin: function () {
        return this.options.min
      },
      _valueMax: function () {
        return this.max
      },
      _refreshValue: function () {
        var t, i, s, a, n, r = this.options.range, o = this.options, l = this, u = this._animateOff ? !1 : o.animate, c = {};
        this.options.values && this.options.values.length ? this.handles.each(function (s) {
          i = (l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", e(this).stop(1, 1)[u ? "animate" : "css"](c, o.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === s && l.range.stop(1, 1)[u ? "animate" : "css"]({left: i + "%"}, o.animate), 1 === s && l.range[u ? "animate" : "css"]({
            width: i - t + "%"
          }, {
            queue: !1,
            duration: o.animate
          })) : (0 === s && l.range.stop(1, 1)[u ? "animate" : "css"]({bottom: i + "%"}, o.animate), 1 === s && l.range[u ? "animate" : "css"]({height: i - t + "%"}, {
            queue: !1,
            duration: o.animate
          }))), t = i
        }) : (s = this.value(), a = this._valueMin(), n = this._valueMax(), i = n !== a ? (s - a) / (n - a) * 100 : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[u ? "animate" : "css"](c, o.animate), "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({width: i + "%"}, o.animate), "max" === r && "horizontal" === this.orientation && this.range[u ? "animate" : "css"]({width: 100 - i + "%"}, {
          queue: !1,
          duration: o.animate
        }), "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({height: i + "%"}, o.animate), "max" === r && "vertical" === this.orientation && this.range[u ? "animate" : "css"]({height: 100 - i + "%"}, {
          queue: !1,
          duration: o.animate
        }))
      },
      _handleEvents: {
        keydown: function (t) {
          var i, s, a, n, r = e(t.target).data("ui-slider-handle-index");
          switch (t.keyCode) {
            case e.ui.keyCode.HOME:
            case e.ui.keyCode.END:
            case e.ui.keyCode.PAGE_UP:
            case e.ui.keyCode.PAGE_DOWN:
            case e.ui.keyCode.UP:
            case e.ui.keyCode.RIGHT:
            case e.ui.keyCode.DOWN:
            case e.ui.keyCode.LEFT:
              if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, e(t.target).addClass("ui-state-active"), i = this._start(t, r), i === !1))return
          }
          switch (n = this.options.step, s = a = this.options.values && this.options.values.length ? this.values(r) : this.value(), t.keyCode) {
            case e.ui.keyCode.HOME:
              a = this._valueMin();
              break;
            case e.ui.keyCode.END:
              a = this._valueMax();
              break;
            case e.ui.keyCode.PAGE_UP:
              a = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
              break;
            case e.ui.keyCode.PAGE_DOWN:
              a = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
              break;
            case e.ui.keyCode.UP:
            case e.ui.keyCode.RIGHT:
              if (s === this._valueMax())return;
              a = this._trimAlignValue(s + n);
              break;
            case e.ui.keyCode.DOWN:
            case e.ui.keyCode.LEFT:
              if (s === this._valueMin())return;
              a = this._trimAlignValue(s - n)
          }
          this._slide(t, r, a)
        }, keyup: function (t) {
          var i = e(t.target).data("ui-slider-handle-index");
          this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), e(t.target).removeClass("ui-state-active"))
        }
      }
    })
  }), function (e) {
    e(jQuery)
  }(function ($) {
    if ($.ui.timepicker = $.ui.timepicker || {}, !$.ui.timepicker.version) {
      $.extend($.ui, {timepicker: {version: "@@version"}});
      var Timepicker = function () {
        this.regional = [], this.regional[""] = {
          currentText: "Now",
          closeText: "Done",
          amNames: ["AM", "A"],
          pmNames: ["PM", "P"],
          timeFormat: "HH:mm",
          timeSuffix: "",
          timeOnlyTitle: "Choose Time",
          timeText: "Time",
          hourText: "Hour",
          minuteText: "Minute",
          secondText: "Second",
          millisecText: "Millisecond",
          microsecText: "Microsecond",
          timezoneText: "Time Zone",
          isRTL: !1
        }, this._defaults = {
          showButtonPanel: !0,
          timeOnly: !1,
          timeOnlyShowDate: !1,
          showHour: null,
          showMinute: null,
          showSecond: null,
          showMillisec: null,
          showMicrosec: null,
          showTimezone: null,
          showTime: !0,
          stepHour: 1,
          stepMinute: 1,
          stepSecond: 1,
          stepMillisec: 1,
          stepMicrosec: 1,
          hour: 0,
          minute: 0,
          second: 0,
          millisec: 0,
          microsec: 0,
          timezone: null,
          hourMin: 0,
          minuteMin: 0,
          secondMin: 0,
          millisecMin: 0,
          microsecMin: 0,
          hourMax: 23,
          minuteMax: 59,
          secondMax: 59,
          millisecMax: 999,
          microsecMax: 999,
          minDateTime: null,
          maxDateTime: null,
          maxTime: null,
          minTime: null,
          onSelect: null,
          hourGrid: 0,
          minuteGrid: 0,
          secondGrid: 0,
          millisecGrid: 0,
          microsecGrid: 0,
          alwaysSetTime: !0,
          separator: " ",
          altFieldTimeOnly: !0,
          altTimeFormat: null,
          altSeparator: null,
          altTimeSuffix: null,
          altRedirectFocus: !0,
          pickerTimeFormat: null,
          pickerTimeSuffix: null,
          showTimepicker: !0,
          timezoneList: null,
          addSliderAccess: !1,
          sliderAccessArgs: null,
          controlType: "slider",
          oneLine: !1,
          defaultValue: null,
          parse: "strict",
          afterInject: null
        }, $.extend(this._defaults, this.regional[""])
      };
      $.extend(Timepicker.prototype, {
        $input: null,
        $altInput: null,
        $timeObj: null,
        inst: null,
        hour_slider: null,
        minute_slider: null,
        second_slider: null,
        millisec_slider: null,
        microsec_slider: null,
        timezone_select: null,
        maxTime: null,
        minTime: null,
        hour: 0,
        minute: 0,
        second: 0,
        millisec: 0,
        microsec: 0,
        timezone: null,
        hourMinOriginal: null,
        minuteMinOriginal: null,
        secondMinOriginal: null,
        millisecMinOriginal: null,
        microsecMinOriginal: null,
        hourMaxOriginal: null,
        minuteMaxOriginal: null,
        secondMaxOriginal: null,
        millisecMaxOriginal: null,
        microsecMaxOriginal: null,
        ampm: "",
        formattedDate: "",
        formattedTime: "",
        formattedDateTime: "",
        timezoneList: null,
        units: ["hour", "minute", "second", "millisec", "microsec"],
        support: {},
        control: null,
        setDefaults: function (e) {
          return extendRemove(this._defaults, e || {}), this
        },
        _newInst: function ($input, opts) {
          var tp_inst = new Timepicker, inlineSettings = {}, fns = {}, overrides, i;
          for (var attrName in this._defaults)if (this._defaults.hasOwnProperty(attrName)) {
            var attrValue = $input.attr("time:" + attrName);
            if (attrValue)try {
              inlineSettings[attrName] = eval(attrValue)
            } catch (err) {
              inlineSettings[attrName] = attrValue
            }
          }
          overrides = {
            beforeShow: function (e, t) {
              return $.isFunction(tp_inst._defaults.evnts.beforeShow) ? tp_inst._defaults.evnts.beforeShow.call($input[0], e, t, tp_inst) : void 0
            }, onChangeMonthYear: function (e, t, i) {
              $.isFunction(tp_inst._defaults.evnts.onChangeMonthYear) && tp_inst._defaults.evnts.onChangeMonthYear.call($input[0], e, t, i, tp_inst)
            }, onClose: function (e, t) {
              tp_inst.timeDefined === !0 && "" !== $input.val() && tp_inst._updateDateTime(t), $.isFunction(tp_inst._defaults.evnts.onClose) && tp_inst._defaults.evnts.onClose.call($input[0], e, t, tp_inst)
            }
          };
          for (i in overrides)overrides.hasOwnProperty(i) && (fns[i] = opts[i] || this._defaults[i] || null);
          tp_inst._defaults = $.extend({}, this._defaults, inlineSettings, opts, overrides, {
            evnts: fns,
            timepicker: tp_inst
          }), tp_inst.amNames = $.map(tp_inst._defaults.amNames, function (e) {
            return e.toUpperCase()
          }), tp_inst.pmNames = $.map(tp_inst._defaults.pmNames, function (e) {
            return e.toUpperCase()
          }), tp_inst.support = detectSupport(tp_inst._defaults.timeFormat + (tp_inst._defaults.pickerTimeFormat ? tp_inst._defaults.pickerTimeFormat : "") + (tp_inst._defaults.altTimeFormat ? tp_inst._defaults.altTimeFormat : "")), "string" == typeof tp_inst._defaults.controlType ? ("slider" === tp_inst._defaults.controlType && "undefined" == typeof $.ui.slider && (tp_inst._defaults.controlType = "select"), tp_inst.control = tp_inst._controls[tp_inst._defaults.controlType]) : tp_inst.control = tp_inst._defaults.controlType;
          var timezoneList = [-720, -660, -600, -570, -540, -480, -420, -360, -300, -270, -240, -210, -180, -120, -60, 0, 60, 120, 180, 210, 240, 270, 300, 330, 345, 360, 390, 420, 480, 525, 540, 570, 600, 630, 660, 690, 720, 765, 780, 840];
          null !== tp_inst._defaults.timezoneList && (timezoneList = tp_inst._defaults.timezoneList);
          var tzl = timezoneList.length, tzi = 0, tzv = null;
          if (tzl > 0 && "object" != typeof timezoneList[0])for (; tzl > tzi; tzi++)tzv = timezoneList[tzi], timezoneList[tzi] = {
            value: tzv,
            label: $.timepicker.timezoneOffsetString(tzv, tp_inst.support.iso8601)
          };
          return tp_inst._defaults.timezoneList = timezoneList, tp_inst.timezone = null !== tp_inst._defaults.timezone ? $.timepicker.timezoneOffsetNumber(tp_inst._defaults.timezone) : -1 * (new Date).getTimezoneOffset(), tp_inst.hour = tp_inst._defaults.hour < tp_inst._defaults.hourMin ? tp_inst._defaults.hourMin : tp_inst._defaults.hour > tp_inst._defaults.hourMax ? tp_inst._defaults.hourMax : tp_inst._defaults.hour, tp_inst.minute = tp_inst._defaults.minute < tp_inst._defaults.minuteMin ? tp_inst._defaults.minuteMin : tp_inst._defaults.minute > tp_inst._defaults.minuteMax ? tp_inst._defaults.minuteMax : tp_inst._defaults.minute, tp_inst.second = tp_inst._defaults.second < tp_inst._defaults.secondMin ? tp_inst._defaults.secondMin : tp_inst._defaults.second > tp_inst._defaults.secondMax ? tp_inst._defaults.secondMax : tp_inst._defaults.second, tp_inst.millisec = tp_inst._defaults.millisec < tp_inst._defaults.millisecMin ? tp_inst._defaults.millisecMin : tp_inst._defaults.millisec > tp_inst._defaults.millisecMax ? tp_inst._defaults.millisecMax : tp_inst._defaults.millisec, tp_inst.microsec = tp_inst._defaults.microsec < tp_inst._defaults.microsecMin ? tp_inst._defaults.microsecMin : tp_inst._defaults.microsec > tp_inst._defaults.microsecMax ? tp_inst._defaults.microsecMax : tp_inst._defaults.microsec, tp_inst.ampm = "", tp_inst.$input = $input, tp_inst._defaults.altField && (tp_inst.$altInput = $(tp_inst._defaults.altField), tp_inst._defaults.altRedirectFocus === !0 && tp_inst.$altInput.css({cursor: "pointer"}).focus(function () {
            $input.trigger("focus")
          })), 0 !== tp_inst._defaults.minDate && 0 !== tp_inst._defaults.minDateTime || (tp_inst._defaults.minDate = new Date), 0 !== tp_inst._defaults.maxDate && 0 !== tp_inst._defaults.maxDateTime || (tp_inst._defaults.maxDate = new Date), void 0 !== tp_inst._defaults.minDate && tp_inst._defaults.minDate instanceof Date && (tp_inst._defaults.minDateTime = new Date(tp_inst._defaults.minDate.getTime())), void 0 !== tp_inst._defaults.minDateTime && tp_inst._defaults.minDateTime instanceof Date && (tp_inst._defaults.minDate = new Date(tp_inst._defaults.minDateTime.getTime())), void 0 !== tp_inst._defaults.maxDate && tp_inst._defaults.maxDate instanceof Date && (tp_inst._defaults.maxDateTime = new Date(tp_inst._defaults.maxDate.getTime())), void 0 !== tp_inst._defaults.maxDateTime && tp_inst._defaults.maxDateTime instanceof Date && (tp_inst._defaults.maxDate = new Date(tp_inst._defaults.maxDateTime.getTime())), tp_inst.$input.bind("focus", function () {
            tp_inst._onFocus()
          }), tp_inst
        },
        _addTimePicker: function (e) {
          var t = $.trim(this.$altInput && this._defaults.altFieldTimeOnly ? this.$input.val() + " " + this.$altInput.val() : this.$input.val());
          this.timeDefined = this._parseTime(t), this._limitMinMaxDateTime(e, !1), this._injectTimePicker(), this._afterInject()
        },
        _parseTime: function (e, t) {
          if (this.inst || (this.inst = $.datepicker._getInst(this.$input[0])), t || !this._defaults.timeOnly) {
            var i = $.datepicker._get(this.inst, "dateFormat");
            try {
              var s = parseDateTimeInternal(i, this._defaults.timeFormat, e, $.datepicker._getFormatConfig(this.inst), this._defaults);
              if (!s.timeObj)return !1;
              $.extend(this, s.timeObj)
            } catch (a) {
              return $.timepicker.log("Error parsing the date/time string: " + a + "\ndate/time string = " + e + "\ntimeFormat = " + this._defaults.timeFormat + "\ndateFormat = " + i), !1
            }
            return !0
          }
          var n = $.datepicker.parseTime(this._defaults.timeFormat, e, this._defaults);
          return n ? ($.extend(this, n), !0) : !1
        },
        _afterInject: function () {
          var e = this.inst.settings;
          $.isFunction(e.afterInject) && e.afterInject.call(this)
        },
        _injectTimePicker: function () {
          var e = this.inst.dpDiv, t = this.inst.settings, i = this, s = "", a = "", n = null, r = {}, o = {}, l = null, u = 0, c = 0;
          if (0 === e.find("div.ui-timepicker-div").length && t.showTimepicker) {
            var h = " ui_tpicker_unit_hide", d = '<div class="ui-timepicker-div' + (t.isRTL ? " ui-timepicker-rtl" : "") + (t.oneLine && "select" === t.controlType ? " ui-timepicker-oneLine" : "") + '"><dl><div class="ui_tpicker_time_selected" ><dt class="ui_tpicker_time_label' + (t.showTime ? "" : h) + '">' + t.timeText + '</dt><dd class="ui_tpicker_time ' + (t.showTime ? "" : h) + '"><input class="ui_tpicker_time_input" ' + (t.timeInput ? "" : "disabled") + "/></dd></div>";
            for (u = 0, c = this.units.length; c > u; u++) {
              if (s = this.units[u], a = s.substr(0, 1).toUpperCase() + s.substr(1), n = null !== t["show" + a] ? t["show" + a] : this.support[s], r[s] = parseInt(t[s + "Max"] - (t[s + "Max"] - t[s + "Min"]) % t["step" + a], 10), o[s] = 0, d += '<dt class="ui_tpicker_' + s + "_label" + (n ? "" : h) + '">' + t[s + "Text"] + '</dt><dd class="ui_tpicker_' + s + (n ? "" : h) + '"><div class="ui_tpicker_' + s + "_slider" + (n ? "" : h) + '"></div>', n && t[s + "Grid"] > 0) {
                if (d += '<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>', "hour" === s)for (var p = t[s + "Min"]; p <= r[s]; p += parseInt(t[s + "Grid"], 10)) {
                  o[s]++;
                  var m = $.datepicker.formatTime(this.support.ampm ? "hht" : "HH", {hour: p}, t);
                  d += '<td data-for="' + s + '">' + m + "</td>"
                } else for (var f = t[s + "Min"]; f <= r[s]; f += parseInt(t[s + "Grid"], 10))o[s]++, d += '<td data-for="' + s + '">' + (10 > f ? "0" : "") + f + "</td>";
                d += "</tr></table></div>"
              }
              d += "</dd>"
            }
            var _ = null !== t.showTimezone ? t.showTimezone : this.support.timezone;
            d += '<dt class="ui_tpicker_timezone_label' + (_ ? "" : h) + '">' + t.timezoneText + "</dt>", d += '<dd class="ui_tpicker_timezone' + (_ ? "" : h) + '"></dd>', d += "</dl></div>";
            var g = $(d);
            for (t.timeOnly === !0 && (g.prepend('<div class="ui-widget-header ui-helper-clearfix ui-corner-all"><div class="ui-datepicker-title">' + t.timeOnlyTitle + "</div></div>"), e.find(".ui-datepicker-header, .ui-datepicker-calendar").hide()), u = 0, c = i.units.length; c > u; u++)s = i.units[u], a = s.substr(0, 1).toUpperCase() + s.substr(1), n = null !== t["show" + a] ? t["show" + a] : this.support[s], i[s + "_slider"] = i.control.create(i, g.find(".ui_tpicker_" + s + "_slider"), s, i[s], t[s + "Min"], r[s], t["step" + a]), n && t[s + "Grid"] > 0 && (l = 100 * o[s] * t[s + "Grid"] / (r[s] - t[s + "Min"]), g.find(".ui_tpicker_" + s + " table").css({
              width: l + "%",
              marginLeft: t.isRTL ? "0" : l / (-2 * o[s]) + "%",
              marginRight: t.isRTL ? l / (-2 * o[s]) + "%" : "0",
              borderCollapse: "collapse"
            }).find("td").click(function (e) {
              var t = $(this), a = t.html(), n = parseInt(a.replace(/[^0-9]/g), 10), r = a.replace(/[^apm]/gi), o = t.data("for");
              "hour" === o && (-1 !== r.indexOf("p") && 12 > n ? n += 12 : -1 !== r.indexOf("a") && 12 === n && (n = 0)), i.control.value(i, i[o + "_slider"], s, n), i._onTimeChange(), i._onSelectHandler()
            }).css({cursor: "pointer", width: 100 / o[s] + "%", textAlign: "center", overflow: "hidden"}));
            if (this.timezone_select = g.find(".ui_tpicker_timezone").append("<select></select>").find("select"), $.fn.append.apply(this.timezone_select, $.map(t.timezoneList, function (e, t) {
                return $("<option />").val("object" == typeof e ? e.value : e).text("object" == typeof e ? e.label : e)
              })), "undefined" != typeof this.timezone && null !== this.timezone && "" !== this.timezone) {
              var v = -1 * new Date(this.inst.selectedYear, this.inst.selectedMonth, this.inst.selectedDay, 12).getTimezoneOffset();
              v === this.timezone ? selectLocalTimezone(i) : this.timezone_select.val(this.timezone)
            } else"undefined" != typeof this.hour && null !== this.hour && "" !== this.hour ? this.timezone_select.val(t.timezone) : selectLocalTimezone(i);
            this.timezone_select.change(function () {
              i._onTimeChange(), i._onSelectHandler(), i._afterInject()
            });
            var k = e.find(".ui-datepicker-buttonpane");
            if (k.length ? k.before(g) : e.append(g), this.$timeObj = g.find(".ui_tpicker_time_input"), this.$timeObj.change(function () {
                var e = i.inst.settings.timeFormat, t = $.datepicker.parseTime(e, this.value), s = new Date;
                t ? (s.setHours(t.hour), s.setMinutes(t.minute), s.setSeconds(t.second), $.datepicker._setTime(i.inst, s)) : (this.value = i.formattedTime, this.blur())
              }), null !== this.inst) {
              var D = this.timeDefined;
              this._onTimeChange(), this.timeDefined = D
            }
            if (this._defaults.addSliderAccess) {
              var M = this._defaults.sliderAccessArgs, y = this._defaults.isRTL;
              M.isRTL = y, setTimeout(function () {
                if (0 === g.find(".ui-slider-access").length) {
                  g.find(".ui-slider:visible").sliderAccess(M);
                  var e = g.find(".ui-slider-access:eq(0)").outerWidth(!0);
                  e && g.find("table:visible").each(function () {
                    var t = $(this), i = t.outerWidth(), s = t.css(y ? "marginRight" : "marginLeft").toString().replace("%", ""), a = i - e, n = s * a / i + "%", r = {
                      width: a,
                      marginRight: 0,
                      marginLeft: 0
                    };
                    r[y ? "marginRight" : "marginLeft"] = n, t.css(r)
                  })
                }
              }, 10)
            }
            i._limitMinMaxDateTime(this.inst, !0)
          }
        },
        _limitMinMaxDateTime: function (e, t) {
          var i = this._defaults, s = new Date(e.selectedYear, e.selectedMonth, e.selectedDay);
          if (this._defaults.showTimepicker) {
            if (null !== $.datepicker._get(e, "minDateTime") && void 0 !== $.datepicker._get(e, "minDateTime") && s) {
              var a = $.datepicker._get(e, "minDateTime"), n = new Date(a.getFullYear(), a.getMonth(), a.getDate(), 0, 0, 0, 0);
              null !== this.hourMinOriginal && null !== this.minuteMinOriginal && null !== this.secondMinOriginal && null !== this.millisecMinOriginal && null !== this.microsecMinOriginal || (this.hourMinOriginal = i.hourMin, this.minuteMinOriginal = i.minuteMin, this.secondMinOriginal = i.secondMin, this.millisecMinOriginal = i.millisecMin, this.microsecMinOriginal = i.microsecMin), e.settings.timeOnly || n.getTime() === s.getTime() ? (this._defaults.hourMin = a.getHours(), this.hour <= this._defaults.hourMin ? (this.hour = this._defaults.hourMin, this._defaults.minuteMin = a.getMinutes(), this.minute <= this._defaults.minuteMin ? (this.minute = this._defaults.minuteMin, this._defaults.secondMin = a.getSeconds(), this.second <= this._defaults.secondMin ? (this.second = this._defaults.secondMin, this._defaults.millisecMin = a.getMilliseconds(), this.millisec <= this._defaults.millisecMin ? (this.millisec = this._defaults.millisecMin, this._defaults.microsecMin = a.getMicroseconds()) : (this.microsec < this._defaults.microsecMin && (this.microsec = this._defaults.microsecMin), this._defaults.microsecMin = this.microsecMinOriginal)) : (this._defaults.millisecMin = this.millisecMinOriginal, this._defaults.microsecMin = this.microsecMinOriginal)) : (this._defaults.secondMin = this.secondMinOriginal, this._defaults.millisecMin = this.millisecMinOriginal, this._defaults.microsecMin = this.microsecMinOriginal)) : (this._defaults.minuteMin = this.minuteMinOriginal, this._defaults.secondMin = this.secondMinOriginal, this._defaults.millisecMin = this.millisecMinOriginal, this._defaults.microsecMin = this.microsecMinOriginal)) : (this._defaults.hourMin = this.hourMinOriginal, this._defaults.minuteMin = this.minuteMinOriginal, this._defaults.secondMin = this.secondMinOriginal, this._defaults.millisecMin = this.millisecMinOriginal, this._defaults.microsecMin = this.microsecMinOriginal)
            }
            if (null !== $.datepicker._get(e, "maxDateTime") && void 0 !== $.datepicker._get(e, "maxDateTime") && s) {
              var r = $.datepicker._get(e, "maxDateTime"), o = new Date(r.getFullYear(), r.getMonth(), r.getDate(), 0, 0, 0, 0);
              null !== this.hourMaxOriginal && null !== this.minuteMaxOriginal && null !== this.secondMaxOriginal && null !== this.millisecMaxOriginal || (this.hourMaxOriginal = i.hourMax, this.minuteMaxOriginal = i.minuteMax, this.secondMaxOriginal = i.secondMax, this.millisecMaxOriginal = i.millisecMax, this.microsecMaxOriginal = i.microsecMax), e.settings.timeOnly || o.getTime() === s.getTime() ? (this._defaults.hourMax = r.getHours(), this.hour >= this._defaults.hourMax ? (this.hour = this._defaults.hourMax, this._defaults.minuteMax = r.getMinutes(), this.minute >= this._defaults.minuteMax ? (this.minute = this._defaults.minuteMax, this._defaults.secondMax = r.getSeconds(), this.second >= this._defaults.secondMax ? (this.second = this._defaults.secondMax, this._defaults.millisecMax = r.getMilliseconds(), this.millisec >= this._defaults.millisecMax ? (this.millisec = this._defaults.millisecMax, this._defaults.microsecMax = r.getMicroseconds()) : (this.microsec > this._defaults.microsecMax && (this.microsec = this._defaults.microsecMax), this._defaults.microsecMax = this.microsecMaxOriginal)) : (this._defaults.millisecMax = this.millisecMaxOriginal, this._defaults.microsecMax = this.microsecMaxOriginal)) : (this._defaults.secondMax = this.secondMaxOriginal, this._defaults.millisecMax = this.millisecMaxOriginal, this._defaults.microsecMax = this.microsecMaxOriginal)) : (this._defaults.minuteMax = this.minuteMaxOriginal, this._defaults.secondMax = this.secondMaxOriginal, this._defaults.millisecMax = this.millisecMaxOriginal, this._defaults.microsecMax = this.microsecMaxOriginal)) : (this._defaults.hourMax = this.hourMaxOriginal, this._defaults.minuteMax = this.minuteMaxOriginal, this._defaults.secondMax = this.secondMaxOriginal, this._defaults.millisecMax = this.millisecMaxOriginal, this._defaults.microsecMax = this.microsecMaxOriginal)
            }
            if (null !== e.settings.minTime) {
              var l = new Date("01/01/1970 " + e.settings.minTime);
              this.hour < l.getHours() ? (this.hour = this._defaults.hourMin = l.getHours(), this.minute = this._defaults.minuteMin = l.getMinutes()) : this.hour === l.getHours() && this.minute < l.getMinutes() ? this.minute = this._defaults.minuteMin = l.getMinutes() : this._defaults.hourMin < l.getHours() ? (this._defaults.hourMin = l.getHours(), this._defaults.minuteMin = l.getMinutes()) : this._defaults.hourMin === l.getHours() === this.hour && this._defaults.minuteMin < l.getMinutes() ? this._defaults.minuteMin = l.getMinutes() : this._defaults.minuteMin = 0
            }
            if (null !== e.settings.maxTime) {
              var u = new Date("01/01/1970 " + e.settings.maxTime);
              this.hour > u.getHours() ? (this.hour = this._defaults.hourMax = u.getHours(), this.minute = this._defaults.minuteMax = u.getMinutes()) : this.hour === u.getHours() && this.minute > u.getMinutes() ? this.minute = this._defaults.minuteMax = u.getMinutes() : this._defaults.hourMax > u.getHours() ? (this._defaults.hourMax = u.getHours(), this._defaults.minuteMax = u.getMinutes()) : this._defaults.hourMax === u.getHours() === this.hour && this._defaults.minuteMax > u.getMinutes() ? this._defaults.minuteMax = u.getMinutes() : this._defaults.minuteMax = 59
            }
            if (void 0 !== t && t === !0) {
              var c = parseInt(this._defaults.hourMax - (this._defaults.hourMax - this._defaults.hourMin) % this._defaults.stepHour, 10), h = parseInt(this._defaults.minuteMax - (this._defaults.minuteMax - this._defaults.minuteMin) % this._defaults.stepMinute, 10), d = parseInt(this._defaults.secondMax - (this._defaults.secondMax - this._defaults.secondMin) % this._defaults.stepSecond, 10), p = parseInt(this._defaults.millisecMax - (this._defaults.millisecMax - this._defaults.millisecMin) % this._defaults.stepMillisec, 10), m = parseInt(this._defaults.microsecMax - (this._defaults.microsecMax - this._defaults.microsecMin) % this._defaults.stepMicrosec, 10);
              this.hour_slider && (this.control.options(this, this.hour_slider, "hour", {
                min: this._defaults.hourMin,
                max: c,
                step: this._defaults.stepHour
              }), this.control.value(this, this.hour_slider, "hour", this.hour - this.hour % this._defaults.stepHour)), this.minute_slider && (this.control.options(this, this.minute_slider, "minute", {
                min: this._defaults.minuteMin,
                max: h,
                step: this._defaults.stepMinute
              }), this.control.value(this, this.minute_slider, "minute", this.minute - this.minute % this._defaults.stepMinute)), this.second_slider && (this.control.options(this, this.second_slider, "second", {
                min: this._defaults.secondMin,
                max: d,
                step: this._defaults.stepSecond
              }), this.control.value(this, this.second_slider, "second", this.second - this.second % this._defaults.stepSecond)), this.millisec_slider && (this.control.options(this, this.millisec_slider, "millisec", {
                min: this._defaults.millisecMin,
                max: p,
                step: this._defaults.stepMillisec
              }), this.control.value(this, this.millisec_slider, "millisec", this.millisec - this.millisec % this._defaults.stepMillisec)), this.microsec_slider && (this.control.options(this, this.microsec_slider, "microsec", {
                min: this._defaults.microsecMin,
                max: m,
                step: this._defaults.stepMicrosec
              }), this.control.value(this, this.microsec_slider, "microsec", this.microsec - this.microsec % this._defaults.stepMicrosec))
            }
          }
        },
        _onTimeChange: function () {
          if (this._defaults.showTimepicker) {
            var e = this.hour_slider ? this.control.value(this, this.hour_slider, "hour") : !1, t = this.minute_slider ? this.control.value(this, this.minute_slider, "minute") : !1, i = this.second_slider ? this.control.value(this, this.second_slider, "second") : !1, s = this.millisec_slider ? this.control.value(this, this.millisec_slider, "millisec") : !1, a = this.microsec_slider ? this.control.value(this, this.microsec_slider, "microsec") : !1, n = this.timezone_select ? this.timezone_select.val() : !1, r = this._defaults, o = r.pickerTimeFormat || r.timeFormat, l = r.pickerTimeSuffix || r.timeSuffix;
            "object" == typeof e && (e = !1), "object" == typeof t && (t = !1), "object" == typeof i && (i = !1), "object" == typeof s && (s = !1), "object" == typeof a && (a = !1), "object" == typeof n && (n = !1), e !== !1 && (e = parseInt(e, 10)), t !== !1 && (t = parseInt(t, 10)), i !== !1 && (i = parseInt(i, 10)), s !== !1 && (s = parseInt(s, 10)), a !== !1 && (a = parseInt(a, 10)), n !== !1 && (n = n.toString());
            var u = r[12 > e ? "amNames" : "pmNames"][0], c = e !== parseInt(this.hour, 10) || t !== parseInt(this.minute, 10) || i !== parseInt(this.second, 10) || s !== parseInt(this.millisec, 10) || a !== parseInt(this.microsec, 10) || this.ampm.length > 0 && 12 > e != (-1 !== $.inArray(this.ampm.toUpperCase(), this.amNames)) || null !== this.timezone && n !== this.timezone.toString();
            if (c && (e !== !1 && (this.hour = e), t !== !1 && (this.minute = t), i !== !1 && (this.second = i), s !== !1 && (this.millisec = s), a !== !1 && (this.microsec = a), n !== !1 && (this.timezone = n), this.inst || (this.inst = $.datepicker._getInst(this.$input[0])), this._limitMinMaxDateTime(this.inst, !0)), this.support.ampm && (this.ampm = u), this.formattedTime = $.datepicker.formatTime(r.timeFormat, this, r), this.$timeObj && (o === r.timeFormat ? this.$timeObj.val(this.formattedTime + l) : this.$timeObj.val($.datepicker.formatTime(o, this, r) + l), this.$timeObj[0].setSelectionRange)) {
              var h = this.$timeObj[0].selectionStart, d = this.$timeObj[0].selectionEnd;
              this.$timeObj[0].setSelectionRange(h, d)
            }
            this.timeDefined = !0, c && this._updateDateTime()
          }
        },
        _onSelectHandler: function () {
          var e = this._defaults.onSelect || this.inst.settings.onSelect, t = this.$input ? this.$input[0] : null;
          e && t && e.apply(t, [this.formattedDateTime, this])
        },
        _updateDateTime: function (e) {
          e = this.inst || e;
          var t = e.currentYear > 0 ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(e.selectedYear, e.selectedMonth, e.selectedDay), i = $.datepicker._daylightSavingAdjust(t), s = $.datepicker._get(e, "dateFormat"), a = $.datepicker._getFormatConfig(e), n = null !== i && this.timeDefined;
          this.formattedDate = $.datepicker.formatDate(s, null === i ? new Date : i, a);
          var r = this.formattedDate;
          if ("" === e.lastVal && (e.currentYear = e.selectedYear, e.currentMonth = e.selectedMonth, e.currentDay = e.selectedDay), this._defaults.timeOnly === !0 && this._defaults.timeOnlyShowDate === !1 ? r = this.formattedTime : (this._defaults.timeOnly !== !0 && (this._defaults.alwaysSetTime || n) || this._defaults.timeOnly === !0 && this._defaults.timeOnlyShowDate === !0) && (r += this._defaults.separator + this.formattedTime + this._defaults.timeSuffix), this.formattedDateTime = r, this._defaults.showTimepicker)if (this.$altInput && this._defaults.timeOnly === !1 && this._defaults.altFieldTimeOnly === !0)this.$altInput.val(this.formattedTime), this.$input.val(this.formattedDate); else if (this.$altInput) {
            this.$input.val(r);
            var o = "", l = null !== this._defaults.altSeparator ? this._defaults.altSeparator : this._defaults.separator, u = null !== this._defaults.altTimeSuffix ? this._defaults.altTimeSuffix : this._defaults.timeSuffix;
            this._defaults.timeOnly || (o = this._defaults.altFormat ? $.datepicker.formatDate(this._defaults.altFormat, null === i ? new Date : i, a) : this.formattedDate, o && (o += l)), o += null !== this._defaults.altTimeFormat ? $.datepicker.formatTime(this._defaults.altTimeFormat, this, this._defaults) + u : this.formattedTime + u, this.$altInput.val(o)
          } else this.$input.val(r); else this.$input.val(this.formattedDate);
          this.$input.trigger("change")
        },
        _onFocus: function () {
          if (!this.$input.val() && this._defaults.defaultValue) {
            this.$input.val(this._defaults.defaultValue);
            var e = $.datepicker._getInst(this.$input.get(0)), t = $.datepicker._get(e, "timepicker");
            if (t && t._defaults.timeOnly && e.input.val() !== e.lastVal)try {
              $.datepicker._updateDatepicker(e)
            } catch (i) {
              $.timepicker.log(i)
            }
          }
        },
        _controls: {
          slider: {
            create: function (e, t, i, s, a, n, r) {
              var o = e._defaults.isRTL;
              return t.prop("slide", null).slider({
                orientation: "horizontal",
                value: o ? -1 * s : s,
                min: o ? -1 * n : a,
                max: o ? -1 * a : n,
                step: r,
                slide: function (t, s) {
                  e.control.value(e, $(this), i, o ? -1 * s.value : s.value), e._onTimeChange()
                },
                stop: function (t, i) {
                  e._onSelectHandler()
                }
              })
            }, options: function (e, t, i, s, a) {
              if (e._defaults.isRTL) {
                if ("string" == typeof s)return "min" === s || "max" === s ? void 0 !== a ? t.slider(s, -1 * a) : Math.abs(t.slider(s)) : t.slider(s);
                var n = s.min, r = s.max;
                return s.min = s.max = null, void 0 !== n && (s.max = -1 * n), void 0 !== r && (s.min = -1 * r), t.slider(s)
              }
              return "string" == typeof s && void 0 !== a ? t.slider(s, a) : t.slider(s)
            }, value: function (e, t, i, s) {
              return e._defaults.isRTL ? void 0 !== s ? t.slider("value", -1 * s) : Math.abs(t.slider("value")) : void 0 !== s ? t.slider("value", s) : t.slider("value")
            }
          }, select: {
            create: function (e, t, i, s, a, n, r) {
              for (var o = '<select class="ui-timepicker-select ui-state-default ui-corner-all" data-unit="' + i + '" data-min="' + a + '" data-max="' + n + '" data-step="' + r + '">', l = e._defaults.pickerTimeFormat || e._defaults.timeFormat, u = a; n >= u; u += r)o += '<option value="' + u + '"' + (u === s ? " selected" : "") + ">", o += "hour" === i ? $.datepicker.formatTime($.trim(l.replace(/[^ht ]/gi, "")), {hour: u}, e._defaults) : "millisec" === i || "microsec" === i || u >= 10 ? u : "0" + u.toString(), o += "</option>";
              return o += "</select>", t.children("select").remove(), $(o).appendTo(t).change(function (t) {
                e._onTimeChange(), e._onSelectHandler(), e._afterInject()
              }), t
            }, options: function (e, t, i, s, a) {
              var n = {}, r = t.children("select");
              if ("string" == typeof s) {
                if (void 0 === a)return r.data(s);
                n[s] = a
              } else n = s;
              return e.control.create(e, t, r.data("unit"), r.val(), n.min >= 0 ? n.min : r.data("min"), n.max || r.data("max"), n.step || r.data("step"))
            }, value: function (e, t, i, s) {
              var a = t.children("select");
              return void 0 !== s ? a.val(s) : a.val()
            }
          }
        }
      }), $.fn.extend({
        timepicker: function (e) {
          e = e || {};
          var t = Array.prototype.slice.call(arguments);
          return "object" == typeof e && (t[0] = $.extend(e, {timeOnly: !0})), $(this).each(function () {
            $.fn.datetimepicker.apply($(this), t)
          })
        }, datetimepicker: function (e) {
          e = e || {};
          var t = arguments;
          return "string" == typeof e ? "getDate" === e || "option" === e && 2 === t.length && "string" == typeof t[1] ? $.fn.datepicker.apply($(this[0]), t) : this.each(function () {
            var e = $(this);
            e.datepicker.apply(e, t)
          }) : this.each(function () {
            var t = $(this);
            t.datepicker($.timepicker._newInst(t, e)._defaults)
          })
        }
      }), $.datepicker.parseDateTime = function (e, t, i, s, a) {
        var n = parseDateTimeInternal(e, t, i, s, a);
        if (n.timeObj) {
          var r = n.timeObj;
          n.date.setHours(r.hour, r.minute, r.second, r.millisec), n.date.setMicroseconds(r.microsec)
        }
        return n.date
      }, $.datepicker.parseTime = function (e, t, i) {
        var s = extendRemove(extendRemove({}, $.timepicker._defaults), i || {}), a = (-1 !== e.replace(/\'.*?\'/g, "").indexOf("Z"), function (e, t, i) {
          var s, a = function (e, t) {
            var i = [];
            return e && $.merge(i, e), t && $.merge(i, t), i = $.map(i, function (e) {
              return e.replace(/[.*+?|()\[\]{}\\]/g, "\\$&")
            }), "(" + i.join("|") + ")?"
          }, n = function (e) {
            var t = e.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|l{1}|c{1}|t{1,2}|z|'.*?')/g), i = {
              h: -1,
              m: -1,
              s: -1,
              l: -1,
              c: -1,
              t: -1,
              z: -1
            };
            if (t)for (var s = 0; s < t.length; s++)-1 === i[t[s].toString().charAt(0)] && (i[t[s].toString().charAt(0)] = s + 1);
            return i
          }, r = "^" + e.toString().replace(/([hH]{1,2}|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g, function (e) {
              var t = e.length;
              switch (e.charAt(0).toLowerCase()) {
                case"h":
                  return 1 === t ? "(\\d?\\d)" : "(\\d{" + t + "})";
                case"m":
                  return 1 === t ? "(\\d?\\d)" : "(\\d{" + t + "})";
                case"s":
                  return 1 === t ? "(\\d?\\d)" : "(\\d{" + t + "})";
                case"l":
                  return "(\\d?\\d?\\d)";
                case"c":
                  return "(\\d?\\d?\\d)";
                case"z":
                  return "(z|[-+]\\d\\d:?\\d\\d|\\S+)?";
                case"t":
                  return a(i.amNames, i.pmNames);
                default:
                  return "(" + e.replace(/\'/g, "").replace(/(\.|\$|\^|\\|\/|\(|\)|\[|\]|\?|\+|\*)/g, function (e) {
                      return "\\" + e
                    }) + ")?"
              }
            }).replace(/\s/g, "\\s?") + i.timeSuffix + "$", o = n(e), l = "";
          s = t.match(new RegExp(r, "i"));
          var u = {hour: 0, minute: 0, second: 0, millisec: 0, microsec: 0};
          return s ? (-1 !== o.t && (void 0 === s[o.t] || 0 === s[o.t].length ? (l = "", u.ampm = "") : (l = -1 !== $.inArray(s[o.t].toUpperCase(), $.map(i.amNames, function (e, t) {
            return e.toUpperCase()
          })) ? "AM" : "PM", u.ampm = i["AM" === l ? "amNames" : "pmNames"][0])), -1 !== o.h && ("AM" === l && "12" === s[o.h] ? u.hour = 0 : "PM" === l && "12" !== s[o.h] ? u.hour = parseInt(s[o.h], 10) + 12 : u.hour = Number(s[o.h])), -1 !== o.m && (u.minute = Number(s[o.m])), -1 !== o.s && (u.second = Number(s[o.s])), -1 !== o.l && (u.millisec = Number(s[o.l])), -1 !== o.c && (u.microsec = Number(s[o.c])), -1 !== o.z && void 0 !== s[o.z] && (u.timezone = $.timepicker.timezoneOffsetNumber(s[o.z])), u) : !1
        }), n = function (e, t, i) {
          try {
            var s = new Date("2012-01-01 " + t);
            if (isNaN(s.getTime()) && (s = new Date("2012-01-01T" + t), isNaN(s.getTime()) && (s = new Date("01/01/2012 " + t), isNaN(s.getTime()))))throw"Unable to parse time with native Date: " + t;
            return {
              hour: s.getHours(),
              minute: s.getMinutes(),
              second: s.getSeconds(),
              millisec: s.getMilliseconds(),
              microsec: s.getMicroseconds(),
              timezone: -1 * s.getTimezoneOffset()
            }
          } catch (n) {
            try {
              return a(e, t, i)
            } catch (r) {
              $.timepicker.log("Unable to parse \ntimeString: " + t + "\ntimeFormat: " + e)
            }
          }
          return !1
        };
        return "function" == typeof s.parse ? s.parse(e, t, s) : "loose" === s.parse ? n(e, t, s) : a(e, t, s)
      }, $.datepicker.formatTime = function (e, t, i) {
        i = i || {}, i = $.extend({}, $.timepicker._defaults, i), t = $.extend({
          hour: 0,
          minute: 0,
          second: 0,
          millisec: 0,
          microsec: 0,
          timezone: null
        }, t);
        var s = e, a = i.amNames[0], n = parseInt(t.hour, 10);
        return n > 11 && (a = i.pmNames[0]), s = s.replace(/(?:HH?|hh?|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g, function (e) {
          switch (e) {
            case"HH":
              return ("0" + n).slice(-2);
            case"H":
              return n;
            case"hh":
              return ("0" + convert24to12(n)).slice(-2);
            case"h":
              return convert24to12(n);
            case"mm":
              return ("0" + t.minute).slice(-2);
            case"m":
              return t.minute;
            case"ss":
              return ("0" + t.second).slice(-2);
            case"s":
              return t.second;
            case"l":
              return ("00" + t.millisec).slice(-3);
            case"c":
              return ("00" + t.microsec).slice(-3);
            case"z":
              return $.timepicker.timezoneOffsetString(null === t.timezone ? i.timezone : t.timezone, !1);
            case"Z":
              return $.timepicker.timezoneOffsetString(null === t.timezone ? i.timezone : t.timezone, !0);
            case"T":
              return a.charAt(0).toUpperCase();
            case"TT":
              return a.toUpperCase();
            case"t":
              return a.charAt(0).toLowerCase();
            case"tt":
              return a.toLowerCase();
            default:
              return e.replace(/'/g, "")
          }
        })
      }, $.datepicker._base_selectDate = $.datepicker._selectDate, $.datepicker._selectDate = function (e, t) {
        var i, s = this._getInst($(e)[0]), a = this._get(s, "timepicker");
        a && s.settings.showTimepicker ? (a._limitMinMaxDateTime(s, !0), i = s.inline, s.inline = s.stay_open = !0, this._base_selectDate(e, t), s.inline = i, s.stay_open = !1, this._notifyChange(s), this._updateDatepicker(s)) : this._base_selectDate(e, t)
      }, $.datepicker._base_updateDatepicker = $.datepicker._updateDatepicker,
        $.datepicker._updateDatepicker = function (e) {
          var t = e.input[0];
          if (!($.datepicker._curInst && $.datepicker._curInst !== e && $.datepicker._datepickerShowing && $.datepicker._lastInput !== t || "boolean" == typeof e.stay_open && e.stay_open !== !1)) {
            this._base_updateDatepicker(e);
            var i = this._get(e, "timepicker");
            i && i._addTimePicker(e)
          }
        }, $.datepicker._base_doKeyPress = $.datepicker._doKeyPress, $.datepicker._doKeyPress = function (e) {
        var t = $.datepicker._getInst(e.target), i = $.datepicker._get(t, "timepicker");
        if (i && $.datepicker._get(t, "constrainInput")) {
          var s = i.support.ampm, a = null !== i._defaults.showTimezone ? i._defaults.showTimezone : i.support.timezone, n = $.datepicker._possibleChars($.datepicker._get(t, "dateFormat")), r = i._defaults.timeFormat.toString().replace(/[hms]/g, "").replace(/TT/g, s ? "APM" : "").replace(/Tt/g, s ? "AaPpMm" : "").replace(/tT/g, s ? "AaPpMm" : "").replace(/T/g, s ? "AP" : "").replace(/tt/g, s ? "apm" : "").replace(/t/g, s ? "ap" : "") + " " + i._defaults.separator + i._defaults.timeSuffix + (a ? i._defaults.timezoneList.join("") : "") + i._defaults.amNames.join("") + i._defaults.pmNames.join("") + n, o = String.fromCharCode(void 0 === e.charCode ? e.keyCode : e.charCode);
          return e.ctrlKey || " " > o || !n || r.indexOf(o) > -1
        }
        return $.datepicker._base_doKeyPress(e)
      }, $.datepicker._base_updateAlternate = $.datepicker._updateAlternate, $.datepicker._updateAlternate = function (e) {
        var t = this._get(e, "timepicker");
        if (t) {
          var i = t._defaults.altField;
          if (i) {
            var s = (t._defaults.altFormat || t._defaults.dateFormat, this._getDate(e)), a = $.datepicker._getFormatConfig(e), n = "", r = t._defaults.altSeparator ? t._defaults.altSeparator : t._defaults.separator, o = t._defaults.altTimeSuffix ? t._defaults.altTimeSuffix : t._defaults.timeSuffix, l = null !== t._defaults.altTimeFormat ? t._defaults.altTimeFormat : t._defaults.timeFormat;
            n += $.datepicker.formatTime(l, t, t._defaults) + o, t._defaults.timeOnly || t._defaults.altFieldTimeOnly || null === s || (n = t._defaults.altFormat ? $.datepicker.formatDate(t._defaults.altFormat, s, a) + r + n : t.formattedDate + r + n), $(i).val(e.input.val() ? n : "")
          }
        } else $.datepicker._base_updateAlternate(e)
      }, $.datepicker._base_doKeyUp = $.datepicker._doKeyUp, $.datepicker._doKeyUp = function (e) {
        var t = $.datepicker._getInst(e.target), i = $.datepicker._get(t, "timepicker");
        if (i && i._defaults.timeOnly && t.input.val() !== t.lastVal)try {
          $.datepicker._updateDatepicker(t)
        } catch (s) {
          $.timepicker.log(s)
        }
        return $.datepicker._base_doKeyUp(e)
      }, $.datepicker._base_gotoToday = $.datepicker._gotoToday, $.datepicker._gotoToday = function (e) {
        var t = this._getInst($(e)[0]);
        this._base_gotoToday(e);
        var i = this._get(t, "timepicker");
        if (i) {
          var s = $.timepicker.timezoneOffsetNumber(i.timezone), a = new Date;
          a.setMinutes(a.getMinutes() + a.getTimezoneOffset() + parseInt(s, 10)), this._setTime(t, a), this._setDate(t, a), i._onSelectHandler()
        }
      }, $.datepicker._disableTimepickerDatepicker = function (e) {
        var t = this._getInst(e);
        if (t) {
          var i = this._get(t, "timepicker");
          $(e).datepicker("getDate"), i && (t.settings.showTimepicker = !1, i._defaults.showTimepicker = !1, i._updateDateTime(t))
        }
      }, $.datepicker._enableTimepickerDatepicker = function (e) {
        var t = this._getInst(e);
        if (t) {
          var i = this._get(t, "timepicker");
          $(e).datepicker("getDate"), i && (t.settings.showTimepicker = !0, i._defaults.showTimepicker = !0, i._addTimePicker(t), i._updateDateTime(t))
        }
      }, $.datepicker._setTime = function (e, t) {
        var i = this._get(e, "timepicker");
        if (i) {
          var s = i._defaults;
          i.hour = t ? t.getHours() : s.hour, i.minute = t ? t.getMinutes() : s.minute, i.second = t ? t.getSeconds() : s.second, i.millisec = t ? t.getMilliseconds() : s.millisec, i.microsec = t ? t.getMicroseconds() : s.microsec, i._limitMinMaxDateTime(e, !0), i._onTimeChange(), i._updateDateTime(e)
        }
      }, $.datepicker._setTimeDatepicker = function (e, t, i) {
        var s = this._getInst(e);
        if (s) {
          var a = this._get(s, "timepicker");
          if (a) {
            this._setDateFromField(s);
            var n;
            t && ("string" == typeof t ? (a._parseTime(t, i), n = new Date, n.setHours(a.hour, a.minute, a.second, a.millisec), n.setMicroseconds(a.microsec)) : (n = new Date(t.getTime()), n.setMicroseconds(t.getMicroseconds())), "Invalid Date" === n.toString() && (n = void 0), this._setTime(s, n))
          }
        }
      }, $.datepicker._base_setDateDatepicker = $.datepicker._setDateDatepicker, $.datepicker._setDateDatepicker = function (e, t) {
        var i = this._getInst(e), s = t;
        if (i) {
          "string" == typeof t && (s = new Date(t), s.getTime() || (this._base_setDateDatepicker.apply(this, arguments), s = $(e).datepicker("getDate")));
          var a, n = this._get(i, "timepicker");
          s instanceof Date ? (a = new Date(s.getTime()), a.setMicroseconds(s.getMicroseconds())) : a = s, n && a && (n.support.timezone || null !== n._defaults.timezone || (n.timezone = -1 * a.getTimezoneOffset()), s = $.timepicker.timezoneAdjust(s, $.timepicker.timezoneOffsetString(-s.getTimezoneOffset()), n.timezone), a = $.timepicker.timezoneAdjust(a, $.timepicker.timezoneOffsetString(-a.getTimezoneOffset()), n.timezone)), this._updateDatepicker(i), this._base_setDateDatepicker.apply(this, arguments), this._setTimeDatepicker(e, a, !0)
        }
      }, $.datepicker._base_getDateDatepicker = $.datepicker._getDateDatepicker, $.datepicker._getDateDatepicker = function (e, t) {
        var i = this._getInst(e);
        if (i) {
          var s = this._get(i, "timepicker");
          if (s) {
            void 0 === i.lastVal && this._setDateFromField(i, t);
            var a = this._getDate(i), n = null;
            return n = s.$altInput && s._defaults.altFieldTimeOnly ? s.$input.val() + " " + s.$altInput.val() : "INPUT" !== s.$input.get(0).tagName && s.$altInput ? s.$altInput.val() : s.$input.val(), a && s._parseTime(n, !i.settings.timeOnly) && (a.setHours(s.hour, s.minute, s.second, s.millisec), a.setMicroseconds(s.microsec), null != s.timezone && (s.support.timezone || null !== s._defaults.timezone || (s.timezone = -1 * a.getTimezoneOffset()), a = $.timepicker.timezoneAdjust(a, s.timezone, $.timepicker.timezoneOffsetString(-a.getTimezoneOffset())))), a
          }
          return this._base_getDateDatepicker(e, t)
        }
      }, $.datepicker._base_parseDate = $.datepicker.parseDate, $.datepicker.parseDate = function (e, t, i) {
        var s;
        try {
          s = this._base_parseDate(e, t, i)
        } catch (a) {
          if (!(a.indexOf(":") >= 0))throw a;
          s = this._base_parseDate(e, t.substring(0, t.length - (a.length - a.indexOf(":") - 2)), i), $.timepicker.log("Error parsing the date string: " + a + "\ndate string = " + t + "\ndate format = " + e)
        }
        return s
      }, $.datepicker._base_formatDate = $.datepicker._formatDate, $.datepicker._formatDate = function (e, t, i, s) {
        var a = this._get(e, "timepicker");
        return a ? (a._updateDateTime(e), a.$input.val()) : this._base_formatDate(e)
      }, $.datepicker._base_optionDatepicker = $.datepicker._optionDatepicker, $.datepicker._optionDatepicker = function (e, t, i) {
        var s, a = this._getInst(e);
        if (!a)return null;
        var n = this._get(a, "timepicker");
        if (n) {
          var r, o, l, u, c = null, h = null, d = null, p = n._defaults.evnts, m = {};
          if ("string" == typeof t) {
            if ("minDate" === t || "minDateTime" === t)c = i; else if ("maxDate" === t || "maxDateTime" === t)h = i; else if ("onSelect" === t)d = i; else if (p.hasOwnProperty(t)) {
              if ("undefined" == typeof i)return p[t];
              m[t] = i, s = {}
            }
          } else if ("object" == typeof t) {
            t.minDate ? c = t.minDate : t.minDateTime ? c = t.minDateTime : t.maxDate ? h = t.maxDate : t.maxDateTime && (h = t.maxDateTime);
            for (r in p)p.hasOwnProperty(r) && t[r] && (m[r] = t[r])
          }
          for (r in m)m.hasOwnProperty(r) && (p[r] = m[r], s || (s = $.extend({}, t)), delete s[r]);
          if (s && isEmptyObject(s))return;
          if (c ? (c = 0 === c ? new Date : new Date(c), n._defaults.minDate = c, n._defaults.minDateTime = c) : h ? (h = 0 === h ? new Date : new Date(h), n._defaults.maxDate = h, n._defaults.maxDateTime = h) : d && (n._defaults.onSelect = d), c || h)return u = $(e), l = u.datetimepicker("getDate"), o = this._base_optionDatepicker.call($.datepicker, e, s || t, i), u.datetimepicker("setDate", l), o
        }
        return void 0 === i ? this._base_optionDatepicker.call($.datepicker, e, t) : this._base_optionDatepicker.call($.datepicker, e, s || t, i)
      };
      var isEmptyObject = function (e) {
        var t;
        for (t in e)if (e.hasOwnProperty(t))return !1;
        return !0
      }, extendRemove = function (e, t) {
        $.extend(e, t);
        for (var i in t)null !== t[i] && void 0 !== t[i] || (e[i] = t[i]);
        return e
      }, detectSupport = function (e) {
        var t = e.replace(/'.*?'/g, "").toLowerCase(), i = function (e, t) {
          return -1 !== e.indexOf(t)
        };
        return {
          hour: i(t, "h"),
          minute: i(t, "m"),
          second: i(t, "s"),
          millisec: i(t, "l"),
          microsec: i(t, "c"),
          timezone: i(t, "z"),
          ampm: i(t, "t") && i(e, "h"),
          iso8601: i(e, "Z")
        }
      }, convert24to12 = function (e) {
        return e %= 12, 0 === e && (e = 12), String(e)
      }, computeEffectiveSetting = function (e, t) {
        return e && e[t] ? e[t] : $.timepicker._defaults[t]
      }, splitDateTime = function (e, t) {
        var i = computeEffectiveSetting(t, "separator"), s = computeEffectiveSetting(t, "timeFormat"), a = s.split(i), n = a.length, r = e.split(i), o = r.length;
        return o > 1 ? {dateString: r.splice(0, o - n).join(i), timeString: r.splice(0, n).join(i)} : {
          dateString: e,
          timeString: ""
        }
      }, parseDateTimeInternal = function (e, t, i, s, a) {
        var n, r, o;
        if (r = splitDateTime(i, a), n = $.datepicker._base_parseDate(e, r.dateString, s), "" === r.timeString)return {date: n};
        if (o = $.datepicker.parseTime(t, r.timeString, a), !o)throw"Wrong time format";
        return {date: n, timeObj: o}
      }, selectLocalTimezone = function (e, t) {
        if (e && e.timezone_select) {
          var i = t || new Date;
          e.timezone_select.val(-i.getTimezoneOffset())
        }
      };
      $.timepicker = new Timepicker, $.timepicker.timezoneOffsetString = function (e, t) {
        if (isNaN(e) || e > 840 || -720 > e)return e;
        var i = e, s = i % 60, a = (i - s) / 60, n = t ? ":" : "", r = (i >= 0 ? "+" : "-") + ("0" + Math.abs(a)).slice(-2) + n + ("0" + Math.abs(s)).slice(-2);
        return "+00:00" === r ? "Z" : r
      }, $.timepicker.timezoneOffsetNumber = function (e) {
        var t = e.toString().replace(":", "");
        return "Z" === t.toUpperCase() ? 0 : /^(\-|\+)\d{4}$/.test(t) ? ("-" === t.substr(0, 1) ? -1 : 1) * (60 * parseInt(t.substr(1, 2), 10) + parseInt(t.substr(3, 2), 10)) : parseInt(e, 10)
      }, $.timepicker.timezoneAdjust = function (e, t, i) {
        var s = $.timepicker.timezoneOffsetNumber(t), a = $.timepicker.timezoneOffsetNumber(i);
        return isNaN(a) || e.setMinutes(e.getMinutes() + -s - -a), e
      }, $.timepicker.timeRange = function (e, t, i) {
        return $.timepicker.handleRange("timepicker", e, t, i)
      }, $.timepicker.datetimeRange = function (e, t, i) {
        $.timepicker.handleRange("datetimepicker", e, t, i)
      }, $.timepicker.dateRange = function (e, t, i) {
        $.timepicker.handleRange("datepicker", e, t, i)
      }, $.timepicker.handleRange = function (e, t, i, s) {
        function a(a, n) {
          var r = t[e]("getDate"), o = i[e]("getDate"), l = a[e]("getDate");
          if (null !== r) {
            var u = new Date(r.getTime()), c = new Date(r.getTime());
            u.setMilliseconds(u.getMilliseconds() + s.minInterval), c.setMilliseconds(c.getMilliseconds() + s.maxInterval), s.minInterval > 0 && u > o ? i[e]("setDate", u) : s.maxInterval > 0 && o > c ? i[e]("setDate", c) : r > o && n[e]("setDate", l)
          }
        }

        function n(t, i, a) {
          if (t.val()) {
            var n = t[e].call(t, "getDate");
            null !== n && s.minInterval > 0 && ("minDate" === a && n.setMilliseconds(n.getMilliseconds() + s.minInterval), "maxDate" === a && n.setMilliseconds(n.getMilliseconds() - s.minInterval)), n.getTime && i[e].call(i, "option", a, n)
          }
        }

        s = $.extend({}, {minInterval: 0, maxInterval: 0, start: {}, end: {}}, s);
        var r = !1;
        return "timepicker" === e && (r = !0, e = "datetimepicker"), $.fn[e].call(t, $.extend({
          timeOnly: r,
          onClose: function (e, t) {
            a($(this), i)
          },
          onSelect: function (e) {
            n($(this), i, "minDate")
          }
        }, s, s.start)), $.fn[e].call(i, $.extend({
          timeOnly: r, onClose: function (e, i) {
            a($(this), t)
          }, onSelect: function (e) {
            n($(this), t, "maxDate")
          }
        }, s, s.end)), a(t, i), n(t, i, "minDate"), n(i, t, "maxDate"), $([t.get(0), i.get(0)])
      }, $.timepicker.log = function () {
        window.console && window.console.log && window.console.log.apply && window.console.log.apply(window.console, Array.prototype.slice.call(arguments))
      }, $.timepicker._util = {
        _extendRemove: extendRemove,
        _isEmptyObject: isEmptyObject,
        _convert24to12: convert24to12,
        _detectSupport: detectSupport,
        _selectLocalTimezone: selectLocalTimezone,
        _computeEffectiveSetting: computeEffectiveSetting,
        _splitDateTime: splitDateTime,
        _parseDateTimeInternal: parseDateTimeInternal
      }, Date.prototype.getMicroseconds || (Date.prototype.microseconds = 0, Date.prototype.getMicroseconds = function () {
        return this.microseconds
      }, Date.prototype.setMicroseconds = function (e) {
        return this.setMilliseconds(this.getMilliseconds() + Math.floor(e / 1e3)), this.microseconds = e % 1e3, this
      }), $.timepicker.version = "@@version"
    }
  }), function (e) {
    e.timepicker.regional["zh-CN"] = {
      timeOnlyTitle: "选择时间",
      timeText: "时间:",
      hourText: "时:",
      minuteText: "分:",
      secondText: "秒:",
      millisecText: "毫秒",
      microsecText: "微秒",
      timezoneText: "时区",
      currentText: "当前时间",
      closeText: "确定",
      timeFormat: "HH:mm",
      timeSuffix: "",
      amNames: ["AM", "A"],
      pmNames: ["PM", "P"],
      isRTL: !1
    }, e.timepicker.setDefaults(e.timepicker.regional["zh-CN"])
  }(jQuery), function (e) {
    e(jQuery.datepicker)
  }(function (e) {
    return e.regional["zh-CN"] = {
      closeText: "关闭",
      prevText: "&#x3C;上月",
      nextText: "下月&#x3E;",
      currentText: "今天",
      monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
      monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
      dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
      dayNamesShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
      dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
      weekHeader: "周",
      dateFormat: "yy-mm-dd",
      firstDay: 0,
      isRTL: !1,
      showMonthAfterYear: !0,
      yearSuffix: "年"
    }, e.setDefaults(e.regional["zh-CN"]), e.regional["zh-CN"]
  })
});