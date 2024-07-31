import React from 'react';
import {
  ArrowDownTray,
  ArrowUpTray,
  MagnifyingGlass,
  PlusCircle,
  Printer,
} from './FDPJIcons';

export default function ContohButton() {
  return (
    <div className="flex flex-wrap gap-2">
      <div>
        <button className="btn btn-primary">Simpan</button>
      </div>
      <div>
        <button className="btn btn-primary">
          <PlusCircle />
          Tambah Data
        </button>
      </div>
      <div>
        <button className="btn btn-secondary">Secondary</button>
      </div>
      <div>
        <button className="btn btn-outline btn-primary">Batal</button>
      </div>
      <div>
        <button className="btn btn-outline btn-primary">
          <ArrowDownTray />
          Impor
        </button>
      </div>
      <div>
        <button className="btn btn-outline btn-primary">
          <ArrowUpTray />
          Ekspor
        </button>
      </div>
      <div>
        <button className="btn btn-outline btn-secondary">
          Outline Secondary
        </button>
      </div>
      <div>
        <button className="btn btn-outline btn-secondary">
          <MagnifyingGlass />
          Outline Secondary
        </button>
      </div>
      <div>
        <button className="btn btn-outline btn-secondary">
          <Printer />
          Print
        </button>
      </div>
    </div>
  );
}
