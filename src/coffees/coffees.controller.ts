import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { off } from 'process';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

export interface PaginationQuery {
    limit: number;
    offset: number;
} 

@Controller('coffees')
export class CoffeesController {

    constructor(private readonly coffeeService: CoffeesService) {}
    
    @Get()
    public findAll() {
        return this.coffeeService.findAll();
    }

    @Get(':id')
    public findOne(@Param('id') id: string) {
        return this.coffeeService.findOne(id);
    }

    @Post()
    @HttpCode(HttpStatus.OK)
    public create(@Body() createCoffeeDto: CreateCoffeeDto): any {
        return this.coffeeService.create(createCoffeeDto);
    }

    @Patch(':id')
    public update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
        return this.coffeeService.update(id, updateCoffeeDto);
    }

    @Delete(':id')
    public remove(@Param('id') id: string) {
        return this.coffeeService.remove(id);
    }
}
