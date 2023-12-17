import { FinanceService } from './finance.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Variance } from '../models/variance.model';

const mockVarianceListResponseDto: Variance[] = [];
const ativo = 'ConquestOne';

describe('FinanceService', () => {
  let service: FinanceService;
  let httpServiceMock: jasmine.SpyObj<HttpClient>;
  let mockHttp: HttpTestingController;

  beforeEach(() => {
    httpServiceMock = jasmine.createSpyObj('httpClient', ['get']);

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {provide: HttpClient, useValue: httpServiceMock}
      ]
    });

    service = TestBed.inject(FinanceService);
    mockHttp = TestBed.inject(HttpTestingController);
  });

  it('should be created', function () {
    expect(service).toBeTruthy();
  });

  it('should be call method', function () {
    httpServiceMock.get.and.returnValue(
      of(mockVarianceListResponseDto)
    );

    service.getAll(ativo).subscribe({
      next: (response: Variance[]) => {
        expect(response).toEqual(mockVarianceListResponseDto);
      },
      error: (error: Error) => {
        console.log(error);
      }
    });
  });
});
