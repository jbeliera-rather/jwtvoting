
/* Autogenerated file, do not edit! */

/* eslint-disable */
import {
  type AbiType,
  AztecAddress,
  type AztecAddressLike,
  CompleteAddress,
  Contract,
  type ContractArtifact,
  ContractBase,
  ContractFunctionInteraction,
  type ContractInstanceWithAddress,
  type ContractMethod,
  type ContractStorageLayout,
  type ContractNotes,
  decodeFromAbi,
  DeployMethod,
  EthAddress,
  type EthAddressLike,
  EventSelector,
  type FieldLike,
  Fr,
  type FunctionSelectorLike,
  loadContractArtifact,
  loadContractArtifactForPublic,
  type NoirCompiledContract,
  NoteSelector,
  Point,
  type PublicKey,
  PublicKeys,
  type Wallet,
  type U128Like,
  type WrappedFieldLike,
} from '@aztec/aztec.js';
import jwtVotingQuestContractArtifactJson from '../../target/contractVerifyproof-jwtVotingQuest.json' with { type: 'json' };
export const jwtVotingQuestContractArtifact = loadContractArtifact(jwtVotingQuestContractArtifactJson as NoirCompiledContract);



/**
 * Type-safe interface for contract jwtVotingQuest;
 */
export class jwtVotingQuestContract extends ContractBase {
  
  private constructor(
    instance: ContractInstanceWithAddress,
    wallet: Wallet,
  ) {
    super(instance, jwtVotingQuestContractArtifact, wallet);
  }
  

  
  /**
   * Creates a contract instance.
   * @param address - The deployed contract's address.
   * @param wallet - The wallet to use when interacting with the contract.
   * @returns A promise that resolves to a new Contract instance.
   */
  public static async at(
    address: AztecAddress,
    wallet: Wallet,
  ) {
    return Contract.at(address, jwtVotingQuestContract.artifact, wallet) as Promise<jwtVotingQuestContract>;
  }

  
  /**
   * Creates a tx to deploy a new instance of this contract.
   */
  public static deploy(wallet: Wallet, admin: AztecAddressLike, quest_objective: (bigint | number)) {
    return new DeployMethod<jwtVotingQuestContract>(PublicKeys.default(), wallet, jwtVotingQuestContractArtifact, jwtVotingQuestContract.at, Array.from(arguments).slice(1));
  }

  /**
   * Creates a tx to deploy a new instance of this contract using the specified public keys hash to derive the address.
   */
  public static deployWithPublicKeys(publicKeys: PublicKeys, wallet: Wallet, admin: AztecAddressLike, quest_objective: (bigint | number)) {
    return new DeployMethod<jwtVotingQuestContract>(publicKeys, wallet, jwtVotingQuestContractArtifact, jwtVotingQuestContract.at, Array.from(arguments).slice(2));
  }

  /**
   * Creates a tx to deploy a new instance of this contract using the specified constructor method.
   */
  public static deployWithOpts<M extends keyof jwtVotingQuestContract['methods']>(
    opts: { publicKeys?: PublicKeys; method?: M; wallet: Wallet },
    ...args: Parameters<jwtVotingQuestContract['methods'][M]>
  ) {
    return new DeployMethod<jwtVotingQuestContract>(
      opts.publicKeys ?? PublicKeys.default(),
      opts.wallet,
      jwtVotingQuestContractArtifact,
      jwtVotingQuestContract.at,
      Array.from(arguments).slice(1),
      opts.method ?? 'constructor',
    );
  }
  

  
  /**
   * Returns this contract's artifact.
   */
  public static get artifact(): ContractArtifact {
    return jwtVotingQuestContractArtifact;
  }

  /**
   * Returns this contract's artifact with public bytecode.
   */
  public static get artifactForPublic(): ContractArtifact {
    return loadContractArtifactForPublic(jwtVotingQuestContractArtifactJson as NoirCompiledContract);
  }
  

  public static get storage(): ContractStorageLayout<'admin' | 'tally' | 'quest_tally' | 'vote_ended' | 'active_at_block' | 'quest_objective' | 'quest_winner'> {
      return {
        admin: {
      slot: new Fr(1n),
    },
tally: {
      slot: new Fr(2n),
    },
quest_tally: {
      slot: new Fr(3n),
    },
vote_ended: {
      slot: new Fr(4n),
    },
active_at_block: {
      slot: new Fr(5n),
    },
quest_objective: {
      slot: new Fr(7n),
    },
quest_winner: {
      slot: new Fr(9n),
    }
      } as ContractStorageLayout<'admin' | 'tally' | 'quest_tally' | 'vote_ended' | 'active_at_block' | 'quest_objective' | 'quest_winner'>;
    }
    

  

  /** Type-safe wrappers for the public methods exposed by the contract. */
  public declare methods: {
    
    /** cast_vote(verification_key: array, proof: array, public_inputs: array, identifier: field, candidate: field) */
    cast_vote: ((verification_key: FieldLike[], proof: FieldLike[], public_inputs: FieldLike[], identifier: FieldLike, candidate: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** constructor(admin: struct, quest_objective: integer) */
    constructor: ((admin: AztecAddressLike, quest_objective: (bigint | number)) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** end_vote() */
    end_vote: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** get_description() */
    get_description: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** get_vote(candidate: field) */
    get_vote: ((candidate: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** public_dispatch(selector: field) */
    public_dispatch: ((selector: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** sync_notes() */
    sync_notes: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;
  };

  
}
