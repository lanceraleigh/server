import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-dictionary.dto';
import { DictionariesService } from './dictionaries.service';
import { DictionaryInterface } from './interfaces/Dictionary.interface';

@Controller('dictionaries')
export class DictionariesController {
  constructor(private readonly dictionariesService: DictionariesService) {}
  @Get()
  findAll(): DictionaryInterface[] {
    return this.dictionariesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): DictionaryInterface {
    return this.dictionariesService.findOne(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`;
  }

  @Delete(':id')
  delete(@Param('id') id) {
    return `Delete: ${id}`;
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
    return `Update: ${id} -- Name: ${updateItemDto.name}`;
  }
}
