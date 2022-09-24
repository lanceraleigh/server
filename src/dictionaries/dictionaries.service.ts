import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DictionaryEntity } from './dictionary.entity';
import { DictionaryInterface } from './interfaces/Dictionary.interface';

@Injectable()
export class DictionariesService {
  constructor(
    @InjectRepository(DictionaryEntity)
    private dictionariesRepository: Repository<DictionaryInterface>,
  ) {}
  private readonly dictionaries: DictionaryInterface[] = [
    {
      id: '748392057438920',
      name: 'spanish',
      qty: 10,
      description: 'get spanish',
    },
    {
      id: '5432543254325432',
      name: 'french',
      qty: 10,
      description: 'get french',
    },
  ];

  findAll(): DictionaryInterface[] {
    return this.dictionaries;
  }

  findOne(id: string): DictionaryInterface {
    return this.dictionaries.find((dictionary) => dictionary.id === id);
  }
}
