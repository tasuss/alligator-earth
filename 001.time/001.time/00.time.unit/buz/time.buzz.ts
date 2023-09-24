import * as ActMnu from '../../98.menu.unit/menu.action'
import * as ActBus from '../../99.bus.unit/bus.action'

import * as ActTme from '../time.action'

import * as ActVrt from '../../act/vurt.action'
import * as ActDsk from '../../act/disk.action'

var bit, val, idx, dex, lst, dat

export const initTime = async (cpy: TimeModel, bal: TimeBit, ste: State) => {
    if (bal.dat != null)
        bit = await ste.hunt(ActBus.INIT_BUS, {
            idx: cpy.idx,
            lst: [ActTme],
            dat: bal.dat,
            src: bal.src,
        })

    if (bal.val == 1) patch(ste, ActMnu.INIT_MENU, bal)

    if (bal.slv != null) bal.slv({ intBit: { idx: 'init-time' } })

    return cpy
}

export const updateTime = (cpy: TimeModel, bal: TimeBit, ste: State) => {
    const { exec } = require('child_process')

    exec('tsc -b 001.time', async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`)
        }

        process.chdir('../999.vurt')
        bit = await ste.bus(ActVrt.BUNDLE_VURT, { src: '001.time' })
        process.chdir('../001.time')

        bit = await ste.bus(ActDsk.READ_DISK, { src: './work/001.time.js' })
        var time = bit.dskBit.dat

        bit = await ste.bus(ActDsk.WRITE_DISK, {
            src: '../gillisse/public/jsx/001.time.js',
            dat: time,
        })

        bit = await ste.bus(ActDsk.READ_DISK, { src: './index.html' })
        var html = bit.dskBit.dat

        bit = await ste.bus(ActDsk.READ_DISK, { src: './index.js' })
        var index = bit.dskBit.dat

        bit = await ste.bus(ActDsk.WRITE_DISK, {
            src: '../gillisse/public/jsx/index.js',
            dat: index,
        })
        bit = await ste.bus(ActDsk.WRITE_DISK, {
            src: '../gillisse/index.html',
            dat: html,
        })

        setTimeout(() => {
            if (bal.slv != null) bal.slv({ tmeBit: { idx: 'update-time' } })
        }, 3)
    })

    return cpy
}

export const openTime = async (cpy: TimeModel, bal: TimeBit, ste: State) => {
    bit = await ste.bus(ActDsk.COPY_DISK, {
        src: './source',
        idx: '../gillisse/vue',
    })

    bit = await ste.hunt(ActTme.RUN_TIME, {})

    const open = require('open')

    var loc = './vrt.opn.bat'
    bit = await open(loc)

    setTimeout(() => {
        if (bal.slv != null) bal.slv({ tmeBit: { idx: 'open-time' } })
    }, 33)

    return cpy
}
export const runTime = async (cpy: TimeModel, bal: TimeBit, ste: State) => {
    const open = require('open')

    var loc = './vrt.gil.bat'
    bit = await open(loc)

    setTimeout(() => {
        if (bal.slv != null) bal.slv({ tmeBit: { idx: 'run-time' } })
    })

    return cpy
}
export const editTime = (cpy: TimeModel, bal: TimeBit, ste: State) => {
    const { exec } = require('child_process')

    process.chdir('../../studio/')

    exec('start Code.exe ../packages/gillisse', async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`)
        }

        process.chdir('../packages/001.time')

        if (bal.slv != null) bal.slv({ tmeBit: { idx: 'edit-time', dat: {} } })
    })

    return cpy
}

var patch = (ste, type, bale) => ste.dispatch({ type, bale })

export const patchTime = (cpy: TimeModel, bal: TimeBit, ste: State) => {
    debugger
    return cpy
}

export const cloudTime = (cpy: TimeModel, bal:TimeBit, ste: State) => {
 debugger
 return cpy;
 };
import { TimeModel } from '../time.model'
import TimeBit from '../fce/time.bit'
import State from '../../99.core/state'
