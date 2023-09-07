import { Action } from '../99.core/interface/action.interface'
import DiskBit from './fce/disk.bit'

export const INIT_DISK = '[Disk action] Init Disk'
export class InitDisk implements Action {
    readonly type = INIT_DISK
    constructor(public bale: DiskBit) {}
}

export const UPDATE_DISK = '[Disk action] Update Disk'
export class UpdateDisk implements Action {
    readonly type = UPDATE_DISK
    constructor(public bale: DiskBit) {}
}

export const READ_DISK = '[Disk action] Read Disk'
export class ReadDisk implements Action {
    readonly type = READ_DISK
    constructor(public bale: DiskBit) {}
}

export const WRITE_DISK = '[Disk action] Write Disk'
export class WriteDisk implements Action {
    readonly type = WRITE_DISK
    constructor(public bale: DiskBit) {}
}

export const INDEX_DISK = '[Index action] Index Disk'
export class IndexDisk implements Action {
    readonly type = INDEX_DISK
    constructor(public bale: DiskBit) {}
}

export const LOAD_LIST_DISK = '[Load_list action] Load_list Disk'
export class Load_listDisk implements Action {
    readonly type = LOAD_LIST_DISK
    constructor(public bale: DiskBit) {}
}

export const COPY_DISK = '[Copy action] Copy Disk'
export class CopyDisk implements Action {
    readonly type = COPY_DISK
    constructor(public bale: DiskBit) {}
}

export const FRAME_DISK = '[Frame action] Frame Disk'
export class FrameDisk implements Action {
    readonly type = FRAME_DISK
    constructor(public bale: DiskBit) {}
}

export const BATCH_DISK = '[Batch action] Batch Disk'
export class BatchDisk implements Action {
    readonly type = BATCH_DISK
    constructor(public bale: DiskBit) {}
}

export const TRASH_DISK = '[Trash action] Trash Disk'
export class TrashDisk implements Action {
    readonly type = TRASH_DISK
    constructor(public bale: DiskBit) {}
}

export const ENSURE_DISK = '[Ensure action] Ensure Disk'
export class EnsureDisk implements Action {
    readonly type = ENSURE_DISK
    constructor(public bale: DiskBit) {}
}

export const DELETE_DISK = '[Delete action] Delete Disk'
export class DeleteDisk implements Action {
    readonly type = DELETE_DISK
    constructor(public bale: DiskBit) {}
}

export type Actions =
    | InitDisk
    | UpdateDisk
    | WriteDisk
    | ReadDisk
    | IndexDisk
    | Load_listDisk
    | CopyDisk
    | FrameDisk
    | BatchDisk
    | TrashDisk
    | EnsureDisk
    | DeleteDisk
